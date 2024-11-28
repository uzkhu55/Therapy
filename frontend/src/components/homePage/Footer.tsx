"use client";

import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HomeLogo } from "./HomeLogo";

const Footer = () => {
  return (
    <div className="w-full md:w-full  bg-[#325343] flex items-center justify-center h-[400px] ">
      <div className="flex flex-col w-full items-center justify-center h-[400px] lg:px-8">
        <div className="flex flex-col items-center w-full md:flex md:flex-row  md:h-full h-[300px] md:items-center md:justify-between">
          <div className="flex">
            <div className="flex flex-col gap-2 items-center justify-start text-white">
              <HomeLogo />
              <div className="flex  gap-5 items-center justify-start mb-[30px] md:mt-[30px]">
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
          <div className="flex text-white md:gap-2 gap-12 md:h-full md:items-center h-[100px] font-medium text-base font-['Inter'] leading-normal">
            <div className="flex md:flex-col flex-col gap-3 md:pr-[50px]">
              <div className="md:mb-[10px] text-base md:text-lg font-bold">
                ҮНДСЭН ЦЭС
              </div>
              <Link
                href="/"
                className="md:mb-[10px] text-xs md:text-sm font-bold"
              >
                Нүүр хуудас
              </Link>
              <Link
                href="/about"
                className="md:mb-[10px] text-xs md:text-sm font-bold"
              >
                Бидний тухай
              </Link>
              <Link
                href="/niitlel"
                className="md:mb-[10px] text-xs md:text-sm font-bold"
              >
                Мэдээ нийтлэл
              </Link>
              <Link
                href="/contact"
                className="md:mb-[10px] text-xs md:text-sm font-bold"
              >
                Холбоо барих
              </Link>
              <Link
                href="/chat"
                className="md:mb-[10px] text-xs md:text-sm font-bold"
              >
                Чат
              </Link>
              <Link
                href="/createPost"
                className="md:mb-[10px] text-xs md:text-sm font-bold"
              >
                Пост
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <div className="mb-[10px] font-bold">ТУСЛАХ ЦЭС</div>
              <Link
                href="/termsOfService"
                className="md:mb-[10px] text-xs md:text-sm font-bold"
              >
                Үйлчилгээний нөхцөл
              </Link>
              <Link
                href="/privacy"
                className="md:mb-[10px] text-xs md:text-sm font-bold"
              >
                Нууцлалын бодлого
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full bg-white h-[1px] "></div>
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
