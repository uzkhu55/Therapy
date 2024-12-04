"use client";
import React, { useState, useEffect, useRef } from "react";
import io, { Socket } from "socket.io-client";
import { Search, Link2, SmilePlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import Header from "./homePage/Header";
import { Ellipsis } from "lucide-react";
import { useRouter } from "next/navigation";
import { Loading } from "./Loading";
import { Button } from "./ui/button";
import { useSearchParams } from "next/navigation";
interface Detail {
  username: string;
  _id: string;
}

interface Message {
  _id: string;
  senderId: any;
  content: string | string[];
  isRead: boolean;
  timeStamp: string;
  attachments?: string[];
  __v: number;
}
interface User {
  id: string;
  username: string;
  email: string;
  imageUrl: string;
}
// https://if-project8.onrender.com
const socket: Socket = io("https://if-project8.onrender.com");

const avatar = [
  { img: "/avatar1.png" },
  { img: "/avatar2.png" },
  { img: "/avatar3.png" },
  { img: "/avatar4.png" },
  { img: "/avatar5.png" },
  { img: "/default-avatar.png" },
];

const Chat: React.FC = () => {
  const [getmessages, setGetmessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [sentMEssage, setSentMessage] = useState<boolean>(false);
  const [chosenUserId, setChosenUserId] = useState<string>("");
  const [room, setRoom] = useState<string>("chat-room");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const { user, isSignedIn, isLoaded } = useUser() as {
    user: User | null;
    isSignedIn: boolean;
    isLoaded: boolean;
  };
  console.log(user);

  const router = useRouter();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(true);
  const [attachments, setAttachments] = useState<File[]>([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const [getUserdetail, setGetUserdetail] = useState<Detail[]>([]);
  const [recentChats, setRecentChats] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [chosenUserId]);

  useEffect(() => {
    setLoading(true);

    const fetchInitialData = async () => {
      try {
        const usernameFromQuery = searchParams.get("username");

        const response = await axios.get(
          "https://if-project8.onrender.com/user/userdetail"
        );

        setGetUserdetail(response.data);

        const convos = await axios.get(
          `https://if-project8.onrender.com/user/myConvorsations/${user?.id}`
        );

        const users = convos.data.map((el: any) => el.username);
        setRecentChats([...users, usernameFromQuery]);

        if (usernameFromQuery) {
          const userDetail = response.data.find(
            (user: { username: string }) => user.username === usernameFromQuery
          );

          if (userDetail) {
            setChosenUserId(userDetail._id);

            const exactUser = convos?.data?.find(
              (el: any) => el.username === userDetail.username
            );

            if (exactUser) {
              const { data } = await axios.get(
                `https://if-project8.onrender.com/getUsersConversation?convId=${exactUser.convId}`
              );

              const getConversationMessages = await axios.get(
                `https://if-project8.onrender.com/user/getmessage/${data.conversations._id}`
              );
              setGetmessages(getConversationMessages.data);
              scrollToBottom();
            } else {
              setGetmessages([]);
            }
          }
        }

        scrollToBottom();
      } catch (error) {
        console.error("Error fetching initial data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, [user, searchParams]);

  const handleAddToRecentChats = async (username: string) => {
    try {
      if (!recentChats.includes(username)) {
        setRecentChats((prevChats) => [username, ...prevChats]);
      }
      router.replace(`/chat?username=${username}`);

      // setChosenUserId(chosenUserId);
      // localStorage.setItem("chosenUserId", chosenUserId);

      // const isThereConversationExisting = await axios.get(
      //   `https://if-project8.onrender.com/getUsersConversation?userOne=${user?.id}&userTwo=${chosenUserId}`
      // );

      // if (!isThereConversationExisting.data.message) {
      //   setGetmessages([]);
      //   return;
      // }

      // const getConversationMessages = await axios.get(
      //   `https://if-project8.onrender.com/user/getmessage/${isThereConversationExisting.data.conversations._id}`
      // );
      // setGetmessages(getConversationMessages.data);
      setSearchValue("");
      // scrollToBottom();
    } catch (error) {
      console.error("Error adding to recent chats:", error);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [getmessages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const uploadAttachments = async (files: File[]) => {
  //   const uploadedUrls: string[] = [];

  //   for (const file of files) {
  //     const formData = new FormData();
  //     formData.append("file", file);

  //     try {
  //       const response = await axios.post(
  //         "https://if-project8.onrender.com/upload",
  //         formData,
  //         {
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //           },
  //         }
  //       );

  //       uploadedUrls.push(response.data.url);
  //     } catch (error: any) {
  //       throw new Error(`Error uploading file: ${file.name}`);
  //     }
  //   }

  //   return uploadedUrls;
  // };

  const addMessage = async () => {
    if (inputValue.trim() === "" && attachments.length === 0) {
      console.error("Message input is empty and no attachments are selected.");
      return;
    }

    try {
      await axios.post("https://if-project8.onrender.com/user/addmessage", {
        author: user?.id,
        chosenUserId,
        inputValue,
      });
      socket.emit("send-chat-message", {
        inputValue,
        user: { authId: user?.id },
      });

      setInputValue("");
      setAttachments([]);
      setSentMessage(true);

      setTimeout(() => {
        setSentMessage(false);
      }, 100);
    } catch (error: any) {
      if (error.response) {
        console.error("Error adding message:", error.response.data);
      } else {
        console.error("Error adding message:", error.message);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setAttachments((prev) => [...prev, ...Array.from(files)]);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    socket.emit("join-room", room);

    socket.on("chat-message", (newMessage: Message) => {
      setGetmessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off("chat-message");
    };
  }, [sentMEssage]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  if (!isLoaded || !isSignedIn || loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#325343] text-white">
        <Loading />
      </div>
    );
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      addMessage();
      setInputValue("");
    }
  };
  return (
    <div className="h-screen w-screen gap-12  flex flex-col bg-white">
      <Header />
      <div className="flex absolute h-screen  w-screen top-80px bg-white">
        <div className="flex relative w-full h-[978px]  rounded-lg top-[81px]">
          <div
            className={`${
              isSidebarVisible
                ? "translate-x-0 w-1/4  "
                : "-translate-x-full w-24 "
            } transform transition-all duration-300 ease-in-out flex h-full rounded-l-lg bg-[#f3f3f3] text-black overflow-hidden`}
          >
            <div className="flex w-[100%] flex-col">
              <div className="flex w-[97%] bg-white rounded-2xl p-5 m-[10px] items-center justify-evenly">
                <div className="font-bold text-xl pl-8 text-[#325343]">
                  Chat
                </div>
                <div className="w-[220px] relative">
                  <Input
                    className="focus-visible:outline-none rounded-2xl"
                    placeholder="Search username"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />

                  <div className="absolute flex flex-col gap-2 top-14 bg-white rounded-xl shadow-md z-10 w-full">
                    {searchValue &&
                      getUserdetail
                        .filter((user) =>
                          user.username
                            .toLocaleLowerCase()
                            .includes(searchValue.toLocaleLowerCase())
                        )
                        .map((el, index) => (
                          <div
                            className="p-2 bg-[#325342] text-white rounded-xl cursor-pointer hover:bg-[#2a4537] text-sm"
                            key={index}
                            onClick={() => {
                              handleAddToRecentChats(el.username);
                              setSearchValue("");
                            }}
                          >
                            {el.username}
                          </div>
                        ))}
                  </div>
                  <Search className="absolute top-2 right-2 text-gray-400" />
                </div>
              </div>
              <div
                className="bg-white h-full mb-4 p-4 ml-[10px] rounded-2xl px-4"
                style={{ overflow: "visible" }}
              >
                <div className="text-sm font-black z-100 pb-4 px-2 text-black">
                  Recent Chats
                </div>
                <div className="flex cursor-pointer flex-col gap-2">
                  {getUserdetail.length > 0 ? (
                    getUserdetail
                      .filter((el) => recentChats.includes(el.username))
                      .map((el, index) => (
                        <div key={index} className="flex  items-center">
                          <div
                            className="p-2 w-[400px] bg-[#325342] text-white hover:bg-[#325040] rounded-xl text-md font-bold shadow-sm"
                            onClick={() => handleAddToRecentChats(el.username)}
                          >
                            <div className="text-sm font-serif">
                              {avatar.map((el, index) => (
                                <div key={index}>
                                  <img
                                    src={el.img}
                                    className="w-6 h-6"
                                    alt={`avatar-${index}`}
                                  />
                                </div>
                              ))}
                              {el.username}
                            </div>
                          </div>
                        </div>
                      ))
                  ) : (
                    <div className="text-gray-500 text-sm">No recent chats</div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              isSidebarVisible ? "w-3/4" : " w-full"
            } bg-[#f3f3f3] flex flex-col rounded-r-lg transition-all duration-300 ease-in-out`}
          >
            <div className=" py-2 rounded-lg absolute top-[28px] left-6">
              <button
                onClick={toggleSidebar}
                className=" top z-50 p-2 bg-[#325342] text-xs flex flex-col text-white rounded-full shadow-md"
              >
                {isSidebarVisible ? "Hide" : "Show"}
              </button>
            </div>
            <div className="flex rounded-2xl m-[10px] bg-[#ffffff] p-6 justify-between">
              <div className="flex items-center  gap-4">
                <img
                  src={user?.imageUrl || "/default-avatar.png"}
                  alt="User Profile"
                  className="rounded-full w-8 h-8"
                />
                <div className="text-green-400">Online</div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Ellipsis />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Block</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">
                    Report
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex sticky-top flex-col mx-[10px] rounded-2xl bg-white gap-4 overflow-auto h-[800px]">
              {getmessages?.map((msg, index) => {
                const timestamp = new Date(msg.timeStamp);
                const formattedTime = timestamp.toLocaleString("en-US", {
                  timeZone: "Asia/Ulaanbaatar",
                  hour12: false,
                  hour: "numeric",
                  minute: "numeric",
                });
                return (
                  <div
                    key={index}
                    className={`flex w-full ${
                      msg?.senderId?.authId === user?.id
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`font-medium text-base flex gap-2 flex-col`}
                    >
                      <div className="flex flex-col gap-2">
                        {msg?.senderId?.authId !== user?.id ? (
                          // If the message sender is not the user
                          <div className="flex pl-4 pt-4 items-center gap-2">
                            <img
                              src={
                                msg?.senderId?.authId !== user?.id
                                  ? "/default-avatar.png"
                                  : user?.imageUrl
                              }
                              alt="User Profile"
                              className="rounded-full w-8 h-8"
                            />
                            <div className="flex bg-gray-200 p-2 rounded-xl justify-end">
                              {msg?.content}
                            </div>
                          </div>
                        ) : (
                          // If the message sender is the user
                          <div className="flex pt-4 pr-4 items-center gap-2">
                            <div className="flex bg-blue-600 p-2 rounded-xl text-white justify-start">
                              {msg?.content}
                            </div>
                            <img
                              src={
                                msg?.senderId?.authId !== user?.id
                                  ? "/default-avatar.png"
                                  : user?.imageUrl
                              }
                              alt="User Profile"
                              className="rounded-full w-8 h-8"
                            />
                          </div>
                        )}

                        {/* Format time based on sender */}
                        <div
                          className={`w-full text-sm ${
                            msg?.senderId?.authId !== user?.id
                              ? "text-left pl-4"
                              : "text-right pr-4"
                          } font-thin`}
                        >
                          {formattedTime}
                        </div>
                      </div>

                      <div className="w-4 h-4"></div>
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef}></div>
            </div>

            <div className="flex mx-[10px] p-4 mb-4 mt-2 rounded-2xl bg-white items-center">
              <div className="flex gap-4">
                <Button variant="secondary" size="icon" className="shrink-0">
                  <SmilePlus className="w-5 h-5" />
                </Button>

                <Button
                  variant="secondary"
                  size="icon"
                  className="shrink-0 relative"
                >
                  <input
                    type="file"
                    id="file-input"
                    onChange={handleFileSelect}
                    multiple
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <Link2 className="w-5 h-5" />
                </Button>
              </div>
              {attachments.length > 0 && (
                <div className="flex flex-wrap gap-2 ml-2">
                  {attachments.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 bg-gray-200 rounded-lg"
                    >
                      <span>{file.name}</span>
                      <button
                        onClick={() => removeAttachment(index)}
                        className="text-red-500"
                      >
                        ✖
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <input
                type="text"
                ref={inputRef}
                className="flex-1 pl-2 bg-transparent border-none focus:outline-none text-sm"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
              />
              <button
                onClick={addMessage}
                className="px-4 py-2 bg-[#325342] text-white rounded-lg"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
