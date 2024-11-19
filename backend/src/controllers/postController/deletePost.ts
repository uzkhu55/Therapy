import { Request, Response } from "express";
import { PostModel } from "../../database/models/post.model";

export const deletePostController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const deletedPost = await PostModel.findByIdAndDelete({ _id: id });

    if (!deletedPost) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    res.status(200).json({ message: "Post deleted successfully", deletedPost });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ message: "Failed to delete post" });
  }
};
