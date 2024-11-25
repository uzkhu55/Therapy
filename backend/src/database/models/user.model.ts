import { Date, model, Model, models, Schema } from "mongoose";

export type UsersModelType = {
  _id: Schema.Types.ObjectId;
  username: string;
  authId: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  bio: string;
  address: string;
  image: string;
  available: string;
  isSpecialist: boolean;
  createdAt: Date;
  updatedAt: Date;
};

const UserSchema = new Schema<UsersModelType>({
  username: { type: String, required: true },
  firstName: { type: String, required: false },
  authId: { type: String, required: true },
  lastName: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: false },
  bio: { type: String, required: false },
  address: { type: String, required: false },
  image: { type: String, required: false },
  available: { type: String, required: false },
  isSpecialist: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now, required: true, immutable: true },
  updatedAt: { type: Date, default: Date.now, required: true },
});

export const UserModel: Model<UsersModelType> =
  models["Users"] || model<UsersModelType>("Users", UserSchema);
