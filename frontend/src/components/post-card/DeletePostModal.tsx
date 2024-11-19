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
import { CircleX } from "lucide-react";
import { useState } from "react";
import { PostData } from "./Post";

type PostModalProps = {
  post: PostData;
};
export function DeletePostModal({ post }: PostModalProps) {
  const [move, setMove] = useState(false);
  const [loading, setLoading] = useState(false);

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
    } catch (error) {
      console.error("Error deleting post:", error);
      setLoading(false);
    }
  };

  return (
    <Dialog open={move} onOpenChange={setMove}>
      <DialogTrigger asChild>
        <CircleX />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Move to your trash</DialogTitle>
          <DialogDescription>
            Items in your trash will be automatically deleted after 30 days. You
            can delete them from your trash earlier by going to activity log in
            settings.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="submit" onClick={handleMove}>
            Move
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
