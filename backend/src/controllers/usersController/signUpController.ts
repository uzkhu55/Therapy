import { UserModel } from "../../database/models/user.model";

import env from "dotenv";
env.config();

export const signUpController = async (req: any, res: any) => {
  const { username, email, authId, image } = req.body;

  const isUserExist = await UserModel.findOne({ authId });

  if (!isUserExist && authId) {
    const user = await UserModel.create({
      username,
      authId,
      email,
      image,
    });
    console.log("user created");
    res.status(201).send({ message: "User created successfully", data: user });
    return;
  }

  await UserModel.findOneAndUpdate({ authId: authId }, { username: username });
  res.status(200).send("Already registered");
  return;
};
