import { Request, Response } from "express";
import { CommentModel } from "../../database/models/comment.model";

export const fetchCommentsController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { postId } = req.params;
  try {
    const comments = await CommentModel.find({ postId: postId })
      .populate("userId")
      .sort({ createdAt: -1 });

    res.status(200).send(comments);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Failed to fetch comments" });
  }
};
