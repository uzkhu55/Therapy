import FolderModel from "../../database/models/folder";
import { UserModel } from "../../database/models/user.model";

export const getUsersMessages = async (req: any, res: any) => {
  const { convId } = req.query; // Use authId from route parameters

  try {
    const conversations = await FolderModel.findById({ _id: convId });

    if (!conversations) {
      return res.status(200).json({ message: false });
    }

    res.status(200).json({ message: true, conversations });
  } catch (error) {
    console.error("Error fetching user folders:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
