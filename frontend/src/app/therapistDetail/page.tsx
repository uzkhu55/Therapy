"use client";

import { HomeLogo } from "@/components/homePage/HomeLogo";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Loading } from "@/components/Loading";
import TheraExpectations from "@/components/theraQuestions/TheraExp";
import Name from "@/components/theraQuestions/Name";
import Age from "@/components/theraQuestions/Age";
import Gender from "@/components/theraQuestions/Gender";
import Year from "@/components/theraQuestions/Year";
import Zuvluguu from "@/components/theraQuestions/Zuvluguu";

export type StepComponentPropsTypes = {
  formData: Record<string, string>;
  nextHandler: () => void;
  backHandler: () => void;
  formHandler: (_form: Record<string, string>) => void;
};

const STEP_COMPONENTS = [Name, Age, Gender, Year, Zuvluguu, TheraExpectations];

const TheraDetail: React.FC = () => {
  const router = useRouter();
  const { isLoaded, user } = useUser();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    age: "1",
    gender: "Эр",
    year: "1",
    zuvluguu: "Хувь хүн",
    expectations: "Ярилцах",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(true);

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

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      await axios.post("https://if-project8.onrender.com/user/theradetail", {
        formData,
        authId: user?.id,
      });

      router.push("/");
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
    }
  };
  useEffect(() => {
    const initializeUser = async () => {
      try {
        if (!user) return;

        setIsChecking(true);

        const { data } = await axios.get(
          `https://if-project8.onrender.com/user/theradetail/${user.id}`
        );
        console.log({ data });

        if (data.form) {
          router.push("/");
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error initializing user:", error);
      } finally {
        setIsChecking(false);
      }
    };

    if (isLoaded) {
      initializeUser();
    }
  }, [isLoaded, user, router]);

  if (isChecking || isLoading) {
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

        {step !== 0 && <></>}

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

export default TheraDetail;
