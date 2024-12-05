import AppointmentModel from "../../database/models/appointment.model";
import { theraDetailModel } from "../../database/models/theradetail.model";
import { UserModel } from "../../database/models/user.model";

export const getTheraDetailById = async (req: any, res: any) => {
  const { authId } = req.params;
  try {
    const user = await theraDetailModel.findOne({ authId });

    if (!user) {
      return res.status(200).json({ message: "No user found" });
    }

    const appointments = await AppointmentModel.find({
      idTwo: authId,
    });

    const allAppointments = await Promise.all(
      appointments.map(async (el) => {
        const user = await UserModel.findOne({ authId: el.idOne });
        return {
          date: el.date,
          time: el.time,
          idTwo: user?.username,
          createdAt: el.createdAt,
        };
      })
    );

    res.status(200).json({ user, allAppointments });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    return;
  }
};
