"use client";

import { StepComponentPropsTypes } from "@/app/userDetail/page";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

const PrevTherapy = ({
  nextHandler,
  backHandler,
  formHandler,
}: StepComponentPropsTypes) => {
  return (
    <div>
      <div className="flex mt-[30px] gap-5 justify-center">
        <div className="w-[50px] h-[10px] bg-[#325343] border-2 rounded-2xl"></div>
        <div className="w-[50px] h-[10px] bg-[#325343]  border-2  rounded-2xl"></div>
        <div className="w-[50px] h-[10px] bg-[#325343] border-2  rounded-2xl"></div>
        <div className="w-[50px] h-[10px] bg-[#325343] border-2  rounded-2xl"></div>
        <div className="w-[50px] h-[10px] bg-white rounded-2xl"></div>
        <div className="w-[50px] h-[10px] bg-white rounded-2xl"></div>
      </div>
      <div className="h-[300px] w-[600px] bg-white rounded-3xl mt-[150px] p-[40px]">
        <div className="flex flex-col justify-center items-center">
          <div className="text-[20px] text-[#325343] font-bold">
            Өмнө нь сэтгэл зүйчтэй холбогдож байсан эсэх?
          </div>
          <select
            className="h-[50px] w-[500px] mt-[20px] border-[#deebc0] border-[3px] rounded-xl pl-[30px]"
            onChange={(event) =>
              formHandler({ prevTherapy: event.target.value })
            }
          >
            <option value={"Тийм"}>Тийм</option>
            <option value={"Үгүй"}>Үгүй</option>
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
export default PrevTherapy;
