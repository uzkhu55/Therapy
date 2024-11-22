"use client";

import React, { useState, useEffect, useRef } from "react";
import io, { Socket } from "socket.io-client";
import { Search, CirclePlus, Ellipsis } from "lucide-react";
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

interface Detail {
  username: string;
  _id: string;
}

interface Message {
  _id: string;
  author: string;
  content: string | string[];
  isRead: boolean;
  timeStamp: string;
  attachments?: string[];
  __v: number;
}

const socket: Socket = io("http://localhost:8000");

const Chat: React.FC = () => {
  const [message, setMessage] = useState<Detail | null>(null);
  const [getMessages, setGetMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [chosenUserId, setChosenUserId] = useState<string>("");
  const [recentChats, setRecentChats] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [userDetails, setUserDetails] = useState<Detail[]>([]);
  const [authId, setAuthId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Fetch user details and authId from localStorage
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = window.localStorage.getItem("userDetail");
        if (res) {
          const userDetail = JSON.parse(res);
          setMessage(userDetail);
          setAuthId(userDetail.authId);
        }

        const response = await axios.get(
          "http://localhost:8000/user/userdetail"
        );
        setUserDetails(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserData();
  }, []);

  // Fetch messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axios.get<Message[]>(
          "http://localhost:8000/user/getmessage"
        );
        setGetMessages(data.length ? data : []);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  // Scroll to the bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [getMessages]);

  // Socket connection
  useEffect(() => {
    if (message) {
      socket.emit("join-room", "chat-room", message.username);

      socket.on("chat-message", (newMessage: Message) => {
        setGetMessages((prev) => [
          ...prev,
          {
            ...newMessage,
            content: Array.isArray(newMessage.content)
              ? newMessage.content
              : [newMessage.content],
          },
        ]);
      });

      return () => {
        socket.off("chat-message");
      };
    }
  }, [message]);

  const handleAddToRecentChats = (username: string, userId: string) => {
    if (!recentChats.includes(username)) {
      setRecentChats((prev) => [...prev, username]);
    }
    setSearchValue("");
    setChosenUserId(userId);
    createFolder(userId);
  };

  const createFolder = async (chosenUserId: string) => {
    if (!authId) {
      console.error("Authenticated user ID not found.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/folder", {
        authId,
        chosenUserId,
      });
      console.log("Folder created successfully:", response.data);
    } catch (error) {
      console.error("Error creating folder:", error);
    }
  };

  const addMessage = async () => {
    if (inputValue.trim() === "") return;

    try {
      const response = await axios.post(
        "http://localhost:8000/user/addmessage",
        {
          author: authId,
          chosenUserId,
          content: inputValue,
        }
      );

      console.log("Message added successfully:", response.data);

      socket.emit("send-chat-message", { inputValue, user: { authId } });
      setInputValue("");
    } catch (error) {
      console.error("Error adding message:", error);
    }
  };

  return (
    <div className="h-screen w-screen gap-12 flex flex-col bg-white">
      <Header
        bg1=""
        bg2=""
        under1=""
        under2=""
        under="border-b-2"
        bg="text-[#325343]"
      />
      <div className="flex absolute w-screen top-20 bg-white">
        <div className="flex relative h-[978px] rounded-lg top-20 w-screen">
          {/* Sidebar */}
          <div className="flex w-1/4 h-full rounded-l-lg bg-[#f3f3f3] text-black">
            <div className="flex flex-col w-full">
              {/* Search */}
              <div className="flex w-full bg-white rounded-2xl p-4 m-4 items-center justify-evenly">
                <div className="font-bold text-xl text-[#325343]">Chat</div>
                <Input
                  className="focus-visible:outline-none rounded-2xl"
                  placeholder="Search username"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <div className="absolute flex flex-col gap-2 top-14 bg-white rounded-xl shadow-md z-10 w-full">
                  {searchValue &&
                    userDetails
                      .filter((user) =>
                        user.username
                          .toLowerCase()
                          .includes(searchValue.toLowerCase())
                      )
                      .map((user, index) => (
                        <div
                          key={index}
                          className="p-2 bg-[#325342] text-white rounded-xl cursor-pointer hover:bg-[#2a4537]"
                          onClick={() =>
                            handleAddToRecentChats(user.username, user._id)
                          }
                        >
                          {user.username}
                        </div>
                      ))}
                </div>
                <Search className="absolute top-2 right-2 text-gray-400" />
                <CirclePlus className="text-[#325343]" />
              </div>

              {/* Recent Chats */}
              <div className="bg-white w-full h-full p-4 rounded-2xl">
                <div className="text-sm font-black py-4">Recent Chats</div>
                {recentChats.length > 0 ? (
                  recentChats.map((chat, index) => (
                    <div
                      key={index}
                      className="p-2 bg-[#325342] text-white rounded-xl text-md font-bold"
                    >
                      {chat}
                    </div>
                  ))
                ) : (
                  <div className="text-gray-500 text-sm">No recent chats</div>
                )}
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="w-3/4 bg-[#f3f3f3] flex flex-col rounded-r-lg">
            <div className="flex rounded-2xl m-4 bg-white p-6 justify-between">
              <div className="flex gap-4">
                <div>{message?.username}</div>
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

            <div className="flex flex-col mx-4 bg-white rounded-2xl gap-4 overflow-auto h-[800px]">
              {getMessages.map((msg, index) => (
                <div key={index} className="flex flex-col gap-4 p-4 rounded-lg">
                  <div>{msg.author}</div>
                  {Array.isArray(msg.content)
                    ? msg.content.map((content, idx) => (
                        <div key={idx}>{content}</div>
                      ))
                    : msg.content}
                </div>
              ))}
              <div ref={messagesEndRef}></div>
            </div>

            <div className="flex mx-4 p-4 mt-2 rounded-2xl bg-white items-center">
              <input
                type="text"
                className="flex-1 outline-none p-2 border border-gray-300 rounded-xl"
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                placeholder="Type your message"
              />
              <button
                onClick={addMessage}
                className="ml-2 p-2 bg-[#325343] text-white rounded-xl hover:bg-[#2a4537]"
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
