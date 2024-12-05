"use client";
import axios from "axios";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { LoadingComponent } from "../LoadingComponent";
import { useUser } from "@clerk/clerk-react";

export type LikeModelType = {
  _id: string;
  userId: {
    authId: string;
  };
  postId: string;
  likeCount: string;
  createdAt: Date;
  updatedAt: Date;
};

export const AllLikes = ({
  postId,
  likes,
  setLikes,
  setIsLiked,
}: {
  postId: string;
  likes: LikeModelType[];
  setLikes: Dispatch<SetStateAction<LikeModelType[]>>;
  setIsLiked: Dispatch<SetStateAction<boolean>>;
}) => {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://if-project8.onrender.com/posts/fetchLikes/${postId}`
        );
        const userHasLiked = data.some(
          (like: LikeModelType) => like.userId.authId === user?.id
        );

        setIsLiked(userHasLiked);

        setLikes(data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching likes:", error);
        setLoading(false);
      }
    };

    fetchLikes();
  }, [postId]);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className="flex flex-col gap-4">
      <p>{likes.length} </p>
    </div>
  );
};
