import { MessageModel } from "../../database/models/message.model";

export const getMessageController = async (req: any, res: any) => {
  const { conversationId } = req.params;

  try {
    const usersChats = await MessageModel.find({ conversationId }).populate(
      "senderId"
    );

    if (!usersChats.length) {
      return res.status(200).json([{ content: [] }]);
    }

    res.status(200).json(usersChats);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    return;
  }
};
