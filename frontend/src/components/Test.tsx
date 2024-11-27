"use client";
import React, { useState, useEffect, useRef } from "react";
import io, { Socket } from "socket.io-client";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import Header from "./homePage/Header";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "./ui/input";
import { CirclePlus, Ellipsis, Search } from "lucide-react";

const socket: Socket = io("http://localhost:8000");

interface Detail {
  username: string;
  _id: string;
}

interface Message {
  _id: string;
  senderId: any;
  content: string;
  isRead: boolean;
  timeStamp: string;
}

const Chat: React.FC = () => {
  const [getmessages, setGetmessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [chosenUserId, setChosenUserId] = useState<string>("");
  const [room, setRoom] = useState<string>("chat-room");
  const [getUserdetail, setGetUserdetail] = useState<Detail[]>([]);
  const [recentChats, setRecentChats] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [searchValue, setSearchValue] = useState("");

  const { user } = useUser();

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const recentUserId = localStorage.getItem("chosenUserId");
        const response = await axios.get(
          "http://localhost:8000/user/userdetail"
        );
        setGetUserdetail(response.data);

        if (recentUserId) {
          setChosenUserId(recentUserId);
          socket.emit("join-room", recentUserId);

          const messages = await axios.get(
            `http://localhost:8000/user/getmessage/${recentUserId}`
          );
          setGetmessages(messages.data);
        }
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    fetchInitialData();

    socket.on("receive-message", (newMessage: Message) => {
      setGetmessages((prevMessages) => [...prevMessages, newMessage]);
      scrollToBottom();
    });

    return () => {
      socket.off("receive-message");
      socket.disconnect();
    };
  }, [user]);

  const handleAddToRecentChats = async (
    username: string,
    chosenUserId: string
  ) => {
    try {
      if (!recentChats.includes(username)) {
        setRecentChats((prevChats) => [...prevChats, username]);
      }

      setChosenUserId(chosenUserId);
      localStorage.setItem("chosenUserId", chosenUserId);

      socket.emit("join-room", chosenUserId);

      const messages = await axios.get(
        `http://localhost:8000/user/getmessage/${chosenUserId}`
      );
      setGetmessages(messages.data);
    } catch (error) {
      console.error("Error adding to recent chats:", error);
    }
  };

  const addMessage = async () => {
    if (inputValue.trim() === "") return;

    try {
      const newMessage = {
        senderId: user?.id,
        content: inputValue,
        chosenUserId,
      };

      await axios.post("http://localhost:8000/user/addmessage", newMessage);

      socket.emit("send-message", {
        ...newMessage,
        room: chosenUserId,
      });

      setInputValue("");
    } catch (error) {
      console.error("Error adding message:", error);
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-screen w-screen gap-12 flex flex-col bg-white">
      <Header />
      <div className="flex absolute w-screen top-80px bg-white">
        <div className="flex relative h-[978px] rounded-lg top-[81px] w-screen">
          <div className="flex w-1/4 h-[100%] rounded-l-lg bg-[#f3f3f3] text-black">
            <div className="flex w-[100%] flex-col">
              <div className="flex w-[97%] bg-white rounded-2xl p-4 m-[10px] items-center justify-evenly">
                <div className="font-bold text-xl text-[#325343]">Chat</div>
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
                              handleAddToRecentChats(el.username, el._id); // Add to recent chats
                              setSearchValue(""); // Clear searchValue to hide dropdown
                            }}
                          >
                            {el.username}
                          </div>
                        ))}
                  </div>

                  <Search className="absolute top-2 right-2 text-gray-400" />
                </div>
                <button className="w-[24px] text-[#325343]">
                  <CirclePlus />
                </button>
              </div>
              <div className="bg-white w-[97%] h-full mb-4 p-4 ml-[10px] rounded-2xl px-4">
                <div className="text-sm font-black py-4 px-2 text-black">
                  Recent Chats
                </div>
                <div className="flex cursor-pointer flex-col gap-2">
                  {getUserdetail.length > 0 ? (
                    getUserdetail
                      .filter((user) => recentChats.includes(user.username))
                      .map((user, index) => (
                        <div
                          className="p-2 bg-[#325342] text-white hover:bg-[#325040] rounded-xl text-md font-bold shadow-sm"
                          key={index}
                          onClick={
                            () =>
                              handleAddToRecentChats(user.username, user._id) // Pass userId
                          }
                        >
                          {user.username}
                        </div>
                      ))
                  ) : (
                    <div className="text-gray-500 text-sm">No recent chats</div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/4 bg-[#f3f3f3] flex flex-col rounded-r-lg">
            <div className="flex rounded-2xl m-[10px] bg-[#ffffff] p-6 justify-between">
              <div className="flex gap-4">
                <div>{user?.username}</div>
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
              {getmessages?.map((msg, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-white gap-8 w-[70%] p-4 rounded-lg"
                >
                  <div className="flex flex-col gap-5">
                    <div key={index} className="flex flex-col gap-2">
                      <img
                        className="w-6 rounded-full h-6"
                        src={msg?.senderId?.image || null}
                        alt="Sender"
                      />

                      <div className="bg-gray-200 rounded-lg p-2 w-fit">
                        {msg.content}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef}></div>
            </div>

            <div className="flex mx-[10px] p-4 mb-4 mt-2 rounded-2xl bg-white items-center">
              <input
                type="text"
                className="flex-1 outline-none p-2 border border-gray-300 rounded-xl"
                onChange={handleChange}
                value={inputValue}
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
