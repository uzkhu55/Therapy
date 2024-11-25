import { AllPosts } from "@/components/post-card/AllPosts";
import { CreatePost } from "@/components/post-card/CreatePost";
import React from "react";

const page = async () => {
  return (
    <div className="flex flex-col gap-3 absolute -top-0 mx-auto bg-[#f2eee9] w-lvw">
      <CreatePost />
      <AllPosts />
    </div>
  );
};

export default page;
