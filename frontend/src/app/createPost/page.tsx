import { AllPosts } from "@/components/post-card/AllPosts";
import { CommentComponent } from "@/components/post-card/Comment";
import { CreatePost } from "@/components/post-card/CreatePost";

import React from "react";

const page = async () => {
  return (
    <div className="flex flex-col gap-3 absolute -top-0">
      <CreatePost />
      <AllPosts />
      <CommentComponent />
    </div>
  );
};
export default page;
