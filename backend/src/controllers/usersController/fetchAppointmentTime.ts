import { Request, Response } from "express";
import AppointmentModel from "../../database/models/appointment.model";

export const fetchAppointmentTime = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const appointmentByTherapist = AppointmentModel.findById({ _id: id });

    if (!appointmentByTherapist) {
      res.status(404).send({ message: "appointmentByTherapist not found" });
    }

    res.status(200).json(appointmentByTherapist);
  } catch (error) {
    console.error("Error fetching appointmentByTherapist:", error);
    res.status(500).send({ message: "Failed to fetch appointmentByTherapist" });
  }
};
