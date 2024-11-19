import { model, Model, models, ObjectId, Schema } from "mongoose";

enum Gender {
  Male = "Male",
  Female = "Female",
}
enum lookingFor {
  Individual = "Individual",
  Couples = "Couples",
  Teen = "Teen",
}
enum relSatatus {
  Single = "Single",
  InRelationship = "In a Relationship",
  Married = "Married",
  Divorced = "Divorced",
  Other = "Other",
}

enum identify {
  Straight = "Straight",
  Gay = "Gay",
  Lesbian = "Lesbian",
  BiorPan = "Bi or Pan",
  Prefernottosay = "Prefer not to say",
}

enum expectations {
  Listens = "Listens",
  Challengesmybeliefs = "Challenges my beliefs",
  Guidesmetosetgoals = "Guides me to set goals",
  Other = "Other",
  Idontknow = "I don't know",
}

enum sleepHealth {
  Good = "Good",
  Fair = "Fair",
  Poor = "Poor",
}

enum phyHealth {
  Good = "Good",
  Fair = "Fair",
  Poor = "Poor",
}

export type userDetailModelType = {
  _id: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  gender: Gender;
  age: number;
  relSatatus: relSatatus;
  lookingFor: lookingFor;
  identify: identify;
  expectations: expectations;
  previousTheraphy: boolean;
  phyHealth: phyHealth;
  sleepHealth: sleepHealth;
  createdAt: Date;
  updatedAt: Date;
};

const userdetailSchema = new Schema<userDetailModelType>({
  userId: { type: Schema.Types.ObjectId, required: true, ref: "Users" },
  gender: { type: String, enum: ["Male", "Female"], required: true },
  lookingFor: {
    type: String,
    enum: ["Individual", "Couples", "Teen"],
    required: true,
  },
  age: { type: Number, required: true },
  relSatatus: {
    type: String,
    enum: ["Single", "In a Relationship", "Married", "Divorced", "Other"],
    required: true,
  },
  identify: {
    type: String,
    enum: ["Straight", "Gay", "Lesbian", "Bi or Pan", "Prefer not to say"],
    required: true,
  },
  expectations: {
    type: String,
    enum: [
      "Listens",
      "Challenges my beliefs",
      "Guides me to set goals",
      "Other",
      "I don't know",
    ],
    required: true,
  },
  previousTheraphy: { type: Boolean, required: true, default: false },
  sleepHealth: {
    type: String,
    enum: ["Good", "Fair", "Poor"],
    required: true,
  },
  phyHealth: { type: String, enum: ["Good", "Fair", "Poor"], required: true },
  createdAt: { type: Date, default: Date.now, required: true, immutable: true },
  updatedAt: { type: Date, default: Date.now, required: true },
});

export const userDetailModel: Model<userDetailModelType> =
  models["userDetail"] ||
  model<userDetailModelType>("userDetail", userdetailSchema);
