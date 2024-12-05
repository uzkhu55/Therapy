import AppointmentModel from "../../database/models/appointment.model";
import { theraDetailModel } from "../../database/models/theradetail.model";
import { userDetailModel } from "../../database/models/usedetail.model";
import { UserModel } from "../../database/models/user.model";

export const getUserDetailById = async (req: any, res: any) => {
  const { authId } = req.params;
  try {
    const user = await userDetailModel.findOne({ authId });

    if (!user) {
      return res.status(200).json({ message: "No user found" });
    }

    const appointments = await AppointmentModel.find({
      idOne: authId,
    });

    const allAppointments = await Promise.all(
      appointments.map(async (el) => {
        const user = await theraDetailModel.findOne({ authId: el.idTwo });
        return {
          date: el.date,
          time: el.time,
          idTwo: user?.name,
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
