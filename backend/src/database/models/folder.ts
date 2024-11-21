import { Schema, model, Document } from "mongoose";

// Define the Folder interface
interface IFolder extends Document {
  users: string[]; // Array of user IDs
  createdAt: Date;
}

// Folder schema
const folderSchema = new Schema<IFolder>({
  users: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now },
});

const FolderModel = model<IFolder>("Folder", folderSchema);

export default FolderModel;
