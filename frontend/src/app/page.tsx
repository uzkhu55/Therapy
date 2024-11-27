"use client";

import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import axios from "axios";
import Homepage from "@/components/homePage/Home";
import UserDetail from "./userDetail/page"; // Import your UserDetail component
import { Loading } from "@/components/Loading";

// Define the type for the props passed to UserDetail component
interface UserDetailProps {
  handleFormSubmit: () => void; // handleFormSubmit should be a function that takes no arguments and returns nothing
  form: boolean;
}

const Page = () => {
  const { isLoaded } = useUser();

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
