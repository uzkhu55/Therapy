"use client";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction, useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React from "react";
import { ClickButtonEmoji } from "./ClickButtonEmoji";
import { CircleX, Image as ImageIcon } from "lucide-react";
import axios from "axios";
import Image from "next/image";
import { Dialog } from "@radix-ui/react-dialog";
import { PostData } from "./Post";

import { uploadImage } from "@/lib/Utils/get-presigned-url";
import {
  handleClear,
  handleClickEmoji,
  handleEmojiSelect,
} from "@/lib/Utils/piker-emoji-function";
import { useUser } from "@clerk/clerk-react";
import { LoadingComponent } from "../LoadingComponent";
import { toast } from "react-toastify";

type PostModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  image: File | undefined;
  setImage: Dispatch<SetStateAction<File | undefined>>;
  setImagePreview: Dispatch<SetStateAction<string>>;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  imagePreview: string;
  post: PostData;
};

export function UpdatePostModal({
  isOpen,
  setIsOpen,
  image,
  setImage,
  setImagePreview,
  handleFileChange,
  imagePreview,
  post,
}: PostModalProps) {
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [input, setInput] = useState<string>(`${post.content}`);
  const [loading, setLoading] = useState(false);

  const onClickEmoji = () => handleClickEmoji(showPicker, setShowPicker);
  const onEmojiSelect = (value: { native: string }) =>
    handleEmojiSelect(value, setInput, setShowPicker);
  const onClear = () => handleClear(setInput, setImage, setImagePreview);

  const handleSubmit = async () => {
    const uploadedImageUrl = await uploadImage({ image });

    if (uploadedImageUrl || input.trim()) {
      const { _id } = post;
      setLoading(true);

      try {
        await axios.put(`http://localhost:8000/posts/updatePost/${_id}`, {
          content: input,
          image: uploadedImageUrl,
        });
        setLoading(false);
        setIsOpen(false);
        toast.success("Амжилттай засагдлаа!");
      } catch (error) {
        console.log("Error updating post:", error);
        setLoading(false);
      }
      onClear();
    }
    setLoading(false);
  };

  const handleDeleteFile = () => {
    setImage(undefined);
    setImagePreview("null");
  };

  const isPostButtonDisabled = !input.trim() && !image && !showPicker;

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Засварлах</DialogTitle>

          <div>
            <div className="flex gap-2 mt-2">
              <img
                className="w-10 h-10 rounded-full"
                src={post?.userId.image}
                alt=""
              />
              <DialogDescription className="text-sm font-bold flex items-center">
                {post.userId.username}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <div className="w-[376px]">
          <Input
            disabled={loading}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`What's on your mind ${post.userId.username}`}
          />
        </div>
        <div className="flex w-[376px] border-t-[1px] pt-1 relative">
          <label
            htmlFor="picture"
            className="flex-1 relative p-3 flex gap-2 items-center justify-center hover:bg-[#f2eee9] rounded-full"
          >
            <ImageIcon size={22} strokeWidth={1.2} />
            Зураг
            <input
              type="file"
              className="opacity-0 absolute w-[50%]"
              id="picture"
              name="picture"
              onChange={handleFileChange}
            />
          </label>
          <ClickButtonEmoji
            src={
              "https://cdn.icon-icons.com/icons2/3288/PNG/512/happy_emo_emoticon_emoji_icon_208299.png"
            }
            desc={"Эможи"}
            clickhandler={onClickEmoji}
          >
            {showPicker && (
              <div className="absolute -left-[300px] -top-[50px] z-10">
                <Picker data={data} onEmojiSelect={onEmojiSelect} />
              </div>
            )}
          </ClickButtonEmoji>
        </div>

        {image && (
          <div className="flex relative">
            <div className="max-h-[200px] overflow-y-scroll">
              <Image
                src={imagePreview}
                width={400}
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

        <DialogFooter>
          <Button
            typeof="submit"
            disabled={isPostButtonDisabled || loading}
            onClick={handleSubmit}
            className="w-[378px]  bg-[#335141]"
            type="submit"
          >
            Засаж дууссан
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
