"use client";

import Link from "next/link";
import { Rubik } from "next/font/google";
import { useUser } from "@clerk/clerk-react";

const rubik = Rubik({ subsets: ["latin"] });

import { Button } from "../ui/button";

const Section1 = () => {
  const { isSignedIn } = useUser();

  return (
    <div
      className={`flex absolute top-[206px] justify-center items-center w-screen z-40 ${rubik.className}`}
    >
      <div className="flex justify-between items-center w-[1120px]">
        <div className="flex flex-col w-full max-w-[651px] gap-8">
          <div className="w-[623px] text-white text-[39px] font-medium font-['Rubik'] leading-[58px]">
            Таны мэдрэмжийг хуваалцахад бид бэлэн байна.
          </div>
          <div className="w-[492.85px] text-white text-lg font-normal font-['Inter'] leading-[30px]">
            Мэргэжлийн сэтгэл зүйчтэй нэрээ нууцлан холбогдож, өөрийгөө олох
            замналдаа тусламж аваарай.
          </div>
          {!isSignedIn && (
            <Link href={"/sign-up"}>
              <Button
                className="bg-[#FECE57] text-[#325343] items-center rounded-full
    w-[230px] text-center text-base font-bold font-['Inter'] leading-9 
    hover:bg-[#F9B927] transition-colors duration-300 ease-in-out"
              >
                ХЯЛБАР БҮРТГЭЛ
              </Button>
            </Link>
          )}
        </div>
        <img src="/Hero.png" alt="Hero" className="w-[488px] h-[408px]" />
      </div>
    </div>
  );
};

export default Section1;
