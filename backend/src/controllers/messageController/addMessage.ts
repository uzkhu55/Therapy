import { MessageModel } from "../../database/models/message.model";

export const addMessage = async (req: any, res: any) => {
  const { inputValue, author } = req.body;

  // try {
  //   const existMessage = await MessageModel.findOne({ author });
  //   console.log(existMessage?.author);

  //   if (!existMessage) {
  //     const message = await MessageModel.create({
  //       content: [inputValue],
  //       author,
  //       timeStamp: new Date(),
  //       isRead: false,
  //     });

  //     res.status(201).send({ message: "Message added" });
  //     return;
  //   } else {
  //     await MessageModel.updateOne(
  //       { author },
  //       { $push: { content: inputValue } }
  //     );

  //     res.status(200).send("Message added to existing author");
  //     return;
  //   }
  // } catch (error) {
  //   console.error(error);
  //   res.status(500);
  // }
};
