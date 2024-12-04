"use client";

import { StepComponentPropsTypes } from "@/app/userDetail/page";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

const Year = ({
  nextHandler,
  backHandler,
  formHandler,
}: StepComponentPropsTypes) => {
  return (
    <div>
      <div className="flex mt-[100px] pt-[100px] gap-5 justify-center">
        <div className="w-[50px] h-[10px] bg-[#325343] border-2 rounded-2xl"></div>
        <div className="w-[50px] h-[10px] bg-[#325343] border-2 border-white rounded-2xl"></div>
        <div className="w-[50px] h-[10px] bg-[#325343] border-2 rounded-2xl"></div>
        <div className="w-[50px] h-[10px] bg-[#325343] border-2 rounded-2xl"></div>
        <div className="w-[50px] h-[10px] bg-white rounded-2xl"></div>
        <div className="w-[50px] h-[10px] bg-white rounded-2xl"></div>
      </div>
      <div className="h-[300px]  w-[600px] bg-white rounded-3xl mt-[50px] p-[40px]">
        <div className="flex flex-col justify-center items-center">
          <div className="text-[20px] text-[#325343] font-bold">
            Энэ чиглэлээр ажилласан жилээ оруулна уу?
          </div>
          <select
            className="h-[50px] w-[500px] mt-[20px] border-[#deebc0] border-[3px] rounded-xl pl-[30px]"
            onChange={(event) => formHandler({ year: event.target.value })}
            defaultValue=""
          >
            <option value="" disabled>
              Жил сонгох
            </option>
            {Array.from({ length: 50 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          <div className="flex">
            <button>
              <GoArrowLeft
                onClick={backHandler}
                className="h-[30px] w-[100px] text-[20px] rounded-3xl text-[#325343] bg-[#deebc0] mt-[40px] "
              />
            </button>
            <button>
              <GoArrowRight
                onClick={nextHandler}
                className="h-[30px] w-[100px] text-[20px] rounded-3xl text-[#325343] bg-[#deebc0] mt-[40px] ml-[300px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Year;
