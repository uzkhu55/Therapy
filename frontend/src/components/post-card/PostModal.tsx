"use client";

import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction, useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/clerk-react";
import React from "react";
import { ClickButtonEmoji } from "./ClickButtonEmoji";
import { CircleX, Image as ImageIcon } from "lucide-react";
import axios from "axios";
import Image from "next/image";
import LoadingComponent from "../LoadingComponent";

type PostModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  image: File | undefined;
  setImage: Dispatch<SetStateAction<File | undefined>>;
  setImagePreview: Dispatch<SetStateAction<string>>;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  imagePreview: string;
};

export function PostModal({
  isOpen,
  setIsOpen,
  image,
  setImage,
  setImagePreview,
  handleFileChange,
  imagePreview,
}: PostModalProps) {
  const { user } = useUser();
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const getPresignedURL = async () => {
    const { data } = await axios.get("http://localhost:8000/cloudflare");
    return data as { uploadUrl: string; accessUrls: string };
  };

  const uploadImage = async () => {
    if (image) {
      const data = await getPresignedURL();
      await axios.put(data.uploadUrl, image, {
        headers: { "Content-Type": image.type },
      });
      return data.accessUrls;
    }
    return "";
  };

  const handleClickEmoji = () => {
    setShowPicker(!showPicker);
  };

  const handleEmojiSelect = (value: { native: string }) => {
    setInput((prev) => prev + value.native);
    setShowPicker(false);
  };

  const handleClear = () => {
    setInput("");
    setImage(undefined);
    setImagePreview("");
  };

  const handleSubmit = async () => {
    setLoading(true);

    const uploadedImageUrl = await uploadImage();

    if (uploadedImageUrl || input.trim()) {
      try {
        await axios.post("http://localhost:8000/posts/createPost", {
          authId: user?.id,
          content: input,
          image: uploadedImageUrl,
        });
        setIsOpen(false);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }

      handleClear();
    }
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
      <DialogTrigger asChild>
        <Button
          className="w-[375px] rounded-md border-none hover:bg-[#f8f0e5]"
          variant="outline"
        >
          {`What's on your mind, ${user?.username}?`}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create post</DialogTitle>

          <div>
            <div className="flex gap-2 mt-2">
              <img
                className="w-10 h-10 rounded-full"
                src={user?.imageUrl}
                alt=""
              />
              <DialogDescription className="text-sm font-bold flex items-center">
                {` ${user?.username}?`}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <div className="w-[376px]">
          <Input
            disabled={loading}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`What's on your mind, ${user?.username}?`}
          />
        </div>
        <div className="flex w-[376px] border-t-[1px] pt-1 relative">
          <label
            htmlFor="picture"
            className="flex-1 relative p-3 flex gap-2 items-center justify-center hover:bg-[#f8f0e5] rounded-md"
          >
            <ImageIcon size={22} strokeWidth={1.2} />
            Image
            <input
              type="file"
              className="opacity-0 absolute"
              id="picture"
              name="picture"
              onChange={handleFileChange}
            />
          </label>
          <ClickButtonEmoji
            src={
              "https://cdn.icon-icons.com/icons2/3288/PNG/512/happy_emo_emoticon_emoji_icon_208299.png"
            }
            desc={"Emoji"}
            clickhandler={handleClickEmoji}
          >
            {showPicker && (
              <div className="absolute -left-[300px] -top-[50px] z-10">
                <Picker data={data} onEmojiSelect={handleEmojiSelect} />
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
            className="w-[378px]"
            type="submit"
          >
            Post
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
