import mongoose from "mongoose";

const theraDetailSchema = new mongoose.Schema({
  name: { type: String, required: false },
  gender: { type: String, required: false },
  age: { type: String, required: false },
  year: { type: String, required: false },
  zuvluguu: { type: String, required: false },
  expectations: { type: String, required: true },
  form: { type: Boolean, required: true },
  authId: { type: String, required: true, unique: true }, // Linking to user by ID
  // Optionally, if you want to store more user info:
  // username: { type: String }, // If you want to store the username
  // email: { type: String }, // If you want to store email
  // otherUserData: { type: Object }, // If you want to store any additional user data
});

const theraDetailModel = mongoose.model("TheraDetail", theraDetailSchema);

export { theraDetailModel };
