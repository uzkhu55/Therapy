"use client";

import { GoArrowLeft } from "react-icons/go";
import { StepComponentPropsTypes } from "@/app/userDetail/page";

const TheraExpectations = ({
  backHandler,
  formHandler,
}: StepComponentPropsTypes) => {
  return (
    <div>
      <div className="flex mt-[100px] pt-[100px] gap-5 justify-center">
        <div className="w-[50px] h-[10px] bg-[#325343] border-2 rounded-2xl"></div>
        <div className="w-[50px] h-[10px] bg-[#325343] border-2 rounded-2xl"></div>
        <div className="w-[50px] h-[10px] bg-[#325343] border-2 rounded-2xl"></div>
        <div className="w-[50px] h-[10px] bg-[#325343] border-2 rounded-2xl"></div>
        <div className="w-[50px] h-[10px] bg-[#325343] border-2 rounded-2xl"></div>
        <div className="w-[50px] h-[10px] bg-[#325343] border-2 rounded-2xl"></div>
      </div>
      <div className="h-[300px] w-[600px] bg-white rounded-3xl mt-[50px] p-[40px]">
        <div className="flex flex-col justify-center items-center">
          <div className="text-[20px] text-[#325343] font-bold ">
            Ямар чиглэлийн тусламж үзүүлмээр байна вэ?
          </div>
          <select
            className="h-[50px] w-[500px] mt-[20px] border-[#deebc0] border-[3px] rounded-xl pl-[30px]"
            onChange={(event) =>
              formHandler({ expectations: event.target.value })
            }
          >
            <option value={"Ярилцах"}>Ярилцах</option>
            <option value={"Сонсох"}>Сонсох</option>
            <option value={"Зөвлөгөө өгөх"}>Зөвлөгөө өгөх</option>
            <option value={"Бусад"}>Бусад</option>
          </select>
          <div className="flex">
            <button>
              <GoArrowLeft
                onClick={backHandler}
                className="h-[30px] w-[100px] text-[20px] rounded-3xl text-[#325343] bg-[#deebc0] mt-[40px] "
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TheraExpectations;
