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
import { HomeLogoSecondary } from "./HomeLogoSecondary";

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
    <div className="flex justify-center relative top-0 items-center w-full z-50">
      {isSignedIn ? (
        <div className="w-screen h-[80px] flex justify-center items-center bg-white">
          <div className="flex w-full max-w-[1120px] text-black justify-between">
            <Link className="flex items-center justify-center" href="/">
              <LogoLoggedin />
            </Link>
            <div className="flex w-[250px] justify-evenly">
              <Link
                href="/chat"
                className={`flex flex-col top-2 relative w-[80px] hover:text-[#325343] ${bg} h-[80px] items-center gap-2 justify-center`}
              >
                <MessagesSquare />
                <div className="text-xs">Чат</div>
                <div
                  className={`${under} border border-[#325343] h-2 w-12`}
                ></div>
              </Link>
              <Link
                href="/createPost"
                className={`flex flex-col top-2 relative w-[80px] hover:text-[#325343] ${bg1} h-[80px] items-center gap-2 justify-center`}
              >
                <FilePlus2 />
                <div className="text-xs">Пост</div>
                <div
                  className={`${under1} border border-[#325343] h-2 w-12`}
                ></div>
              </Link>
              <Link
                href="/niitlel"
                className={`flex flex-col top-2 relative w-[80px] hover:text-[#325343] ${bg2} h-[80px] items-center gap-2 justify-center`}
              >
                <Users />
                <div className="text-xs">Форум</div>
                <div
                  className={`${under2} border border-[#325343] h-2 w-12`}
                ></div>
              </Link>
            </div>
            <div className="flex items-center justify-center gap-6">
              <div className="flex flex-col w-[80px] hover:text-[#325343] h-[80px] items-center gap-2 justify-center">
                <Bell />
                <div className="text-xs">Мэдэгдэл</div>
              </div>
              <SignedIn>
                <UserButton aria-label="Хэрэглэгчийн мэдээлэл" />
              </SignedIn>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center px-4 md:px-6 lg:px-8 w-full z-50">
          <div className="flex w-full max-w-[1120px] py-5 justify-between items-center">
            <Link href="/">
              <HomeLogoSecondary />
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
                  className="text-[#102d3f]  text-base font-['inter'] font-semibold"
                >
                  Бидний тухай
                </a>
              </li>
              <li className="py-4">
                <a
                  href="/specialist"
                  className="text-[#102d3f]  text-base font-['inter'] font-semibold"
                >
                  Мэргэжилтэн
                </a>
              </li>
              <li className="py-4">
                <a
                  href="contact"
                  className="text-[#102d3f]  text-base font-['inter'] font-semibold"
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
                className="text-[#102d3f] text-2xl cursor-pointer transition-all duration-300 ease-in-out transform"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </div>
            </div>
          </div>

          <div className="border-[0.7px] text-[#C1CEE5] w-screen"></div>
        </div>
      )}
    </div>
  );
};

export default Header;
