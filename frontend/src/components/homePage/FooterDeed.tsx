"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useUser } from "@clerk/clerk-react";

const FooterDeed = () => {
  const { isSignedIn } = useUser();
  return (
    <div className="flex justify-center items-center w-full bg-[#F3EFE9] pt-[52px] pb-[52px]">
      <div className="w-[1120px] flex flex-col justify-start">
        <div className="mb-6 w-[769px] text-left">
          <div className="text-2xl font-medium font-['Rubik'] leading-10">
            <span className="text-[#028239]">Та ганцаараа биш. </span>
            <span className="text-[#102d3f]">
              Хэрэгтэй үедээ хаанаас ч, хэзээ ч <br />
              дэмжлэг авах боломжтой.
            </span>
          </div>
        </div>
        {!isSignedIn && (
          <Link href={"/sign-up"}>
            <Button className="bg-[#FECE57] text-[#325343] rounded-full w-[230px] text-left text-base font-bold font-['Inter'] leading-9 hover:bg-[#F9B927] transition-colors duration-300 ease-in-out">
              ХЯЛБАР БҮРТГЭЛ
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default FooterDeed;
