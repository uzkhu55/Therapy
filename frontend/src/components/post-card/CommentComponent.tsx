"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Camera,
  CircleX,
  ImagePlay,
  SendHorizontal,
  SmilePlus,
} from "lucide-react";
import axios from "axios";
import { PostData } from "./Post";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

import { IconButton } from "./IconButton";
import { useUser } from "@clerk/clerk-react";
import Image from "next/image";
import { uploadImage } from "@/lib/Utils/get-presigned-url";
import {
  handleClear,
  handleClickEmoji,
  handleEmojiSelect,
} from "@/lib/Utils/piker-emoji-function";
import { LoadingComponent } from "../LoadingComponent";
import { toast } from "react-toastify";

type CommentProps = {
  commentIsOpen: boolean;
  setCommentIsOpen: Dispatch<SetStateAction<boolean>>;
  image: File | undefined;
  setImage: Dispatch<SetStateAction<File | undefined>>;
  setImagePreview: Dispatch<SetStateAction<string>>;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  imagePreview: string;
  post: PostData;
};

export type CommentData = {
  _id: string;
  userId: { image: string; username: string; authId: string };
  postId: string;
  image: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};

export const CommentComponent: React.FC<CommentProps> = ({
  commentIsOpen,
  setCommentIsOpen,
  image,
  setImage,
  setImagePreview,
  handleFileChange,
  imagePreview,
  post,
}: CommentProps) => {
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const onClickEmoji = () => handleClickEmoji(showPicker, setShowPicker);
  const onEmojiSelect = (value: { native: string }) =>
    handleEmojiSelect(value, setInput, setShowPicker);
  const onClear = () => handleClear(setInput, setImage, setImagePreview);

  const handleSubmit = async () => {
    const uploadedImageUrl = await uploadImage({ image });
    if (uploadedImageUrl || input.trim()) {
      setLoading(true);
      try {
        await axios.post("http://localhost:8000/posts/createComment", {
          authId: user?.id,
          content: input,
          image: uploadedImageUrl,
          _id: post._id,
        });
        setLoading(false);
        setCommentIsOpen(false);
        toast.success("Амжилттай!");
      } catch (error) {
        console.log("Error posting comment:", error);
        setLoading(false);
      }
      onClear();
      setLoading(false);
    }
  };

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentIsOpen(true);
    handleFileChange(event);
  };

  const handleDeleteFile = () => {
    setImage(undefined);
    setImagePreview("");
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
          src={user?.imageUrl}
          className="w-10 h-10 rounded-full"
          alt="profile"
        />
      </div>
      <div className="flex w-[500px] items-center space-x-2">
        <div className="w-full space-x-2 bg-white rounded-md shadow-md">
          <Input
            type="text"
            placeholder={`${user?.username} та сэтгэгдэл үлдээх үү?`}
            className="border-none"
            disabled={loading}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {image && (
            <div className="flex relative">
              <div className="max-h-[200px] overflow-y-scroll">
                <Image
                  src={imagePreview}
                  width={300}
                  height={100}
                  style={{ objectFit: "cover" }}
                  alt="image"
                />
              </div>
              <CircleX
                className="absolute -right-2 -top-2"
                onClick={handleDeleteFile}
              />
            </div>
          )}
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
              <label htmlFor="comment">
                <Camera
                  width={30}
                  height={30}
                  className="hover:bg-[#f2eee9] rounded-md p-1"
                />
                <input
                  type="file"
                  onChange={handleClick}
                  className="opacity-0 absolute"
                  id="comment"
                  name="comment"
                />
              </label>
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
