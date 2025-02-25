"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { LogoLoggedin } from "@/components/homePage/Homelogologgedin";
import Link from "next/link";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Bell, FilePlus2, MessagesSquare, Users } from "lucide-react";
import { io, Socket } from "socket.io-client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  bg?: string;
  bg1?: string;
  bg2?: string;
  under?: string;
  under1?: string;
  under2?: string;
}

interface Message {
  senderId: {
    authId: string;
  };
  content: string;
}

const Header: React.FC<HeaderProps> = ({
  bg = "",
  bg1 = "",
  bg2 = "",
  under = "",
  under1 = "",
  under2 = "",
}) => {
  const { user, isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [unreadMessages, setUnreadMessages] = useState<number>(0);

  useEffect(() => {
    const socket: Socket = io("https://if-project8.onrender.com");

    socket.on("chat-message", (newMessage: Message) => {
      if (newMessage.senderId?.authId !== user?.id) {
        setUnreadMessages((prev) => prev + 1);
      }
    });

    return () => {
      socket.off("chat-message");
    };
  }, [user?.id]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const resetUnreadMessages = () => {
    setUnreadMessages(0);
  };

  const DotIcon: React.FC = () => {
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

  return (
    <div className="flex justify-center sticky top-0 items-center w-full z-50">
      {isSignedIn ? (
        <div className="flex justify-center absolute top-0 h-[80px] items-center px-4 md:px-6 lg:px-8 w-full bg-[#325343]">
          <div className="absolute top-0 py-5 left-0 w-screen h-[80px] md:h-[80px] lg:h-[80px] bg-[url('/Texture.png')] bg-cover bg-center pointer-events-none z-0"></div>
          <div className="flex w-full max-w-[1120px] text-black justify-between">
            <Link
              href="/"
              className={`flex flex-col  relative w-[40px] md:w-[80px] md:h-[80px] text-white ${bg} h-[40px] items-center gap-2 justify-center`}
            >
              <LogoLoggedin />
            </Link>
            <div className="flex md:w-[500px] w-[220px] justify-evenly">
              <Link
                href="/chat"
                className={`flex flex-col top-2 md:top-2 relative w-[40px] md:w-[80px] md:h-[80px] text-white ${bg} h-[40px] items-center gap-2 justify-center`}
                onClick={resetUnreadMessages}
              >
                <div className=" md:w-6 md:h-6 relative">
                  <MessagesSquare className="w-4 h-4 md:w-6 md:h-6" />
                  {unreadMessages > 0 && (
                    <div className="absolute -top-2 -right-3  bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {unreadMessages}
                    </div>
                  )}
                </div>
                <div className="text-xs">Чат</div>
              </Link>
              <Link
                href="/createPost"
                className={`flex flex-col top-2 md:top-2 relative w-[40px] md:w-[80px] md:h-[80px] text-white ${bg} h-[40px] items-center gap-2 justify-center`}
              >
                <FilePlus2 />
                <div className="text-xs">Пост</div>
              </Link>
              <Link
                href="/therapist"
                className={`flex flex-col top-2 md:top-2 text-sm relative w-[40px] md:w-[80px] md:h-[80px] text-white ${bg} h-[40px] items-center gap-2 justify-center`}
              >
                <Users />
                <div className="text-xs">Мэргэжилтэн</div>
              </Link>
            </div>
            <div className="flex items-center justify-center gap-6">
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`flex flex-col top-2 md:top-2 relative w-[40px] outline-none md:w-[80px] md:h-[80px] text-white ${bg} h-[40px] items-center gap-2 justify-center`}
                >
                  <div className="text-2xl">
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                  </div>
                  <div className="text-xs">Menu</div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Link href="/about">
                    <DropdownMenuItem>Бидний тухай</DropdownMenuItem>
                  </Link>
                  <Link href="/niitlel">
                    <DropdownMenuItem>Форум</DropdownMenuItem>
                  </Link>
                  <Link href="/contact">
                    <DropdownMenuItem>Холбоо барих</DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>

              <div
                className={`flex flex-col top-2 md:top-2 relative w-[40px] md:w-[80px] md:h-[80px] text-white ${bg} h-[40px] items-center gap-2 justify-center`}
              >
                <SignedIn>
                  <UserButton aria-label="Хэрэглэгчийн мэдээлэл">
                    <UserButton.MenuItems>
                      <UserButton.Link
                        label="Хувийн мэдээлэл"
                        labelIcon={<DotIcon />}
                        href="/detailById"
                      />
                      <UserButton.Link
                        label="Admin"
                        labelIcon={<DotIcon />}
                        href="/admin"
                      />
                    </UserButton.MenuItems>
                  </UserButton>
                </SignedIn>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center absolute top-0 items-center px-4 md:px-6 lg:px-2 py-2 w-full bg-[#325343] z-100">
          <div className="absolute top-0 left-0 w-screen h-[80px] md:h-[80px] lg:h-[80px] bg-[url('/Texture.png')] bg-cover bg-center pointer-events-none z-0"></div>

          <div className="flex w-full max-w-[1120px] justify-between items-center">
            <Link href="/">
              <LogoLoggedin />
            </Link>

            <ul
              className={`lg:flex gap-8 items-center transition-all duration-300 ${
                isMenuOpen
                  ? "flex-col absolute top-[80px] left-0 right-0 bg-[#4e6f57] z-50 text-center py-4"
                  : "hidden"
              }`}
            >
              <li className="py-4">
                <a
                  href="/about"
                  className="text-white text-base font-['inter'] font-semibold"
                >
                  Бидний тухай
                </a>
              </li>
              <li className="py-4">
                <a
                  href="/therapist"
                  className="text-white text-base font-['inter'] font-semibold"
                >
                  Мэргэжилтэн
                </a>
              </li>
              <li className="py-4">
                <a
                  href="/contact"
                  className="text-white text-base font-['inter'] font-semibold"
                >
                  Холбоо барих
                </a>
              </li>
              <li className="py-4">
                <div className="flex items-center justify-center gap-5">
                  <div className="w-[130px] h-[36px] flex items-center font-bold justify-center rounded-full text-white text-center text-base bg-gradient-to-l from-[#5A7A46] to-[#A8C06B]">
                    <SignedOut>
                      <SignInButton aria-label="Бүртгүүлэх">
                        Нэвтрэх
                      </SignInButton>
                    </SignedOut>
                    <SignedIn>
                      <UserButton aria-label="Хэрэглэгчийн мэдээлэл" />
                    </SignedIn>
                  </div>
                </div>
              </li>
            </ul>
            <div className="lg:hidden">
              <div
                className="text-white text-2xl cursor-pointer transition-all duration-300 ease-in-out transform"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
