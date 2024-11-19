import { UserModel } from "../../database/models/user.model";

export const getSpecialistsController = async (req: any, res: any) => {
  try {
    const specialist = await UserModel.find({ isSpecialist: true });
    if (!specialist.length) {
      return res.status(404).json({ message: "No specialist found" });
    }
    res.status(200).json(specialist);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    return;
  }
};
