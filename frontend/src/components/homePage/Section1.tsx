"use client";

import Link from "next/link";
import { Rubik } from "next/font/google";
import { useUser } from "@clerk/clerk-react";
import { Button } from "../ui/button";
import { Section1svg } from "./Section1svg";

const Section1 = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="flex absolute top-0 justify-center items-center w-screen z-40">
      <div className="flex lg:flex-row justify-center items-center w-full z-50">
        {/* Mobile Layout */}
        <div className="block md:hidden absolute top-[130px] w-full p-3 z-60">
          <div className="flex flex-col items-center justify-center w-full gap-8">
            <img
              src="/Hero.png"
              alt="Hero"
              className="w-full max-w-[328px] h-auto"
            />
            <div className="text-white text-[32px] font-['rubik'] font-medium break-words text-center">
              <span className="hidden sm:block">
                Таны мэдрэмжийг хуваалцахад <br /> бид бэлэн байна.
              </span>
              <span className="block sm:hidden">
                Таны мэдрэмжийг хуваалцахад бид бэлэн байна.
              </span>
            </div>
            <div className="text-white text-lg font-normal break-words text-center">
              <span className="hidden sm:block">
                Мэргэжлийн сэтгэл зүйчтэй нэрээ нууцлан холбогдож,
                <br />
                өөрийгөө олох замналдаа тусламж аваарай.
              </span>
              <span className="block sm:hidden">
                Мэргэжлийн сэтгэл зүйчтэй нэрээ нууцлан холбогдож, өөрийгөө олох
                замналдаа тусламж аваарай.
              </span>
            </div>
            <Button className="bg-[#FECE57] text-[#325343] items-center rounded-full w-[230px] text-center text-base font-bold leading-9 hover:bg-[#F9B927] transition-colors duration-300 ease-in-out">
              ХЯЛБАР БҮРТГЭЛ
            </Button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex absolute top-[190px] justify-center p-8 items-center w-full z-60">
          <div className="flex lg:flex-row justify-between items-center w-full max-w-[1120px]">
            <div className="flex flex-col w-full max-w-[651px] gap-8">
              <div className="text-white text-[39px] font-['rubik'] font-medium break-words">
                Таны мэдрэмжийг хуваалцахад бид бэлэн байна.
              </div>
              <div className="text-white text- font-normal font-['inter'] break-words">
                Мэргэжлийн сэтгэл зүйчтэй нэрээ нууцлан холбогдож, өөрийгөө олох
                замналдаа тусламж аваарай.
              </div>
              <Button className="bg-[#FECE57] text-[#325343] items-center rounded-full w-[230px] text-center text-base font-bold leading-9 hover:bg-[#F9B927] transition-colors duration-300 ease-in-out">
                ХЯЛБАР БҮРТГЭЛ
              </Button>
            </div>
            <img src="/Hero.png" alt="Hero" className="w-[488px] h-[408px]" />
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block absolute top-[105px] lg:hidden p-6 w-full z-60">
          <div className="flex lg:flex-row justify-between items-center w-full max-w-[1120px]">
            <div className="flex flex-col w-full max-w-[651px] gap-8">
              <div className="text-white text-[34px] font-['rubik'] font-medium break-words">
                Таны мэдрэмжийг хуваалцахад бид бэлэн байна.
              </div>
              <div className="text-white text-lg font-normal break-words">
                Мэргэжлийн сэтгэл зүйчтэй нэрээ нууцлан холбогдож, өөрийгөө олох
                замналдаа тусламж аваарай.
              </div>
              <Button className="bg-[#FECE57] text-[#325343] items-center rounded-full w-[230px] text-center text-base font-bold leading-9 hover:bg-[#F9B927] transition-colors duration-300 ease-in-out">
                ХЯЛБАР БҮРТГЭЛ
              </Button>
            </div>
            <img src="/Hero.png" alt="Hero" className="w-[430px] h-[360px]" />
          </div>
        </div>
      </div>

      <Section1svg />
    </div>
  );
};

export default Section1;
