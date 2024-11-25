"use client";
import React from "react";
import { Home, User, MessageCircle, Phone, StickyNote } from "lucide-react"; // Importing icons
import { useUser } from "@clerk/clerk-react";
import Link from "next/link";

const postSideBar = [
  { label: "Нүүр хуудас", icon: <Home className="w-5 h-5" />, to: "/" },
  {
    label: "Мэргэжилтэн",
    icon: <User className="w-5 h-5" />,
    to: "/userDetail",
  },
  { label: "Чат", icon: <MessageCircle className="w-5 h-5" />, to: "/chat" },
  {
    label: "Пост",
    icon: <StickyNote className="w-5 h-5" />,
    to: "/createPost",
  },
  {
    label: "Холбоо барих",
    icon: <Phone className="w-5 h-5" />,
    to: "/contact",
  },
];

export const SideBar = () => {
  const { user } = useUser();
  return (
    <nav className="w-64 p-6 h-screen flex flex-col space-y-6">
      <ul className="space-y-4">
        <Link href="/">
          <button className="w-full font-medium flex items-center gap-4 px-4 py-2 text-left text-gray-700 hover:bg-[#e9e2db] rounded-full border border-transparent bg-[#fdfcf6] transition-all duration-300 ease-in-out">
            <img
              className="w-7 h-7 rounded-full"
              src={user?.imageUrl}
              alt="profile"
            />
            {user?.username}
          </button>
        </Link>

        {postSideBar.map((el, index) => (
          <li key={index} className="w-full">
            <Link href={el.to}>
              <button className="w-full flex items-center gap-4 px-4 py-2 text-left text-gray-700 hover:bg-[#e9e2db] rounded-full border border-transparent bg-[#fdfcf6] transition-all duration-300 ease-in-out">
                {el.icon}
                <span className="font-medium">{el.label}</span>
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
