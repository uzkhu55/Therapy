"use client";

import { StepComponentPropsTypes } from "@/app/userDetail/page";
import { GoArrowRight } from "react-icons/go";

const Therapist = ({ nextHandler, formHandler }: StepComponentPropsTypes) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    // Handle redirection or next handler based on the selected option
    if (selectedValue === "Эр") {
      // Redirect to localhost:3000
      window.location.href = "http://localhost:3000/niitlel";
    } else if (selectedValue === "Эм") {
      // Call nextHandler for "Non" option
      formHandler({ gender: selectedValue });
      nextHandler();
    }
  };

  return (
    <div>
      <div className=" h-[400px] w-[600px] bg-white rounded-3xl mt-[50px] p-[40px]">
        <div>
          <div className="text-[20px] text-[#325343] font-bold">
            Та аль нь вэ?
          </div>
          <select
            className="h-[50px] w-[500px] mt-[20px] border-[#deebc0] border-[3px] rounded-xl pl-[30px]"
            onChange={handleChange}
          >
            <option value="">Сонгоно уу</option>
            <option value="Эр">Сэтгэл зүйч</option>

            <option value="Эм">Үйлчлүүлэгч</option>
          </select>

          <button>
            <GoArrowRight className="h-[30px] w-[100px] text-[20px] rounded-3xl text-[#325343] bg-[#deebc0] mt-[40px] ml-[400px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Therapist;
