"use client";

import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#213B4A] flex flex-col w-screen h-[180px] items-center justify-center">
      <div className="h-[60px] flex w-[1120px]">
        <div className="flex text-white gap-5 items-center font-medium text-base font-['Inter'] leading-normal">
          <Link href="/about" className="">
            Бидний тухай
          </Link>
          <Link href="" className="">
            Үйлчилгээний нөхцөл
          </Link>
          <Link href="" className="">
            Нууцлалын бодлого
          </Link>
          <Link href="/contact" className="">
            Холбоо барих
          </Link>
        </div>
      </div>

      <div className="h-[0.7px] w-full bg-[#EEF0F6]"></div>

      <div className="h-[60px] flex w-[1120px]">
        <div className="h-[60px] flex gap-5 items-center justify-start text-white">
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

      <div className="h-[0.7px] w-full bg-[#EEF0F6]"></div>

      <div className="h-[60px] flex w-[1120px] justify-start items-center">
        <div className="text-start text-white text-sm font-normal font-['Inter']  ">
          © 2024 Иннэрхийл ХХК. Бүх эрх хуулиар хамгаалагдсан.
        </div>
      </div>
    </div>
  );
};

export default Footer;
