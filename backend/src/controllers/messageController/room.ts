// const Folder = require("../../database/models/folder");

import FolderModel from "../../database/models/folder";

export const createFolder = async (req: any, res: any) => {
  const { authId, chosenUserId } = req.body;
  if (!authId || !chosenUserId) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  try {
    const newFolder = new FolderModel({
      userOne: authId,
      userTwo: chosenUserId,
    });

    await newFolder.save();
    res.status(201).json({ message: "Folder created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating folder" });
  }
};
