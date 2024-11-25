import { Request, Response } from "express";
import { PostModel } from "../../database/models/post.model";

export const likeCountController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { like } = req.body;

  try {
    const updatedLikeCount = await PostModel.findByIdAndUpdate(
      { _id: id },
      { like }
    );

    if (!updatedLikeCount) {
      res.status(404).json({ message: "Post not found." });
      return;
    }

    res.status(200).json(updatedLikeCount);
  } catch (error) {
    console.error("Error updating post like:", error);
    res.status(500).json({ message: "Failed to update post like." });
  }
};
