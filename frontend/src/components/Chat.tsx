"use client";
import React, { useState, useEffect, useRef } from "react";
import io, { Socket } from "socket.io-client";
import { Search, CirclePlus, Settings, Link2, SmilePlus } from "lucide-react";
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

interface ComponentProps {
  bg: string;
  text: string;
  textchat: string;
  bgchat: string;
}

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

const socket: Socket = io("http://localhost:8000");

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
  const router = useRouter();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(true);
  const [attachments, setAttachments] = useState<File[]>([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const [getUserdetail, setGetUserdetail] = useState<Detail[]>([]);
  const [recentChats, setRecentChats] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    router.push("/chat");
  }, []);
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
        const recentUserId = localStorage.getItem("chosenUserId");

        const response = await axios.get(
          "http://localhost:8000/user/userdetail"
        );
        setGetUserdetail(response.data);

        const convos = await axios.get(
          `http://localhost:8000/user/myConvorsations/${user?.id}`
        );
        setRecentChats(convos.data);

        if (recentUserId) {
          setChosenUserId(recentUserId);

          const isThereConversationExisting = await axios.get(
            `http://localhost:8000/getUsersConversation?userOne=${user?.id}&userTwo=${recentUserId}`
          );

          if (isThereConversationExisting.data.message) {
            const getConversationMessages = await axios.get(
              `http://localhost:8000/user/getmessage/${isThereConversationExisting.data.conversations._id}`
            );
            setGetmessages(getConversationMessages.data);
          }
        }
        const usernameFromQuery = searchParams.get("username");
        if (usernameFromQuery) {
          const userDetail = response.data.find(
            (user: { username: string }) => user.username === usernameFromQuery
          );
          if (userDetail) {
            setChosenUserId(userDetail._id);
            localStorage.setItem("chosenUserId", userDetail._id);

            const isThereConversationExisting = await axios.get(
              `http://localhost:8000/getUsersConversation?userOne=${user?.id}&userTwo=${userDetail._id}`
            );

            if (isThereConversationExisting.data.message) {
              const getConversationMessages = await axios.get(
                `http://localhost:8000/user/getmessage/${isThereConversationExisting.data.conversations._id}`
              );
              setGetmessages(getConversationMessages.data);
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
  }, [user]);

  const handleAddToRecentChats = async (
    username: string,
    chosenUserId: string
  ) => {
    try {
      if (!recentChats.includes(username)) {
        setRecentChats((prevChats) => [username, ...prevChats]);
      }

      setChosenUserId(chosenUserId);
      localStorage.setItem("chosenUserId", chosenUserId);

      const isThereConversationExisting = await axios.get(
        `http://localhost:8000/getUsersConversation?userOne=${user?.id}&userTwo=${chosenUserId}`
      );

      if (!isThereConversationExisting.data.message) {
        setGetmessages([]);
        return;
      }

      const getConversationMessages = await axios.get(
        `http://localhost:8000/user/getmessage/${isThereConversationExisting.data.conversations._id}`
      );
      setGetmessages(getConversationMessages.data);
      setSearchValue("");
      scrollToBottom();
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

  const uploadAttachments = async (files: File[]) => {
    const uploadedUrls: string[] = [];

    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.post(
          "http://localhost:8000/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        uploadedUrls.push(response.data.url);
      } catch (error: any) {
        throw new Error(`Error uploading file: ${file.name}`);
      }
    }

    return uploadedUrls;
  };

  const addMessage = async () => {
    if (inputValue.trim() === "" && attachments.length === 0) {
      console.error("Message input is empty and no attachments are selected.");
      return;
    }

    try {
      const uploadedAttachments = await uploadAttachments(attachments);

      console.log("Uploaded attachments:", uploadedAttachments);

      const response = await axios.post(
        "http://localhost:8000/user/addmessage",
        {
          author: user?.id,
          chosenUserId,
          inputValue,
          attachments: uploadedAttachments,
        }
      );

      console.log("Message successfully added:", response.data);

      socket.emit("send-chat-message", {
        inputValue,
        user: { authId: user?.id },
        attachments: uploadedAttachments,
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

  // Socket event listeners for chat messages
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
                              handleAddToRecentChats(el.username, el._id);
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
                        <div key={index} className="flex pl-12 items-center">
                          <div
                            className="p-2 bg-[#325342] text-white hover:bg-[#325040] rounded-xl text-md font-bold shadow-sm"
                            onClick={() =>
                              handleAddToRecentChats(el.username, el._id)
                            }
                          >
                            <div className="text-sm font-serif">
                              {el.username}
                            </div>{" "}
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
            <div className=" rounded-lg absolute p-1 top-[152px] left-7">
              <img
                src={user?.imageUrl || "/default-avatar.png"}
                alt="User Profile"
                className=" w-8 h-8 top-[164px] left-7 z-50  rounded-full"
              />
            </div>
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
            <div className="flex sticky-top flex-col mx-[10px] rounded-2xl bg-white relative gap-4 overflow-auto h-[800px]">
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
                    className="flex flex-col bg-white gap-2 w-[98%] p-4 items-end rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col bg-blue-600 text-white w-fit rounded-lg p-1 px-2 gap-5">
                        <div className="font-medium text-base">
                          {msg.content}
                        </div>
                      </div>
                      <img
                        src={user?.imageUrl || "/default-avatar.png"}
                        alt="User Profile"
                        className="rounded-full w-8 h-8"
                      />
                    </div>
                    <div className="w-4 text-sm pr-8 h-4">{formattedTime}</div>
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
