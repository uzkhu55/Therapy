import { UserModel } from "../../database/models/user.model";

export const neguser = async (req: any, res: any) => {
  const { authId } = req.params;

  try {
    const user = await UserModel.findOne({ authId });

    if (!user) {
      return res.status(404).json({ message: "No user found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    return;
  }
};
