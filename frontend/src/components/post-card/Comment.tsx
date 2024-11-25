"use client";
import React from "react";
import { CommentData } from "./CommentComponent"; // Assuming CommentData is defined somewhere else
import { formatDistanceToNow } from "date-fns";
import { DeleteComment } from "./DeleteComment";

function getRelativeTime(date: Date): string {
  return formatDistanceToNow(date, { addSuffix: true });
}

interface CommentProps {
  comment: CommentData;
}

export const Comment: React.FC<CommentProps> = ({ comment }) => {
  const relativeTime = comment.createdAt
    ? getRelativeTime(new Date(comment.createdAt))
    : "N/A";

  return (
    <div className="w-[560px] h-auto p-4 rounded-lg mx-auto bg-white shadow-md flex flex-col gap-4 border border-gray-100">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <img
            className="w-12 h-12 rounded-full border border-gray-300 object-cover"
            src={comment.userId?.image}
            alt="profile"
          />
          <div className="flex flex-col">
            <p className="text-base font-semibold text-gray-800">
              {comment.userId.username}
            </p>
            <p className="text-sm text-gray-500">{relativeTime}</p>
          </div>
        </div>
        <DeleteComment comment={comment} />
      </div>
      <div className="text-gray-700 text-sm leading-relaxed break-words ">
        {comment.content}
      </div>
      {comment.image && (
        <div className="w-full flex justify-center">
          <img
            className="w-auto max-w-[150px]  rounded-md border border-gray-300"
            src={comment.image}
            alt="comment-related"
          />
        </div>
      )}
      reply
    </div>
  );
};
