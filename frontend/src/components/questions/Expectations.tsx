"use client";

import { GoArrowLeft } from "react-icons/go";
import { StepComponentPropsTypes } from "@/app/userDetail/page";

const Expectations = ({
  backHandler,
  formHandler,
}: StepComponentPropsTypes) => {
  return (
    <div>
      <div className="flex mt-[30px] gap-5 justify-center">
        <div className="w-[50px] h-[10px] bg-[#325343] border-2 rounded-2xl"></div>
        <div className="w-[50px] h-[10px] bg-[#325343] border-2 rounded-2xl"></div>
        <div className="w-[50px] h-[10px] bg-[#325343] border-2 rounded-2xl"></div>
        <div className="w-[50px] h-[10px] bg-[#325343] border-2 rounded-2xl"></div>
        <div className="w-[50px] h-[10px] bg-[#325343] border-2 rounded-2xl"></div>
        <div className="w-[50px] h-[10px] bg-[#325343] border-2 rounded-2xl"></div>
      </div>
      <div className="h-[300px] w-[600px] bg-white rounded-3xl mt-[150px] p-[40px]">
        <div className="flex flex-col justify-center items-center">
          <div className="text-[20px] text-[#325343] font-bold ">
            Ямар чиглэлийн тусламж хэрэгтэй байна вэ?
          </div>
          <select
            className="h-[50px] w-[500px] mt-[20px] border-[#deebc0] border-[3px] rounded-xl pl-[30px]"
            onChange={(event) =>
              formHandler({ expectations: event.target.value })
            }
          >
            <option value={"Ярилцах"}>Ярилцах</option>
            <option value={"Намайг сонсох"}>Намайг сонсох</option>
            <option value={"Надад зөвлөгөө өгөх"}>Надад зөвлөгөө өгөх</option>
            <option value={"Мэдэхгүй байна"}>Мэдэхгүй байна</option>
            <option value={"Бусад"}>Бусад</option>
          </select>
          <div className="flex">
            {/* <button>
              <GoArrowLeft
                onClick={backHandler}
                className="h-[30px] w-[100px] text-[20px] rounded-3xl text-[#325343] bg-[#deebc0] mt-[40px] "
              />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Expectations;
