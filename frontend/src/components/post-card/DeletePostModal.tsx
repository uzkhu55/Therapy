"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { X } from "lucide-react";
import { useState } from "react";
import { PostData } from "./Post";
import { useUser } from "@clerk/clerk-react";
import { LoadingComponent } from "../LoadingComponent";
import { useRouter } from "next/navigation";

type PostModalProps = {
  post: PostData;
};

export function DeletePostModal({ post }: PostModalProps) {
  const [move, setMove] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const router = useRouter();

  const isCanDeletePost = user?.id;
  const isUserCreatedPost = post.userId?.authId;

  const canDelete = isCanDeletePost === isUserCreatedPost;

  const handleCancel = () => {
    setMove(false);
  };

  const handleMove = async () => {
    const { _id } = post;
    setLoading(true);
    try {
      await axios.delete(`http://localhost:8000/posts/deletePost/${_id}`);
      setLoading(false);
      setMove(false);

      router.push("/createPost");
    } catch (error) {
      console.log("Error deleting post:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <>
      {canDelete && (
        <Dialog open={move} onOpenChange={setMove}>
          <DialogTrigger asChild>
            <X
              width={30}
              height={30}
              className="hover:bg-[#f2eee9] rounded-full p-1"
            />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Move to your trash</DialogTitle>
              <DialogDescription>
                Items in your trash will be automatically deleted after 30 days.
                You can delete them from your trash earlier by going to activity
                log in settings.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button className="bg-[#335141]" onClick={handleCancel}>
                Cancel
              </Button>
              <Button className="bg-[#335141]" onClick={handleMove}>
                Move
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
