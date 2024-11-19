import { model, Model, models, Schema } from "mongoose";

export type CommentModelType = {
  _id: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
};

const CommentSchema = new Schema<CommentModelType>({
  userId: { type: Schema.Types.ObjectId, required: true, ref: "Users" },
  comment: { type: String, required: false },
  createdAt: { type: Date, default: Date.now, required: true, immutable: true },
  updatedAt: { type: Date, default: Date.now, required: true },
});

export const CommentModel: Model<CommentModelType> =
  models["Comments"] || model<CommentModelType>("Comments", CommentSchema);
