import FolderModel from "../../database/models/folder";
import { UserModel } from "../../database/models/user.model";

export const getMyConversations = async (req: any, res: any) => {
  const { myId } = req.params;

  const mongoUser = await UserModel.findOne({ authId: myId });

  const conversations = await FolderModel.find({
    $or: [
      {
        userOne: mongoUser?._id,
      },
      {
        userTwo: mongoUser?._id,
      },
    ],
  });

  const names = await Promise.all(
    conversations.map(async (el) => {
      if (mongoUser?._id != el.userOne) {
        const user = await UserModel.findById({ _id: el.userOne });
        return user?.username;
      }

      const user = await UserModel.findById({ _id: el.userTwo });
      return user?.username;
    })
  );

  res.status(200).json(names);
};
