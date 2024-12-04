import mongoose from "mongoose";
import AppointmentModel from "../../database/models/appointment.model";

export const createAppointment = async (req: any, res: any) => {
  try {
    const { idOne, idTwo, date, time } = req.body;

    const appointment = new AppointmentModel({
      idOne,
      idTwo,
      date,
      time,
    });

    await appointment.save();
    res
      .status(201)
      .json({ message: "Appointment created successfully", appointment });
  } catch (error) {
    console.error("Error creating appointment:", error);
    res.status(500).json({ error: "Failed to create appointment" });
  }
};

export const getAppointmentById = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid appointment ID" });
    }

    const appointment = await AppointmentModel.findById(id);

    if (!appointment) {
      return res.status(404).json({ error: "Appointment not found" });
    }

    res.status(200).json(appointment);
  } catch (error) {
    console.error("Error fetching appointment:", error);
    res.status(500).json({ error: "Failed to fetch appointment" });
  }
};
