import { UserModel } from "../../database/models/user.model";

export const setAdmin = async (req: any, res: any) => {
  const { adminType, authId } = req.body;

  try {
    const existingUser = await UserModel.findOne({ authId });

    if (!existingUser) {
      return res.status(400).json({ message: "User does not exist." });
    }

    await UserModel.findOneAndUpdate(
      { authId },
      {
        isSpecialist: adminType,
      }
    );

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error saving user details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
