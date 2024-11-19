import { model, Model, models, Schema } from "mongoose";

export type PostModelType = {
  _id: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  commentId: Schema.Types.ObjectId;
  image: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};

const PostSchema = new Schema<PostModelType>({
  userId: { type: Schema.Types.ObjectId, required: true, ref: "Users" },
  commentId: { type: Schema.Types.ObjectId, required: false },
  image: { type: String, required: false },
  content: { type: String, required: false },
  createdAt: { type: Date, default: Date.now, required: true, immutable: true },
  updatedAt: { type: Date, default: Date.now, required: true },
});

export const PostModel: Model<PostModelType> =
  models["posts"] || model<PostModelType>("posts", PostSchema);
