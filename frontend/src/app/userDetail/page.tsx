"use client";

import { HomeLogo } from "@/components/homePage/HomeLogo";
import Expectations from "@/components/questions/Expectations";
import Age from "@/components/questions/Age";
import Gender from "@/components/questions/Gender";
import Theapist from "@/components/questions/Therapist";
import LookingFor from "@/components/questions/LookingFor";
import PrevTherapy from "@/components/questions/PrevTherapy";
import RelStatus from "@/components/questions/RelStatus";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Loading } from "@/components/Loading";

export type StepComponentPropsTypes = {
  formData: Record<string, string>;
  nextHandler: () => void;
  backHandler: () => void;
  formHandler: (_form: Record<string, string>) => void;
};

const STEP_COMPONENTS = [
  Theapist,
  Gender,
  Age,
  RelStatus,
  PrevTherapy,
  LookingFor,
  Expectations,
];

const UserDetail: React.FC = () => {
  const router = useRouter();
  const { user } = useUser();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    gender: "Эр",
    age: "-10",
    relationshipStatus: "Ганц бие",
    prevTherapy: "Тийм",
    lookingFor: "Хувь хүн",
    expectations: "Ярилцах",
  });

  const [isLoading, setIsLoading] = useState(true);

  const RenderComponent = STEP_COMPONENTS[step];

  const formHandler = (form: Record<string, string>) => {
    setFormData((prev) => ({
      ...prev,
      ...form,
    }));
  };

  const nextHandler = () => {
    if (step < STEP_COMPONENTS.length - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const backHandler = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const [detailResponse, theraDetailResponse] = await Promise.all([
          axios.get(`https://if-project8.onrender.com/user/detail/${user?.id}`),
          axios.get(
            `https://if-project8.onrender.com/user/theradetail/${user?.id}`
          ),
        ]);

        const detailData = detailResponse.data;
        const theraDetailData = theraDetailResponse.data;

        if (detailData.form && theraDetailData.form) {
          router.push("/");
          return;
        }

        // if (!detailData.form || !theraDetailData.form) {
        // router.push("/");
        // }
        if (detailData.form && theraDetailData.form) {
          router.push("/userDetail");
          return;
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching user data", error);
      } finally {
        setIsLoading(false);
      }
    };

    getUserDetails();
  }, []);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      await axios.post("https://if-project8.onrender.com/user/detail", {
        formData,
        authId: user?.id,
      });

      router.push("/");
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#325343] text-white">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex bg-[#325343] flex-col items-center  w-full h-screen">
      <div>
        <div className="w-full h-[70px] flex justify-center">
          <HomeLogo />
        </div>
        {step !== 0 && (
          <>
            <div className="font-bold text-[40px] mt-[70px] text-white">
              Таныг зөв эмчтэй тааруулахад тусална уу
            </div>
          </>
        )}

        <div className="flex justify-center items-center">
          <RenderComponent
            formHandler={formHandler}
            formData={formData}
            nextHandler={nextHandler}
            backHandler={backHandler}
          />
        </div>

        <div className="flex justify-center items-center">
          {step === STEP_COMPONENTS.length - 1 && (
            <button
              className="mt-4 bg-[#325343] hover:bg-white hover:text-[#325343] text-white border-2  py-2 px-4 rounded-xl"
              onClick={handleSubmit}
            >
              Бүртгүүлэх
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
