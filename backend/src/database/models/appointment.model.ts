import { Schema, Model, models, model, ObjectId } from "mongoose";

enum status {
  pending = "PENDING",
  confirmed = "CONFIRMED",
  cancelled = "CANCELED",
}
export type AppointmentModelType = {
  _id: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  specialistId: Schema.Types.ObjectId;
  date: Date;
  status: status;
  createdAt: Date;
  updatedAt: Date;
};

const AppointmentSchema = new Schema<AppointmentModelType>({
  userId: { type: Schema.Types.ObjectId, required: true, ref: "Users" },
  specialistId: { type: Schema.Types.ObjectId, required: true, ref: "Users" },
  status: {
    type: String,
    enum: ["CONFIRMED", "PENDING", "CANCELED"],
    required: true,
  },
  createdAt: { type: Date, default: Date.now, required: true, immutable: true },
  updatedAt: { type: Date, default: Date.now, required: true },
});

export const UserModel: Model<AppointmentModelType> =
  models["Appointment"] ||
  model<AppointmentModelType>("Appointment", AppointmentSchema);
