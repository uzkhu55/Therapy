"use client";
import { useUser } from "@clerk/clerk-react";
import { PostModal } from "./PostModal";
import { ClickButtonEmoji } from "./ClickButtonEmoji";
import { useState } from "react";
import { ImageIcon } from "lucide-react";

export const CreatePost = () => {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [image, setImage] = useState<File>();
  const [imagePreview, setImagePreview] = useState<string>("null");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImage(file);
      const imageprev = URL.createObjectURL(file);
      setImagePreview(imageprev);
    }
  };
  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsOpen(true);
    handleFileChange(event);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="w-[590px] h-[135px] p-3 rounded-md mx-auto shadow-md mt-7 bg-[#fdfcf6]">
      <div className="flex gap-3 w-[558px] mb-2">
        <div className="flex gap-2 mt-1">
          <img className="w-10 h-10 rounded-full" src={user?.imageUrl} alt="" />
          <p className="text-sm font-bold flex items-center">
            {`${user?.username}`}
          </p>
        </div>
        <PostModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          image={image}
          setImage={setImage}
          setImagePreview={setImagePreview}
          handleFileChange={handleFileChange}
          imagePreview={imagePreview}
        />
      </div>
      <div className="flex w-[558px] border-t-[1px] pt-3">
        <label
          htmlFor="picture"
          className="flex-1 relative p-3 flex gap-2 items-center justify-center hover:bg-[#f2eee9] rounded-full"
        >
          <ImageIcon size={22} strokeWidth={1.2} />
          Image
          <input
            type="file"
            onClick={handleOpen}
            onChange={(e) => handleClick(e)}
            className="opacity-0 absolute w-[50%]"
            id="picture"
            name="picture"
          />
        </label>
        <ClickButtonEmoji
          src={
            "https://cdn.icon-icons.com/icons2/3288/PNG/512/happy_emo_emoticon_emoji_icon_208299.png"
          }
          desc={"Emoji"}
          clickhandler={handleOpen}
        ></ClickButtonEmoji>
      </div>
    </div>
  );
};
