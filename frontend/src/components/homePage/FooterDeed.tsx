"use client";

import Link from "next/link";
import { Button } from "../ui/button";

const FooterDeed = () => {
  return (
    <div className="flex justify-center items-center w-full bg-[#F3EFE9] pt-[52px] pb-[52px]">
      <div className="w-full max-w-[1120px] px-4 flex flex-col justify-start">
        {/* Heading */}
        <div className="mb-6 w-full text-left">
          <div className="text-2xl font-medium font-['Rubik'] leading-10 text-center sm:text-left">
            <span className="text-[#028239]">Та ганцаараа биш. </span>
            <span className="text-[#102d3f]">
              Хэрэгтэй үедээ хаанаас ч, хэзээ ч <br />
              дэмжлэг авах боломжтой.
            </span>
          </div>
        </div>

        {/* Button */}
        <Link href={"/sign-up"}>
          <Button className="bg-[#FECE57] text-[#325343] rounded-full w-full sm:w-[230px] text-left text-base font-bold font-['Inter'] leading-9 hover:bg-[#F9B927] transition-colors duration-300 ease-in-out">
            ХЯЛБАР БҮРТГЭЛ
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FooterDeed;
