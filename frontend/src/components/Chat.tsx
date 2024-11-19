"use client";
import React, { useState, useEffect } from "react";
import io, { Socket } from "socket.io-client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Component from "./Sidebar";
import Chatheader from "./Chatheader";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import Header from "./homePage/Header";

interface Message {
  _id: string;
  author: string;
  content: string | string[];
  isRead: boolean;
  timeStamp: string;
  attachments?: string[];
  __v: number;
}

const socket: Socket = io("https://if-project8.onrender.com");

const Chat: React.FC = () => {
  const [message, setMessage] = useState<Record<string, string>>({});
  const [getmessages, setGetmessages] = useState<Message[]>([]);
  const [getUserdetail, setGetUserdetail] = useState("");

  const [inputValue, setInputValue] = useState<string>("");
  const [room, setRoom] = useState<string>("chat-room");

  const user = useUser();

  useEffect(() => {
    const getUserdetail = async () => {
      const res = window.localStorage.getItem("userDetail");
      if (res) {
        const userDetail = JSON.parse(res);
        setMessage(userDetail);
      }
      // console.log(res);
    };
    getUserdetail();
  }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://if-project8.onrender.com/user/userdetail"
  //       );
  //       setGetUserdetail(response.data[0]);
  //       console.log(response.data[0]);
  //     } catch (error) {
  //       // console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Message[]>(
          "https://if-project8.onrender.com/user/getmessage"
        );
        setGetmessages(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

    socket.emit("join-room", room, message.firstName);

    socket.on("chat-message", (newMessage: Message) => {
      setGetmessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off("chat-message");
    };
  }, [room, message.firstName]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const addMessage = async () => {
    if (inputValue.trim() === "") return;

    try {
      const res = await axios.post(
        "https://if-project8.onrender.com/user/addmessage",
        {
          author: message.authId,
          inputValue,
        }
      );

      socket.emit("send-chat-message", inputValue);

      setGetmessages((prevMessages) => [
        ...prevMessages,
        {
          _id: res.data._id,
          author: message.authId,
          content: inputValue,
          timeStamp: new Date().toString(),
          isRead: false,
          __v: 0,
        },
      ]);

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
      <div className="flex absolute w-screen top-80px bg-white">
        <div className="flex relative h-[978px] rounded-lg top-[81px] border-[1px] border-black w-screen ">
          <Component
            textchat="text-black"
            bgchat=""
            text="text-white/70"
            bg=""
          />
          <div className="border-r-[1px] border-[#325343]"></div>
          <div className="w-3/4  bg-[#f3f3f3] flex flex-col rounded-r-lg ">
            <div className="flex border-[1px] rounded-r-lg bg-[#ffffff] p-4 justify-between">
              <div>
                <div>{message.username}</div>
                <div className="text-green-400">Online</div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger>...</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Block</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">
                    Report
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex flex-col w-full top-[20px] relative mx-12 gap-4 overflow-y-auto h-[800px]">
              {getmessages.map((msg, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-white gap-8 w-[70%] p-4 rounded-lg"
                >
                  {Array.isArray(msg) ? (
                    msg.map(({ content, author }, contentIndex) => (
                      <div className="flex gap-12" key={contentIndex}>
                        {content}
                      </div>
                    ))
                  ) : (
                    <div className="flex w-full gap-[200px]">
                      <div>{msg.author}</div>
                      <div>{msg.content}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex mx-12 items-center">
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
