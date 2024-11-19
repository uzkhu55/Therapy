import { UserModel } from "../../database/models/user.model";

export const getClientsController = async (req: any, res: any) => {
  try {
    const clients = await UserModel.find({ isSpecialist: false });
    if (!clients.length) {
      return res.status(404).json({ message: "No client found" });
    }
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    return;
  }
};
