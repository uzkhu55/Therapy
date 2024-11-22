import FolderModel from "../../database/models/folder";
import { MessageModel } from "../../database/models/message.model";
import { UserModel } from "../../database/models/user.model";

export const addMessage = async (req: any, res: any) => {
  const { inputValue, author, chosenUserId } = req.body;
  const sender = await UserModel.findOne({ authId: author });

  try {
    const existingConvo = await FolderModel.findOne({
      $and: [{ userOne: author }, { userTwo: chosenUserId }],
    });

    if (!existingConvo) {
      const conversation = await FolderModel.create({
        userOne: sender?._id,
        userTwo: chosenUserId,
      });

      await MessageModel.create({
        senderId: sender?._id,
        content: inputValue,
        conversationId: conversation._id,
        timeStamp: new Date(),
        isRead: false,
      });

      res.send("Success");
      return;
    }

    await MessageModel.create({
      senderId: sender?._id,
      content: inputValue,
      conversationId: existingConvo._id,
      timeStamp: new Date(),
      isRead: false,
    });

    res.send("Success");
  } catch (error) {
    res.status(500);
  }
};
