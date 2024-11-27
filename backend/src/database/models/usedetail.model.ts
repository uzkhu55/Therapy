import mongoose from "mongoose";

const userDetailSchema = new mongoose.Schema({
  gender: { type: String, required: true },
  age: { type: String, required: true },
  relationshipStatus: { type: String, required: true },
  prevTherapy: { type: String, required: true },
  lookingFor: { type: String, required: true },
  expectations: { type: String, required: true },
  form: { type: Boolean, required: true },
  authId: { type: String, required: true, unique: true }, // Linking to user by ID
  // Optionally, if you want to store more user info:
  // username: { type: String }, // If you want to store the username
  // email: { type: String }, // If you want to store email
  // otherUserData: { type: Object }, // If you want to store any additional user data
});

const userDetailModel = mongoose.model("UserDetail", userDetailSchema);

export { userDetailModel };
