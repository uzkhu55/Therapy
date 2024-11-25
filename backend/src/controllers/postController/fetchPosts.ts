import { Request, Response } from "express";
import { PostModel } from "../../database/models/post.model";

export const fetchPostsController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const posts = await PostModel.find()
      .populate("userId")
      .sort({ createdAt: -1 });

    res.status(200).send(posts);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Failed to fetch posts" });
  }
};
