"use client";
import React, { useState } from "react";
import { CommentData } from "./CommentComponent"; // Assuming CommentData is defined somewhere else
import { formatDistanceToNow } from "date-fns";
import { DeleteComment } from "./DeleteComment";
import { ReplyCommentComponent } from "./ReplyCommentComponent";
import { AllReplyComments } from "./AllReplyComments";

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
  const [commentIsOpen, setCommentIsOpen] = useState(false);
  const [viewReplies, setViewReplies] = useState(false);

  const handleReplyClick = () => {
    setCommentIsOpen(true);
  };

  const handleViewRepliesClick = () => {
    setViewReplies((prev) => !prev);
  };

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
      </div>
      <div className="text-gray-700 font-medium text-sm leading-relaxed break-words ">
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
      <div className="flex flex-col gap-3 ">
        <div className="flex justify-between ">
          <div className="flex gap-3">
            <button>like</button>
            <button onClick={handleReplyClick}>reply</button>
          </div>
          <button onClick={handleViewRepliesClick}>
            {!viewReplies ? "view replies" : "hide replies"}
          </button>
        </div>
        {commentIsOpen && (
          <ReplyCommentComponent
            commentIsOpen={commentIsOpen}
            setCommentIsOpen={setCommentIsOpen}
            comment={comment}
          />
        )}

        {viewReplies && <AllReplyComments commentId={comment._id} />}
      </div>
    </div>
  );
};
