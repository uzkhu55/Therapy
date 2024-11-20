"use client";
import React, { useState, useEffect, useRef } from "react";
import io, { Socket } from "socket.io-client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Component from "./Sidebar";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import Header from "./homePage/Header";
import { Ellipsis } from "lucide-react";

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
  const [message, setMessage] = useState<Record<string, string>>({});
  console.log(message, "asd");

  const [getmessages, setGetmessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [room, setRoom] = useState<string>("chat-room");
  const user = useUser();

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "instant" });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const addMessage = async () => {
    if (inputValue.trim() === "") return;

    try {
      const res = await axios.post("http://localhost:8000/user/addmessage", {
        author: message.authId,
        inputValue,
      });
      console.log(res.data);

      socket.emit("send-chat-message", { inputValue, user: message });
      setInputValue("");
    } catch (error) {
      console.error("Error adding message:", error);
    }
  };

  useEffect(() => {
    const getUserdetail = async () => {
      const res = window.localStorage.getItem("userDetail");
      if (res) {
        const userDetail = JSON.parse(res);
        setMessage(userDetail);
      }
    };

    const fetchData = async () => {
      try {
        const { data } = await axios.get<Message[]>(
          "http://localhost:8000/user/getmessage"
        );
        console.log({ data });

        if (!data[0].content.length) {
          setGetmessages([]);
        } else {
          setGetmessages(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    getUserdetail();
    scrollToBottom();
  }, []);
  useEffect(() => {
    scrollToBottom();
  }, [getmessages]);

  useEffect(() => {
    socket.emit("join-room", room, message.firstName);

    socket.on("chat-message", (newMessage: Message) => {
      setGetmessages((prevMessages) =>
        prevMessages.map((el) =>
          el.author === newMessage.author
            ? {
                ...el,
                content: [...el.content, newMessage.content as string],
              }
            : el
        )
      );
      // scrollToBottom();
    });

    return () => {
      socket.off("chat-message");
    };
  }, []);

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
      <div className="flex absolute w-screen top-80px bg-white">
        <div className="flex relative h-[978px] rounded-lg top-[81px] w-screen ">
          <Component
            textchat="text-black"
            bgchat=""
            text="text-white/70"
            bg=""
          />
          {/* <div className="border-r-[1px] border-[#325343]"></div> */}
          <div className="w-3/4  bg-[#f3f3f3] flex flex-col rounded-r-lg ">
            <div className="flex rounded-2xl m-[10px] bg-[#ffffff] p-6 justify-between">
              <div className="flex gap-4">
                <div>{message.username}</div>
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
            <div className="flex sticky-top flex-col mx-[10px] rounded-2xl bg-white  relative gap-4 overflow-auto h-[800px]">
              {getmessages?.map((msg, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-white gap-8 w-[70%] p-4 rounded-lg"
                >
                  <div className="flex flex-col gap-5">
                    {Array.isArray(msg?.content) &&
                      msg?.content.map((el, index) => {
                        return (
                          <div key={index} className="flex flex-col gap-2">
                            <div>{msg.author}</div>
                            <div>{el}</div>
                          </div>
                        );
                      })}
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
