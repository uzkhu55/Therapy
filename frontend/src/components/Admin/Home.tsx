"use client";

import { useState } from "react";
import AdminHeader from "./AdminHeader";
import SideBar from "./SideBar";
import Specialist from "./Specialist";
import Analytics from "./Analytics";
import Settings from "./Settings";
import Clients from "./Clients";
import { AdminAllPost } from "./Post";

const Home = () => {
  const [toggle, setToggle] = useState("Clients");

  const toggleHandler = (word: string) => {
    setToggle(word);
  };

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
        {toggle === "Setting" && <Settings />}
      </div>
    </div>
  );
};

export default Home;
