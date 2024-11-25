"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { Comment } from "./Comment";
import { LoadingComponent } from "../LoadingComponent";

export const AllComments = ({ postId }: { postId: string }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `http://localhost:8000/posts/fetchComments/${postId}`
        );
        setComments(data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchComments();
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className="flex flex-col gap-4">
      {comments.map((comment, i) => {
        return <Comment comment={comment} key={i} />;
      })}
    </div>
  );
};
