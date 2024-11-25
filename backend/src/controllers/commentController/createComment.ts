import env from "dotenv";
import { CommentModel } from "../../database/models/comment.model";
import { UserModel } from "../../database/models/user.model";

env.config();

export const createCommentController = async (req: any, res: any) => {
  const { content, authId, image, _id } = req.body;
  const isUserExist = await UserModel.findOne({ authId });

  if (!isUserExist) {
    res.status(500).send({ message: "authorization error" });
    return;
  }

  try {
    const newComment = await CommentModel.create({
      userId: isUserExist._id,
      postId: _id,
      content,
      image,
    });
    res
      .status(201)
      .send({ message: "Comment created successfully", newComment });
  } catch (error) {
    console.log(error);

    res.status(500).send({ message: "Failed to create comment" });
  }
};
