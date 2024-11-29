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

interface UserDetailProps {
  handleFormSubmit: () => void;
  form: boolean;
}

const UserDetail: React.FC = () => {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const user = useUser();
  const [form, setForm] = useState(false); // Move `form` here
  const [adminType, setAdminType] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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

      router.push("/");
      // handleFormSubmit();
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  const x = async () => {
    try {
      if (adminType === "") {
        alert("Please select an admin type.");
        return;
      }

      await axios.post("http://localhost:8000/user/setadmin", {
        adminType: adminType, // Send the selected admin type to the backend
        authId: user?.user?.id, // Send the user ID (assuming you want to relate this with the user)
      });
    } catch (error) {
      console.error("Error updating admin status", error);
    }
  };

  const auth = useUser();

  useEffect(() => {
    const getUserid = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8000/user/detail/${user?.user?.id}`
        );

        if (data.form) {
          setIsLoading(true); // Show loading spinner
          router.push("/"); // Redirect to homepage
        } else {
          setIsLoading(false); // Stop loading if form data is not available
        }
      } catch (error) {
        console.error("Error fetching user data", error);
        setIsLoading(false); // Stop loading if there's an error
      }
    };

    const addUserToDatabase = async () => {
      if (auth.isLoaded && user) {
        try {
          const res = await axios.post("http://localhost:8000/user/signup", {
            username: auth.user?.username,
            email: auth.user?.primaryEmailAddress?.emailAddress,
            authId: auth.user?.id,
          });

          if (res.data) {
            window.localStorage.setItem("userDetail", JSON.stringify(res.data));
            setIsLoading(false);
          }
        } catch (error) {
          console.log("Error adding user:", error);
          setIsLoading(false);
        }
      }
    };

    addUserToDatabase();
    getUserid();
  }, [auth.isLoaded]);

  if (isLoading) {
    return <Loading />; // Show loading component while fetching user data
  }

  return (
    <div className="flex flex-col items-center bg-[#deebc0] w-full h-screen">
      <div>
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
        {/* <div>{user?.user?.id}</div> */}
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
              className="mt-4 bg-[#325343] text-white py-2 px-4 rounded"
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
