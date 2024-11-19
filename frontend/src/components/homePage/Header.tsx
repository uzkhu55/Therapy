"use client";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
import { HomeLogo } from "./HomeLogo";
import { useState } from "react";
import {
  AlignJustify,
  Bell,
  FilePlus2,
  MessagesSquare,
  Users,
} from "lucide-react";
import { LogoLoggedin } from "./Homelogologgedin";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ComponentProps {
  bg: string;
  bg1: string;
  bg2: string;
  under: string;
  under1: string;
  under2: string;
}
const Header: React.FC<ComponentProps> = ({
  bg,
  under,
  under1,
  under2,
  bg1,
  bg2,
}) => {
  const { user, isSignedIn } = useUser();

  return (
    <div className="absolute top-0 w-full h-[80px]  flex justify-center items-center">
      {isSignedIn ? (
        <div className="w-full h-[80px] fixed z-50 bg-[#325343] flex justify-center items-center  ">
          <div className="flex w-full max-w-[1120px] text-black justify-between">
            <Link className="flex items-center justify-center" href="/">
              <HomeLogo />
            </Link>
            <div className="flex w-[650px] justify-evenly">
              <Link
                href="chat"
                className={`flex flex-col top-2 relative w-[80px] text-white hover:text-[#F3EFE9] ${bg}  h-[80px] items-center gap-2 justify-center`}
              >
                <MessagesSquare />
                <div className=" text-xs">Чат</div>
                <div
                  className={`${under} border-1px border-[#325343] h-2 w-12`}
                ></div>
              </Link>
              <Link
                href="createPost"
                className={`flex flex-col top-2 relative w-[80px] text-white hover:text-[#F3EFE9] ${bg}  h-[80px] items-center gap-2 justify-center`}
              >
                <FilePlus2 />
                <div className=" text-xs">Пост</div>
                <div
                  className={`${under1} border-1px border-[#325343] h-2 w-12`}
                ></div>
              </Link>
              <Link
                href="niitlel"
                className={`flex flex-col top-2 relative w-[80px] text-white hover:text-[#F3EFE9] ${bg}  h-[80px] items-center gap-2 justify-center`}
              >
                <Users />
                <div className=" text-xs">Форум</div>
                <div
                  className={`${under2} border-1px border-[#325343] h-2 w-12`}
                ></div>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <AlignJustify className="outline-none text-white" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link
                      href="about"
                      aria-label="Бидний тухай"
                      className="hover:text-[#325343]"
                    >
                      Бидний тухай
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href=""
                      aria-label="Мэргэжилтэн"
                      className="hover:text-[#325343]"
                    >
                      Мэргэжилтэн
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="contact"
                      aria-label="Холбоо барих"
                      className="hover:text-[#325343]"
                    >
                      Холбоо барих
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="flex items-center w-fit gap-[30px] text-white text-base font-['inter'] font-semibold"></div>
            </div>
            <div className="flex items-center cursor-pointer  justify-center gap-6">
              <div className="flex flex-col w-[80px] hover:text-[#F3EFE9] text-white h-[80px] items-center gap-2 justify-center">
                <Bell />
                <div className=" text-xs">Мэдэгдэл</div>
              </div>
              <div>
                <SignedIn>
                  <UserButton aria-label="Хэрэглэгчийн мэдээлэл" />
                </SignedIn>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-[1120px] flex justify-between items-center">
          <Link href="/">
            <HomeLogo />
          </Link>
          <div className="flex items-center gap-[30px] text-white text-base font-['inter'] font-semibold">
            <Link
              href=""
              aria-label="Бидний тухай"
              className="hover:text-[#D4FF00]"
            >
              Бидний тухай
            </Link>
            <Link
              href=""
              aria-label="Мэргэжилтэн"
              className="hover:text-[#D4FF00]"
            >
              Мэргэжилтэн
            </Link>
            <Link
              href=""
              aria-label="Холбоо барих"
              className="hover:text-[#D4FF00]"
            >
              Холбоо барих
            </Link>

            <div className="flex items-center justify-center gap-5">
              <div className="w-[130px] h-[36px] flex items-center font-bold justify-center rounded-full text-white text-center text-base bg-gradient-to-l from-[#5A7A46] to-[#A8C06B] hover:scale-105 hover:shadow-lg transition-all duration-300">
                <SignedOut>
                  <SignInButton aria-label="Бүртгүүлэх">Нэвтрэх</SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton aria-label="Хэрэглэгчийн мэдээлэл" />
                </SignedIn>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
