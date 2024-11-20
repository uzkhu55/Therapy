"use client";

import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#213B4A] flex items-center justify-center">
      <div className="flex flex-col w-full items-center justify-center px-4 md:px-6 lg:px-8">
        <div className="my-[25px] w-full max-w-[1120px] flex justify-start">
          <div className="flex flex-wrap text-white gap-5 items-center font-medium text-base font-['Inter'] leading-normal">
            <Link href="" className="w-full sm:w-auto">
              Бидний тухай
            </Link>
            <Link href="" className="w-full sm:w-auto">
              Үйлчилгээний нөхцөл
            </Link>
            <Link href="" className="w-full sm:w-auto">
              Нууцлалын бодлого
            </Link>
            <Link href="" className="w-full sm:w-auto">
              Холбоо барих
            </Link>
          </div>
        </div>

        <div className="h-[0.7px] w-screen bg-[#EEF0F6]"></div>

        <div className="my-[25px] flex w-full max-w-[1120px]">
          <div className="flex gap-5 items-center justify-start text-white">
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

        <div className="h-[0.7px] w-screen bg-[#EEF0F6]"></div>

        <div className="my-[25px] flex w-full max-w-[1120px] justify-start items-center">
          <div className="text-start text-white text-sm font-normal font-['Inter'] break-words">
            © 2024 Иннэрхийл ХХК. Бүх эрх хуулиар хамгаалагдсан.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
