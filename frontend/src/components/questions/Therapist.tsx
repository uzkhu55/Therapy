"use client";

import { StepComponentPropsTypes } from "@/app/userDetail/page";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

const Therapist = ({ nextHandler }: StepComponentPropsTypes) => {
  const { user } = useUser();
  const [selectedValue, setSelectedValue] = useState<string>("");
  const router = useRouter();

  const handleSelectClick = async () => {
    if (selectedValue === "Сэтгэл зүйч") {
      await axios.post(`http://localhost:8000/user/isthera`, {
        authId: user?.id,
      }),
        router.push("/therapistDetail");
    } else {
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
              onClick={() => setSelectedValue("Сэтгэл зүйч")}
              className={`w-[500px] h-[80px] mb-[10px] rounded-xl ${
                selectedValue === "Сэтгэл зүйч"
                  ? "border-[#ffcc00]"
                  : "border-[#deebc0]"
              } border-[3px] p-[10px] text-center text-[#325343] font-bold`}
            >
              Сэтгэл зүйч
            </button>

            <button
              onClick={() => setSelectedValue("Үйлчлүүлэгч")}
              className={`w-[500px] h-[80px] mb-[10px] rounded-xl ${
                selectedValue === "Үйлчлүүлэгч"
                  ? "border-[#00ff00]"
                  : "border-[#deebc0]"
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
