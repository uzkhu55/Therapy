"use client";

import { useUser } from "@clerk/clerk-react";
import Homepage from "@/components/homePage/Home";
import { Loading } from "@/components/Loading";
import { useEffect } from "react";
import axios from "axios";

interface UserDetailProps {
  handleFormSubmit: () => void;
  form: boolean;
}

const Page = () => {
  const { isLoaded, user } = useUser();

  useEffect(() => {
    const addUserToDatabase = async () => {
      try {
        await axios.post("http://localhost:8000/user/signup", {
          username: user?.username,
          email: user?.primaryEmailAddress?.emailAddress,
          authId: user?.id,
        });
      } catch (error) {
        console.log("Error adding user:", error);
      }
    };
    addUserToDatabase();
  }, [user]);

  if (!isLoaded) {
    return (
      <div className="flex gap-4 items-center justify-center w-full h-screen bg-[#325343] text-white">
        <p>Loading...</p>
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
