import { UserModel } from "../../database/models/user.model";

export const formController = async (req: any, res: any) => {
  try {
    const form = await UserModel.find({ form: true });
    if (!form.length) {
      return res.status(404).json({ message: "No specialist found" });
    }
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    return;
  }
};
