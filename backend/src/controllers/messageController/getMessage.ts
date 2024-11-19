import { MessageModel } from "../../database/models/message.model";

export const getMessageController = async (req: any, res: any) => {
  try {
    const user = await MessageModel.find();

    if (!user.length) {
      return res.status(404).json({ message: "No user found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    return;
  }
};
