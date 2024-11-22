"use client";
import { HomeLogo } from "@/components/homePage/HomeLogo";
import Expectations from "@/components/questions/ Expectations";
import Age from "@/components/questions/Age";
import Gender from "@/components/questions/Gender";
import LookingFor from "@/components/questions/LookingFor";
import PrevTherapy from "@/components/questions/PrevTherapy";
import RelStatus from "@/components/questions/RelStatus";
import { useState } from "react";

const STEP_COMPONENTS = [
  Gender,
  Age,
  RelStatus,
  PrevTherapy,
  LookingFor,
  Expectations,
];

const userDetail = () => {
  const [step, setStep] = useState(0);
  const RenderComponent = STEP_COMPONENTS[step];

  const backHandler = () => {
    setStep((prev) => prev - 1);
  };

  const nextHandler = () => {
    setStep((prev) => prev + 1);
  };

  const [formData, setFormData] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
  });

  return (
    <div className="flex flex-col items-center bg-[#deebc0] w-full h-screen ">
      <div className="bg-[#325343] w-full h-[70px] flex justify-center">
        <HomeLogo />
      </div>

      <div className="font-bold text-[40px] mt-[70px] text-[#325343]">
        Таныг зөв эмчтэй тааруулахад тусална уу
      </div>
      <div className="mt-[20px] text-[#325343]">
        Дараах асуултууд нь таны хувийн сонголтод тулгуурлан илүү хэрэгтэй
        туслалцаа үзүүлэх зорилготой юм.
      </div>

      <RenderComponent
        step={step}
        nextHandler={nextHandler}
        backHandler={backHandler}
      />
    </div>
  );
};
export default userDetail;
