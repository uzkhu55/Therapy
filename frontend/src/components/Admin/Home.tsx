"use client";

import { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import SideBar from "./SideBar";
import Specialist from "./Specialist";
import Analytics from "./Analytics";
import Clients from "./Clients";
import { AdminAllPost } from "./Post";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";
type AdminData = {
  authId: string;
  createdAt: string;
  email: string;
  image: string;
  isAdmin: boolean;
  updatedAt: string;
  username: string;
  _id: string;
};
const Home = () => {
  const [toggle, setToggle] = useState("Clients");
  const [admin, setAdmin] = useState<AdminData | null>(null); // Updated to store a single admin object
  const router = useRouter();
  const { user } = useUser();

  const toggleHandler = (word: string) => {
    setToggle(word);
  };

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const response = await axios.get(
          `https://if-project8.onrender.com/user/neguser/${user?.id}`
        );

        if (response.data.isAdmin) {
          setAdmin(response.data);
        } else {
          router.push("/"); // Redirect non-admin users to the homepage
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        router.push("/"); // Redirect to homepage in case of an error
      }
    };
    if (user) {
      fetchAdmin();
    }
  }, [user]);

  return (
    <div className="flex w-full flex-col ">
      <div className="flex pt-4 mx-2">
        <AdminHeader />
      </div>
      <div className="flex flex-row gap-20 pt-12">
        <SideBar toggleHandler={toggleHandler} toggle={toggle} />
        {toggle === "Clients" && <Clients />}
        {toggle === "Specialist" && <Specialist />}
        {toggle === "Post" && <AdminAllPost />}
        {toggle === "Analytics" && <Analytics />}
      </div>
    </div>
  );
};

export default Home;
