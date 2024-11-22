"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HomeLogo } from "./HomeLogo";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="flex justify-center absolute top-0 items-center px-4 md:px-6 lg:px-8 py-4 w-full z-50">
      <div className="flex w-full max-w-[1120px] justify-between items-center">
        <div className="text-white text-2xl">
          <Link href="/">
            <HomeLogo />
          </Link>
        </div>
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
              href="#"
              className="text-white text-base font-['inter'] font-semibold"
            >
              Мэргэжилтэн
            </a>
          </li>
          <li className="py-4">
            <a
              href="#"
              className="text-white text-base font-['inter'] font-semibold"
            >
              Холбоо барих
            </a>
          </li>

          <li className="py-4">
            <div className="flex items-center justify-center gap-5">
              <div className="w-[130px] h-[36px] flex items-center font-bold justify-center rounded-full text-white text-center text-base bg-gradient-to-l from-[#5A7A46] to-[#A8C06B]">
                <SignedOut>
                  <SignInButton aria-label="Бүртгүүлэх">Нэвтрэх</SignInButton>
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
            {isMenuOpen ? (
              <FaTimes className="transform rotate-180 opacity-100" />
            ) : (
              <FaBars className="transform rotate-0 opacity-100" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
