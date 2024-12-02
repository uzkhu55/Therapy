"use client";

import { StepComponentPropsTypes } from "@/app/userDetail/page";
import { GoArrowRight } from "react-icons/go";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Therapist = ({ nextHandler, formHandler }: StepComponentPropsTypes) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const router = useRouter();

  const handleSelectClick = () => {
    if (selectedValue === "Эр") {
      // Redirect to localhost:3000
      router.push("/therapistDetail");
    } else if (selectedValue === "Эм") {
      formHandler({ gender: selectedValue });
      nextHandler();
    }
  };

  return (
    <div>
      <div className="h-full w-[600px] bg-white rounded-3xl mt-[300px] p-[40px]">
        <div className="flex flex-col h-full items-center">
          <div className="text-[20px] items-center text-[#325343] font-bold">
            Та аль нь вэ?
          </div>

          <div className="flex flex-col items-center mt-[20px]">
            <button
              onClick={() => setSelectedValue("Эр")}
              className={`w-[500px] h-[80px] mb-[10px] rounded-xl ${
                selectedValue === "Эр" ? "border-[#ffcc00]" : "border-[#deebc0]"
              } border-[3px] p-[10px] text-center text-[#325343] font-bold`}
            >
              Сэтгэл зүйч
            </button>

            <button
              onClick={() => setSelectedValue("Эм")}
              className={`w-[500px] h-[80px] mb-[10px] rounded-xl ${
                selectedValue === "Эм" ? "border-[#00ff00]" : "border-[#deebc0]"
              } border-[3px] p-[10px] text-center text-[#325343] font-bold`}
            >
              Үйлчлүүлэгч
            </button>
          </div>
          <button
            onClick={handleSelectClick}
            className="h-[50px] w-[150px] mt-[20px] rounded-3xl bg-[#deebc0] text-[#325343] font-bold"
          >
            Сонгох
          </button>
        </div>
      </div>
    </div>
  );
};

export default Therapist;
