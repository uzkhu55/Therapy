import { Post } from "@/components/post-card/Post";
import axios from "axios";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const { data } = await axios.get(
    `http://localhost:8000/posts/fetchPost/${id}`
  );
  console.log(data);

  return (
    <div className="flex flex-col gap-3 absolute -top-0 mx-auto bg-[#f2eee9] w-lvw min-h-[100%] ">
      <Post post={data} />
    </div>
  );
};
export default page;
