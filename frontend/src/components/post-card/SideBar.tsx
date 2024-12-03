"use client";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

import Link from "next/link";
import { SignInButton, SignedOut, useUser } from "@clerk/nextjs";
import { Bell, FilePlus2, Home, MessagesSquare, Users } from "lucide-react";
import { LogoLoggedin } from "@/components/homePage/Homelogologgedin";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ComponentProps {
  bg?: string;
  bg1?: string;
  bg2?: string;
  under?: string;
  under1?: string;
  under2?: string;
}

const Sidebar: React.FC<ComponentProps> = ({
  bg = "",
  bg1 = "",
  bg2 = "",
  under = "",
  under1 = "",
  under2 = "",
}) => {
  const { user, isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const DotIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="lucide lucide-user-pen"
      >
        <path d="M11.5 15H7a4 4 0 0 0-4 4v2" />
        <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
        <circle cx="10" cy="7" r="4" />
      </svg>
    );
  };

  const postSideBar = [
    { label: "Нүүр хуудас", icon: <Home className="w-5 h-5" />, to: "/" },
    {
      label: "Мэргэжилтэн",
      icon: <Users className="w-5 h-5" />,
      to: "/therapist",
    },
    { label: "Чат", icon: <MessagesSquare className="w-5 h-5" />, to: "/chat" },
    {
      label: "Пост",
      icon: <FilePlus2 className="w-5 h-5" />,
      to: "/createPost",
    },
    {
      label: "Холбоо барих",
      icon: <Bell className="w-5 h-5" />,
      to: "/contact",
    },
  ];

  return (
    <div className="flex h-screen">
      <nav className="w-64 p-6 flex flex-col bg-[#325343] text-white">
        <Link href="/">
          <div className="flex items-center gap-4 px-4 py-2 text-left text-white mb-6">
            <LogoLoggedin />
          </div>
        </Link>

        <ul className="flex flex-col space-y-4">
          {isSignedIn ? (
            <li>
              <button className="w-full flex items-center gap-4 px-4 py-2 text-left text-white hover:bg-[#4e6f57] rounded-full transition-all">
                <img
                  className="w-7 h-7 rounded-full"
                  src={user?.imageUrl || "/defaultProfilePic.png"}
                  alt="profile"
                />
                <span>{user?.username}</span>
              </button>
            </li>
          ) : (
            <li>
              <SignedOut>
                <SignInButton aria-label="Нэвтрэх" />
              </SignedOut>
            </li>
          )}

          {postSideBar.map((el, index) => (
            <li key={index}>
              <Link href={el.to}>
                <button className="w-full flex items-center gap-4 px-4 py-2 text-left text-white hover:bg-[#4e6f57] rounded-full transition-all">
                  {el.icon}
                  <span>{el.label}</span>
                </button>
              </Link>
            </li>
          ))}
        </ul>

        {isSignedIn && (
          <div className="mt-auto">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 text-white hover:bg-[#4e6f57] rounded-full transition-all">
                <FaBars className="w-5 h-5" />
                <span>Меню</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href="/about">
                  <DropdownMenuItem>Бидний тухай</DropdownMenuItem>
                </Link>
                <Link href="/forum">
                  <DropdownMenuItem>Форум</DropdownMenuItem>
                </Link>
                <Link href="/contact">
                  <DropdownMenuItem>Холбоо барих</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </nav>
      <main className="flex-1 p-6">{/* Content goes here */}</main>
    </div>
  );
};

export default Sidebar;
