import { Schema, model, Document } from "mongoose";

// Define the Folder interface
interface IFolder extends Document {
  userOne: string; // Array of user IDs
  createdAt: Date;
  userTwo: string;
}

// Folder schema
const folderSchema = new Schema<IFolder>({
  userOne: { type: String, required: true },
  userTwo: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const FolderModel = model<IFolder>("Folder", folderSchema);

export default FolderModel;
