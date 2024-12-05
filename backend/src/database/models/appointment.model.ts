import { Schema, model, Document } from "mongoose";

interface Appointment extends Document {
  date: string;
  time: string;
  idOne: string;
  idTwo: string;
  createdAt: Date;
}

const appointmentSchema = new Schema<Appointment>({
  idOne: { type: String, required: true, ref: "UserDetail" },
  idTwo: { type: String, required: true, ref: "UserDetail" },
  date: { type: String, required: true },
  time: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const AppointmentModel = model<Appointment>("Appointment", appointmentSchema);

export default AppointmentModel;
