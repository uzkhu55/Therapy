import { model, Model, models, Schema } from "mongoose";

export type AttachmentType = {
  type: string;
  url: string;
};

export type MessageModelType = {
  chosenUserId: string;
  _id: Schema.Types.ObjectId;
  senderId: Schema.Types.ObjectId;
  receiverId: Schema.Types.ObjectId;
  content: {
    type: [String];
    required: true;
  };
  timeStamp: Date;
  roomChatId: Schema.Types.ObjectId;
  isRead: boolean;
  attachments?: AttachmentType[];
  author: string;
};

const MessageSchema = new Schema<MessageModelType>({
  chosenUserId: {
    type: String,
    required: true,
    ref: "User",
  },
  author: {
    type: String,
    required: true,
    ref: "User",
  },
  senderId: { type: Schema.Types.ObjectId, required: false, ref: "User" },
  receiverId: { type: Schema.Types.ObjectId, required: false, ref: "User" },
  roomChatId: { type: Schema.Types.ObjectId, required: false, ref: "ChatRoom" },
  content: [{ type: String, required: true }],
  timeStamp: { type: Date, default: Date.now, required: true },
  isRead: { type: Boolean, default: false },
  attachments: [
    {
      type: { type: String, required: false },
      url: { type: String, required: false },
    },
  ],
});

export const MessageModel: Model<MessageModelType> =
  models["Message"] || model<MessageModelType>("Message", MessageSchema);
