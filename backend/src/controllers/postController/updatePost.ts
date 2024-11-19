import { Request, Response } from "express";
import { PostModel } from "../../database/models/post.model";

export const updatePostController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { content, image } = req.body;

  try {
    const updatedPost = await PostModel.findByIdAndUpdate(
      { _id: id },
      { content, image },
      { new: true }
    );

    if (!updatedPost) {
      res.status(404).json({ message: "Post not found." });
      return;
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error("Error updating Post:", error);
    res.status(500).json({ message: "Failed to update post." });
  }
};
