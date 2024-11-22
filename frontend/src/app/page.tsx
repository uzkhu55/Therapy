"use client";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Homepage from "@/components/homePage/Home";

const page = () => {
  const { user, isLoaded } = useUser();

  useEffect(() => {
    const addUserToDatabase = async () => {
      if (isLoaded && user) {
        try {
          const res = await axios.post("http://localhost:8000/user/signup", {
            username: user.username,
            email: user.primaryEmailAddress?.emailAddress,
            authId: user.id,
          });
          if (res.config.data) {
            window.localStorage.setItem("userDetail", res.config.data);
          }
        } catch (error) {
          console.error("Error adding user:", error);
        }
      }
    };
    addUserToDatabase();
  }, [isLoaded, user]);

  return (
    <div className="flex items-center w-full">
      <Homepage />
      {/* {user.isLoaded && <div> hello {user.user?.username}</div>}*/}

      {/* <Link href="chat">Open the chat</Link> */}
      {/* <Link href="/userDetail">Tap here</Link> */}
    </div>
  );
};

export default page;
