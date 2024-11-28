"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HomeLogo } from "./HomeLogo";
import Link from "next/link";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Bell, FilePlus2, MessagesSquare, Users } from "lucide-react";
import { LogoLoggedin } from "@/components/homePage/Homelogologgedin";

interface ComponentProps {
  bg?: string;
  bg1?: string;
  bg2?: string;
  under?: string;
  under1?: string;
  under2?: string;
}

const Header: React.FC<ComponentProps> = ({
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

  return (
    <div className="flex justify-center  sticky top-0 items-center w-full z-50 ">
      {isSignedIn ? (
        <div className="flex justify-center absolute top-0 h-[80px] items-center px-4 md:px-6 lg:px-8  w-full  bg-[#325343]">
          <div className="absolute top-0 py-5 left-0 w-screen h-[80px] md:h-[80px] lg:h-[80px] bg-[url('/Texture.png')] bg-cover bg-center pointer-events-none z-0"></div>
          <div className="flex w-full max-w-[1120px] text-black justify-between">
            <Link
              href="/"
              className={`flex flex-col  md:top-2 relative w-[40px] md:w-[80px] md:h-[80px] text-white ${bg} h-[40px] items-center gap-2 justify-center`}
            >
              <LogoLoggedin />
            </Link>
            <div className="flex md:w-[500px] w-[140px] justify-evenly">
              <Link
                href="/chat"
                className={`flex flex-col top-2 md:top-2 relative w-[40px] md:w-[80px] md:h-[80px] text-white ${bg} h-[40px] items-center gap-2 justify-center`}
              >
                <MessagesSquare />
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
                href="/niitlel"
                className={`flex flex-col top-2 md:top-2 relative w-[40px] md:w-[80px] md:h-[80px] text-white ${bg} h-[40px] items-center gap-2 justify-center`}
              >
                <Users />
                <div className="text-xs">Форум</div>
              </Link>
            </div>
            <div className="flex items-center  justify-center gap-6">
              <div
                className={`flex flex-col top-2 md:top-2 relative w-[40px] md:w-[80px] md:h-[80px] text-white ${bg} h-[40px] items-center gap-2 justify-center`}
              >
                <Bell />
                <div className="text-xs">Мэдэгдэл</div>
              </div>
              <div
                className={`flex flex-col top-2 md:top-2 relative w-[40px] md:w-[80px] md:h-[80px] text-white ${bg} h-[40px] items-center gap-2 justify-center`}
              >
                <SignedIn>
                  <UserButton aria-label="Хэрэглэгчийн мэдээлэл" />
                </SignedIn>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="flex justify-center absolute top-0 items-center px-4 md:px-6 lg:px-2 py-2 w-full 
        bg-[#325343]
        
        z-100"
        >
          <div className="absolute top-0 left-0 w-screen h-[80px] md:h-[80px] lg:h-[80px] bg-[url('/Texture.png')] bg-cover bg-center pointer-events-none z-0"></div>

          <div className="flex w-full max-w-[1120px] justify-between items-center">
            <Link href="/">
              <HomeLogo />
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
                  href="/specialist"
                  className="text-white text-base font-['inter'] font-semibold"
                >
                  Мэргэжилтэн
                </a>
              </li>
              <li className="py-4">
                <a
                  href="contact"
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
