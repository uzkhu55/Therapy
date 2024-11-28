"use client";

import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HomeLogo } from "./HomeLogo";

const Footer = () => {
  return (
    <div className="w-full   bg-[#325343] flex items-center justify-center h-[400px] ">
      <div className="flex flex-col w-full items-center justify-center  px-4 md:px-6 lg:px-8">
        <div className="flex w-[1120px] justify-between">
          <div className="flex  ">
            <div className="flex flex-col gap-5 items-center justify-start text-white">
              <HomeLogo />
              <div className="flex  gap-5 items-center justify-start mt-[30px]">
                <a href="https://www.facebook.com/pinecone.academy.mongolia/">
                  <FaFacebook className="w-7 h-7" />
                </a>
                <a href="https://www.instagram.com/pineconemongolia/">
                  <FaInstagram className="w-7 h-7" />
                </a>
                <a href="https://www.youtube.com/c/nestacademy">
                  <FaYoutube className="w-7 h-7" />
                </a>
                <a href="https://www.linkedin.com/company/pineconeacademy">
                  <FaLinkedin className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex text-white gap-5  font-medium text-base font-['Inter'] leading-normal">
            <div className="flex flex-col gap-3 pr-[50px]">
              <div className="mb-[10px] font-bold">ҮНДСЭН ЦЭС</div>
              <Link href="/" className="w-full sm:w-auto  hover:text-black">
                Нүүр хуудас
              </Link>
              <Link href="/about" className="w-full sm:w-auto hover:text-black">
                Бидний тухай
              </Link>
              <Link
                href="/niitlel"
                className="w-full sm:w-auto  hover:text-black"
              >
                Мэдээ нийтлэл
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto  hover:text-black"
              >
                Холбоо барих
              </Link>
              <Link href="/chat" className="w-full sm:w-auto  hover:text-black">
                Чат
              </Link>
              <Link
                href="/createPost"
                className="w-full sm:w-auto  hover:text-black"
              >
                Пост
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <div className="mb-[10px] font-bold">ТУСЛАХ ЦЭС</div>
              <Link
                href="/termsOfService"
                className="w-full sm:w-auto  hover:text-black"
              >
                Үйлчилгээний нөхцөл
              </Link>
              <Link
                href="/privacy"
                className="w-full sm:w-auto  hover:text-black"
              >
                Нууцлалын бодлого
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full bg-white h-[1px] mt-[40px]"></div>
        <div className=" flex justify-start items-center">
          <div className="text-start text-white text-sm font-normal font-['Inter'] break-words pt-[30px]">
            © 2024 он
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
