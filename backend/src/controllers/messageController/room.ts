// const Folder = require("../../database/models/folder");

import FolderModel from "../../database/models/folder";

export const createFolder = async (req: any, res: any) => {
  const { authId, chosenUserId } = req.body;
  if (!authId || !chosenUserId) {
    return res.status(400).json({ message: "Missing required fields." });
  }
  console.log(authId, chosenUserId);

  try {
    const newFolder = new FolderModel({
      users: [authId, chosenUserId], // Example schema assuming you want a folder for both users
    });
    await newFolder.save();
    res.status(201).json({ message: "Folder created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating folder" });
  }
};
