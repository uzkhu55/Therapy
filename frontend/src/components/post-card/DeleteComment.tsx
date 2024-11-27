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
import { CommentData } from "./CommentComponent";

import { useUser } from "@clerk/clerk-react";
import { LoadingComponent } from "../LoadingComponent";

type CommentProps = {
  comment: CommentData;
};

export function DeleteComment({ comment }: CommentProps) {
  const [move, setMove] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const isCanDeleteComment = user?.id;
  const isCommenter = comment.userId.authId;

  const canDelete = isCanDeleteComment === isCommenter;

  const handleCancel = () => {
    setMove(false);
  };

  const handleMove = async () => {
    const { _id } = comment;
    setLoading(true);
    try {
      await axios.delete(`http://localhost:8000/posts/deleteComment/${_id}`);
      setLoading(false);
      setMove(false);
    } catch (error) {
      console.error("Error deleting comment:", error);
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
                You can delete them from your trash earlier by going to the
                activity log in settings.
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
