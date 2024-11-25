import { AllNews } from "@/components/post-card/AllNews";
import { AllPosts } from "@/components/post-card/AllPosts";
import { CreatePost } from "@/components/post-card/CreatePost";
import { SideBar } from "@/components/post-card/SideBar";

import React from "react";

const page = async () => {
  return (
    <div className="flex justify-between bg-[#f2eee9] w-lvw min-h-[100%]">
      <div>
        <SideBar />
      </div>
      <div className="flex flex-col gap-4 mx-auto overflow-y-auto h-lvh overflow-y-hidden-hidden">
        <CreatePost />
        <AllPosts />
      </div>
      <div className="max-w-[350px] h-lvh overflow-y-auto flex flex-col gap-3 items-center">
        <p className="w-[240px] font-medium">Нийтлэл</p>
        <AllNews />
      </div>
    </div>
  );
};

export default page;
