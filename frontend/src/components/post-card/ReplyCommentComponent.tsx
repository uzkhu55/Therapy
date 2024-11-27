"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Input } from "@/components/ui/input";
import { ImagePlay, SendHorizontal, SmilePlus } from "lucide-react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { IconButton } from "./IconButton";
import { LoadingComponent } from "../LoadingComponent";
import { CommentData } from "./CommentComponent";

type CommentProps = {
  commentIsOpen: boolean;
  setCommentIsOpen: Dispatch<SetStateAction<boolean>>;
  comment: CommentData;
};

export type ReplyCommentData = {
  _id: string;
  userId: { image: string; username: string; authId: string };
  commentId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};

export const ReplyCommentComponent: React.FC<CommentProps> = ({
  commentIsOpen,
  setCommentIsOpen,
  comment,
}: CommentProps) => {
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useUser();

  // Handle emoji picker toggle
  const onClickEmoji = () => setShowPicker(!showPicker);

  // Handle emoji selection
  const onEmojiSelect = (value: { native: string }) => {
    setInput(input + value.native); // Add selected emoji to input
    setShowPicker(false); // Close emoji picker after selection
  };

  // Handle comment submission
  const handleSubmit = async () => {
    if (input.trim()) {
      setLoading(true);
      try {
        await axios.post("http://localhost:8000/posts/createReplyComment", {
          authId: user?.id,
          content: input,
          _id: comment._id,
        });
        setLoading(false);
        setCommentIsOpen(false);
      } catch (error) {
        console.log("Error posting comment:", error);
        setLoading(false);
      }
    }
  };

  const isCommentButtonDisabled = !input.trim() && !showPicker;

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div
      className={`${
        commentIsOpen ? "flex" : "hidden"
      } w-[560px] h-auto p-3 rounded-md mx-auto bg-[#fdfcf6] flex gap-3`}
    >
      <div className="mt-1">
        <img
          src={user?.imageUrl || ""}
          className="w-10 h-10 rounded-full"
          alt="profile"
        />
      </div>
      <div className="flex w-[500px] items-center space-x-2">
        <div className="w-full space-x-2 bg-white rounded-md shadow-md">
          <Input
            type="text"
            placeholder={`Comment as ${user?.username}`}
            className="border-none"
            disabled={loading}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="flex justify-between gap-1 mt-2 p-2 bg-white">
            <div className="flex gap-3">
              <IconButton onclick={onClickEmoji}>
                <SmilePlus
                  width={30}
                  height={30}
                  className="hover:bg-[#f2eee9] rounded-md p-1"
                />
                {showPicker && (
                  <div className="absolute left-[30px] top-[20px] z-10">
                    <Picker data={data} onEmojiSelect={onEmojiSelect} />
                  </div>
                )}
              </IconButton>

              <ImagePlay
                width={30}
                height={30}
                className="hover:bg-[#f2eee9] rounded-md p-1"
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={isCommentButtonDisabled}
              className={`${
                isCommentButtonDisabled ? "bg-[#f2eee9]" : "bg-[#335141]"
              } text-white p-2 rounded-md flex items-center justify-center`}
            >
              <SendHorizontal width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
