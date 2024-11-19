import { Request, Response } from "express";
import { PostModel } from "../../database/models/post.model";

export const fetchPostController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const post = await PostModel.findById({ _id: id });

    if (!post) {
      res.status(404).send({ message: "Post not found" });
      return;
    }
    res.status(200).json(post);
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).send({ message: "Failed to fetch post" });
  }
};
