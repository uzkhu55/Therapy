"use client";
import { HomeLogo } from "@/components/homePage/HomeLogo";
import Expectations from "@/components/questions/Expectations";
import Age from "@/components/questions/Age";
import Gender from "@/components/questions/Gender";
import LookingFor from "@/components/questions/LookingFor";
import PrevTherapy from "@/components/questions/PrevTherapy";
import RelStatus from "@/components/questions/RelStatus";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import axios from "axios";

export type StepComponentPropsTypes = {
  formData: Record<string, string>;
  nextHandler: () => void;
  backHandler: () => void;
  formHandler: (_form: Record<string, string>) => void;
};

const STEP_COMPONENTS = [
  Gender,
  Age,
  RelStatus,
  PrevTherapy,
  LookingFor,
  Expectations,
];

interface UserDetailProps {
  handleFormSubmit: () => void;
  form: boolean;
}

const UserDetail: React.FC<UserDetailProps> = ({ handleFormSubmit, form }) => {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const user = useUser();
  const [adminType, setAdminType] = useState(""); // State to hold the selected admin type

  const RenderComponent = STEP_COMPONENTS[step];
  const [formData, setFormData] = useState({
    gender: "Эр",
    age: "-10",
    relationshipStatus: "Ганц бие",
    prevTherapy: "Тийм",
    lookingFor: "Хувь хүн",
    expectations: "Ярилцах",
  });

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
      await axios.post("http://localhost:8000/user/detail", {
        formData: { ...formData },
        form,
        authId: user?.user?.id, // user ID
      });

      router.push("/createPost");
      handleFormSubmit();
    } catch (error) {
      console.error("Aldaa garlaa", error);
    }
  };

  // Function to set admin type in the database
  const settAdmin = async () => {
    try {
      if (adminType === "") {
        alert("Please select an admin type.");
        return;
      }

      await axios.post("http://localhost:8000/user/setadmin", {
        adminType: adminType, // Send the selected admin type to the backend
        userId: user?.user?.id, // Send the user ID (assuming you want to relate this with the user)
      });

      alert("Admin status updated successfully!");
    } catch (error) {
      console.error("Error updating admin status", error);
    }
  };

  return (
    <div className="flex flex-col items-center bg-[#deebc0] w-full h-screen">
      {user?.user?.id ? (
        <div>
          {/* Admin Type Selection */}
          <div>
            <select
              value={adminType}
              onChange={(e) => setAdminType(e.target.value)} // Update state on selection change
            >
              <option value="">Select Admin Status</option>
              <option value="admin">Admin</option>
              <option value="non">Not Admin</option>
            </select>
            <button onClick={settAdmin}>Set Admin</button>
          </div>

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
          <div>{user?.user?.id}</div>
          <RenderComponent
            formHandler={formHandler}
            formData={formData}
            nextHandler={nextHandler}
            backHandler={backHandler}
          />
          {step === STEP_COMPONENTS.length - 1 && (
            <button
              className="mt-4 bg-[#325343] text-white py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              Бүртгүүлэх
            </button>
          )}
        </div>
      ) : (
        <div>Please log in to continue.</div>
      )}
    </div>
  );
};

export default UserDetail;
