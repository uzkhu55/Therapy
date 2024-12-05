"use client";

import { useUser } from "@clerk/clerk-react";
import Homepage from "@/components/homePage/Home";
import { Loading } from "@/components/Loading";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Page = () => {
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFirstLogin, setIsFirstLogin] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const getUserDetails = async () => {
      setIsLoading(true);

      if (!user?.id) {
        setIsLoading(false);
        return;
      }

      try {
        const [detailResponse, theraDetailResponse] = await Promise.all([
          axios.get(`https://if-project8.onrender.com/user/detail/${user?.id}`),
          axios.get(
            `https://if-project8.onrender.com/user/theradetail/${user?.id}`
          ),
        ]);

        const detailData = detailResponse.data;
        const theraDetailData = theraDetailResponse.data;

        console.log("Detail Data:", detailData);
        console.log("Thera Detail Data:", theraDetailData);

        if (!detailData.form && !theraDetailData.form) {
          router.push("/userDetail");
        }
      } catch (error) {
        console.error("Error fetching user data", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (user?.id) {
      getUserDetails();
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    console.log("Error adding user:");

    const addUserToDatabase = async () => {
      try {
        const { data } = await axios.post(
          "https://if-project8.onrender.com/user/signup",
          {
            username: user?.username,
            email: user?.primaryEmailAddress?.emailAddress,
            authId: user?.id,
          }
        );
        if (data != "Already registered") {
          toast.success("Logged in successfully!");
        }

        await axios.post("http://localhost:8000/user/signup", {
          username: user?.username,
          email: user?.primaryEmailAddress?.emailAddress,
          authId: user?.id,
          image: user?.imageUrl,
        });

        toast.success("Logged in successfully!");
      } catch (error) {
        console.log("Error adding user:", error);
      }
    };

    if (user && isFirstLogin) {
      addUserToDatabase();
    }
  }, [user, isFirstLogin]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#325343] text-white">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex items-center w-full">
      <Homepage />
    </div>
  );
};

export default Page;
