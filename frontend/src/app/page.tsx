"use client";

import { useUser } from "@clerk/clerk-react";
import Homepage from "@/components/homePage/Home";
import { Loading } from "@/components/Loading";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Page = () => {
  const { isLoaded, user } = useUser();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const getUserid = async () => {
      try {
        const { data } = await axios.get(
          `https://if-project8.onrender.com/user/detail/${user?.id}`
        );
        console.log(data);

        if (!data.form) {
          // Redirect to /userDetail if form data is not available
          router.push("/userDetail");
        }
      } catch (error) {
        console.error("Error fetching user data", error);
      } finally {
        // Stop showing the loading spinner regardless of success or failure
        setIsLoading(false);
      }
    };

    if (user?.id) {
      getUserid();
    }
  }, [user?.id, router]);

  useEffect(() => {
    const addUserToDatabase = async () => {
      try {
        await axios.post("https://if-project8.onrender.com/user/signup", {
          username: user?.username,
          email: user?.primaryEmailAddress?.emailAddress,
          authId: user?.id,
        });
      } catch (error) {
        console.log("Error adding user:", error);
      }
    };

    if (user) {
      addUserToDatabase();
    }
  }, [user]);

  // if (!isLoaded || isLoading) {
  //   return (
  //     <div className="flex gap-4 items-center justify-center w-full h-screen bg-[#325343] text-white">
  //       <Loading />
  //     </div>
  //   );
  // }

  return (
    <div className="flex items-center w-full">
      <Homepage />
    </div>
  );
};

export default Page;
