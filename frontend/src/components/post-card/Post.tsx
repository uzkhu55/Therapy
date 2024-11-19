"use client";
import React, { useState } from "react";
import { ClickButton } from "./ClickButton";
import { CircleX, Pencil } from "lucide-react";
import { UpdatePostModal } from "./UpdatePostModal";
import { DeletePostModal } from "./DeletePostModal";

interface PostProps {
  post: PostData;
}
export type PostData = {
  _id: string;
  userId: { image: string; username: string };
  image: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};
export const Post: React.FC<PostProps> = ({ post }) => {
  const [image, setImage] = useState<File>();
  const [imagePreview, setImagePreview] = useState<string>("null");
  const [isOpen, setIsOpen] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImage(file);
      const imageprev = URL.createObjectURL(file);
      setImagePreview(imageprev);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="w-[590px] h-auto p-3 rounded-md shadow-md mx-auto bg-[#fdfcf6] flex flex-col gap-2">
      <div className=" flex justify-between items-center">
        <div className="flex gap-3 mt-1">
          <img
            className="w-10 h-10 rounded-full"
            src={post.userId.image}
            alt="profile"
          />
          <div>
            <p className="text-sm font-bold flex items-center">
              {post.userId.username}
            </p>
            <p className="text-sm">
              {post.createdAt ? String(post.createdAt).slice(0, 10) : "N/A"}
            </p>
          </div>
        </div>
        <div>
          <Pencil width={20} height={20} onClick={handleOpen} />
          <DeletePostModal post={post} />
        </div>
      </div>
      <div>{post.content}</div>
      {post.image && <img src={post.image} alt="" />}
      {isOpen && (
        <UpdatePostModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          image={image}
          setImage={setImage}
          setImagePreview={setImagePreview}
          handleFileChange={handleFileChange}
          imagePreview={imagePreview}
          post={post}
        />
      )}
      <div className="flex gap-1">
        <ClickButton
          src={"https://cdn-icons-png.flaticon.com/512/126/126473.png"}
          desc={"Like"}
        />
        <ClickButton
          src={
            "https://static-00.iconduck.com/assets.00/comment-icon-1024x964-julk98bl.png"
          }
          desc={"Comment"}
        />
      </div>
      {/* <div>
        <Comment />
      </div> */}
    </div>
  );
};
