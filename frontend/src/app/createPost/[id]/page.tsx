import { AllNews } from "@/components/post-card/AllNews";
import { Post } from "@/components/post-card/Post";
import Sidebar from "@/components/post-card/SideBar";
import axios from "axios";
import React from "react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  try {
    const { data } = await axios.get(
      `http://localhost:8000/posts/fetchPost/${id}`
    );

    return (
      <div className="flex justify-between bg-[#f2eee9] w-lvw min-h-[100%]">
        <div>
          <Sidebar />
        </div>
        <div className="flex flex-col gap-4 mx-auto overflow-y-auto h-lvh overflow-y-hidden-hidden">
          <Post post={data} />
        </div>
        <div className="max-w-[350px] h-lvh overflow-y-auto flex flex-col gap-3 items-center">
          <p className="w-[240px] font-medium">Нийтлэл</p>
          <AllNews />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    return (
      <div>
        <p>Error loading post.</p>
      </div>
    );
  }
};

export default Page;
