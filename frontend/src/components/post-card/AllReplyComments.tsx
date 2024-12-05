"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { LoadingComponent } from "../LoadingComponent";
import { ReplyComment } from "./ReplyComment";

export const AllReplyComments = ({ commentId }: { commentId: string }) => {
  const [replyComments, setReplyComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://if-project8.onrender.com/posts/fetchReplyComments/${commentId}`
        );

        setReplyComments(data);

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
      {replyComments.map((replyComment, i) => {
        return <ReplyComment replyComment={replyComment} key={i} />;
      })}
    </div>
  );
};
