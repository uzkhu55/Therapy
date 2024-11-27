"use client";

import { StepComponentPropsTypes } from "@/app/userDetail/page";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

const Age = ({
  nextHandler,
  backHandler,
  formHandler,
}: StepComponentPropsTypes) => {
  return (
    <div>
      <div className="flex mt-[30px] gap-5 justify-center">
        <div className="w-[50px] h-[10px] bg-[#325343] rounded-2xl"></div>
        <div className="w-[50px] h-[10px] bg-[#325343] rounded-2xl"></div>
        <div className="w-[50px] h-[10px] bg-white rounded-2xl"></div>
        <div className="w-[50px] h-[10px] bg-white rounded-2xl"></div>
        <div className="w-[50px] h-[10px] bg-white rounded-2xl"></div>
        <div className="w-[50px] h-[10px] bg-white rounded-2xl"></div>
      </div>
      <div className="h-[400px] w-[600px] bg-white rounded-3xl mt-[50px] p-[40px]">
        <div>
          <div className="text-[20px] text-[#325343] font-bold">
            Насаа оруулна уу?
          </div>
          <select
            className="h-[50px] w-[500px] mt-[20px] border-[#deebc0] border-[3px] rounded-xl pl-[30px]"
            onChange={(event) => formHandler({ age: event.target.value })}
          >
            <option>-10</option>
            <option>10-15</option>
            <option>15-20</option>
            <option>20-25</option>
            <option>25-30</option>
            <option>30-35</option>
            <option>35-40</option>
            <option>40-45</option>
            <option>50-55</option>
            <option>60-65</option>
            <option>65-70</option>
            <option>70-75</option>
            <option>75-80</option>
            <option>80-85</option>
            <option>85-90</option>
            <option>+90</option>
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
export default Age;
