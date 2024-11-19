import { Post } from "@/components/post-card/Post";
import axios from "axios";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const { data } = await axios.get(
    `http://localhost:8000/posts/fetchPost/${id}`
  );

  return (
    <div>
      <Post post={data} />
    </div>
  );
};
export default page;
