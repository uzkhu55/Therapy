"use client";
import React, { useState } from "react";
import { ClickButton } from "./ClickButton";
import { Settings2 } from "lucide-react";
import { UpdatePostModal } from "./UpdatePostModal";
import { DeletePostModal } from "./DeletePostModal";
import { CommentComponent } from "./CommentComponent";
import { AllComments } from "./AllComments";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { useUser } from "@clerk/clerk-react";

interface PostProps {
  post: PostData;
}

export type PostData = {
  _id: string;
  userId: { image?: string; username?: string; authId?: string };
  image: string;
  comments: { image: string; username: string; authId?: string };
  content: string;
  createdAt: Date;
  updatedAt: Date;
};

export const Post: React.FC<PostProps> = ({ post }) => {
  const pathname = usePathname();

  const [image, setImage] = useState<File>();
  const [imagePreview, setImagePreview] = useState<string>("null");
  const [isOpen, setIsOpen] = useState(false);
  const [commentIsOpen, setCommentIsOpen] = useState(false);

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

  const handleCommentOpen = () => {
    setCommentIsOpen(true);
  };

  function getRelativeTime(date: Date): string {
    return formatDistanceToNow(date, { addSuffix: true });
  }
  const relativeTime = post.createdAt
    ? getRelativeTime(new Date(post.createdAt))
    : "N/A";

  const { user } = useUser();
  const isUserCreatePost = user?.id;
  const isUserCanUpdate = post.userId?.authId;

  const canUpdate = isUserCreatePost === isUserCanUpdate;
  return (
    <div className="w-[590px] h-auto p-3 rounded-md shadow-md mx-auto  flex flex-col gap-2 bg-[#fdfcf6] ">
      <div className=" flex justify-between items-center">
        <div className="flex gap-3 mt-1">
          <img
            className="w-10 h-10 rounded-full"
            src={post.userId?.image}
            alt="profile"
          />
          <div>
            <p className="text-sm font-bold flex items-center">
              {post.userId?.username}
            </p>
            <p className="text-sm">{relativeTime}</p>
          </div>
        </div>
        <div className="flex">
          {canUpdate && (
            <Settings2
              width={30}
              height={30}
              className="hover:bg-[#f2eee9] rounded-full  p-1"
              onClick={handleOpen}
            />
          )}
          <DeletePostModal post={post} />
        </div>
      </div>
      <div className="pl-1 text-gray-700 font-medium text-sm leading-relaxed break-words ">
        {post.content}
      </div>
      {post.image && <img className="rounded-md" src={post.image} alt="" />}
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
      <div className=" text-right pr-1">
        <Link href={`/createPost/${post._id}`}>View comments</Link>
      </div>

      <div className="flex w-[558px] border-t-[1px] pt-3">
        <ClickButton
          src={"https://cdn-icons-png.flaticon.com/512/126/126473.png"}
          desc={"Like"}
          // clickhandler={handleLikeClick}
        />

        <ClickButton
          src={
            "https://static-00.iconduck.com/assets.00/comment-icon-1024x964-julk98bl.png"
          }
          desc={"Comment"}
          clickhandler={handleCommentOpen}
        />
      </div>
      <div className="w-[100%] relative">
        {commentIsOpen && (
          <CommentComponent
            commentIsOpen={commentIsOpen}
            setCommentIsOpen={setCommentIsOpen}
            image={image}
            setImage={setImage}
            setImagePreview={setImagePreview}
            handleFileChange={handleFileChange}
            imagePreview={imagePreview}
            post={post}
          />
        )}
        <div>
          {pathname === "/createPost" ? (
            <></>
          ) : (
            <AllComments postId={post._id} />
          )}
        </div>
      </div>
    </div>
  );
};
