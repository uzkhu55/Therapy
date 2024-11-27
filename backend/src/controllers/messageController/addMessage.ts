import FolderModel from "../../database/models/folder";
import { MessageModel } from "../../database/models/message.model";
import { UserModel } from "../../database/models/user.model";

export const addMessage = async (req: any, res: any) => {
  const { inputValue, author, chosenUserId } = req.body;

  try {
    // Find the sender based on the author's `authId`
    const sender = await UserModel.findOne({ authId: author });
    if (!sender) {
      res.status(404).json({ error: "Sender not found" });
      return;
    }

    // Find an existing conversation where either `userOne` or `userTwo` matches `author` and `chosenUserId`
    let conversation = await FolderModel.findOne({
      $or: [
        { userOne: sender._id, userTwo: chosenUserId },
        { userOne: chosenUserId, userTwo: sender._id },
      ],
    });

    // Create a new conversation if none exists
    if (!conversation) {
      conversation = await FolderModel.create({
        userOne: sender._id,
        userTwo: chosenUserId,
      });
    }

    // Add the new message to the conversation
    await MessageModel.create({
      senderId: sender._id,
      content: inputValue,
      conversationId: conversation._id,
      timeStamp: new Date(),
      isRead: false,
    });

    res.send("Message successfully added");
  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Failed to add message", details: error.message });
  }
};
