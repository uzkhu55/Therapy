"use client";
import { useEffect, useState } from "react";
import {
  PaperclipIcon,
  ArrowUpIcon,
  XIcon,
  ChevronRightIcon,
  BookOpenIcon,
  FolderIcon,
  MessageSquareIcon,
  Search,
  CirclePlus,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import axios from "axios";

interface ComponentProps {
  bg: string;
  text: string;
  textchat: string;
  bgchat: string;
}

interface Detail {
  username: string;
  _id: string; // Add _id to capture user ID
}

export default function Component({
  bg,
  text,
  bgchat,
  textchat,
}: ComponentProps) {
  const [searchValue, setSearchValue] = useState("");
  const [getUserdetail, setGetUserdetail] = useState<Detail[]>([]);
  const [recentChats, setRecentChats] = useState<string[]>([]);

  const [authId, setAuthId] = useState<string | null>(null); // To store authId

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://if-project8.onrender.com/user/userdetail"
        );
        console.log(response.data);

        setGetUserdetail(response.data);
        console.log("User details fetched:", response.data); // Check the entire response

        setAuthId(response.data[0]._id); // Assuming the first item has _id
        console.log("Authenticated user ID set:", response.data[0]._id); // Ensure _id is set properly
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchUserData();
  }, []);

  const handleAddToRecentChats = (username: string, userId: string) => {
    if (!recentChats.includes(username)) {
      setRecentChats((prevChats) => [...prevChats, username]);
    }
    setSearchValue("");
    createFolder(userId); // Create folder with chosen user
  };

  const createFolder = async (chosenUserId: string) => {
    if (!authId) {
      console.error("Authenticated user ID not found.");
      return;
    }

    console.log(
      "Creating folder with authId:",
      authId,
      "and chosenUserId:",
      chosenUserId
    ); // Added log for debugging

    try {
      const response = await axios.post(
        "https://if-project8.onrender.com/folder", // Update with your API endpoint
        { authId, chosenUserId }
      );
      console.log("Folder created successfully:", response.data);
    } catch (error) {
      console.error("Error creating folder:", error);
    }
  };

  return (
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
                      onClick={
                        () => handleAddToRecentChats(el.username, el._id) // Pass userId
                      }
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
          <div className="flex flex-col gap-2">
            {recentChats.length > 0 ? (
              recentChats.map((chat, index) => (
                <div
                  className="p-2 bg-[#325342] text-white   rounded-xl text-md font-bold shadow-sm"
                  key={index}
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
    </div>
  );
}
