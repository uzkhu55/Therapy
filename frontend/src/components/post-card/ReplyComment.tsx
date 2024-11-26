"use client";
import React from "react";

import { formatDistanceToNow } from "date-fns";
import { DeleteComment } from "./DeleteComment";
import { ReplyCommentData } from "./ReplyCommentComponent";

function getRelativeTime(date: Date): string {
  return formatDistanceToNow(date, { addSuffix: true });
}

interface CommentProps {
  replyComment: ReplyCommentData;
}

export const ReplyComment: React.FC<CommentProps> = ({ replyComment }) => {
  const relativeTime = replyComment.createdAt
    ? getRelativeTime(new Date(replyComment.createdAt))
    : "N/A";

  return (
    <div className="w-[450px] h-auto p-4 rounded-lg mx-auto bg-white shadow-md flex flex-col gap-4 border border-gray-100">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <p className="text-base font-semibold text-gray-800">
              {replyComment.userId.username}
            </p>
            <p className="text-sm text-gray-500">{relativeTime}</p>
          </div>
        </div>
      </div>
      <div className="text-gray-700 font-medium text-sm leading-relaxed break-words ">
        {replyComment.content}
      </div>
    </div>
  );
};
