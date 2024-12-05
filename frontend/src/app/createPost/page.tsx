import { AllNews } from "@/components/post-card/AllNews";
import { AllPosts } from "@/components/post-card/AllPosts";
import { CreatePost } from "@/components/post-card/CreatePost";
import Sidebar from "@/components/post-card/SideBar";

import React from "react";

const page = async () => {
  return (
    <div>
      <div className="flex justify-between bg-[#f2eee9] w-full  min-h-screen ">
        <div>
          <Sidebar />
        </div>
        <div className="flex flex-col gap-4 mx-auto overflow-y-auto h-screen ">
          <CreatePost />
          <AllPosts />
        </div>
        <div className="max-w-[350px] h-screen overflow-y-auto flex flex-col gap-3 items-center">
          <AllNews />
        </div>
      </div>
    </div>
  );
};

export default page;
