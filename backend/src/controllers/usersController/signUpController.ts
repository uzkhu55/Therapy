import { UserModel } from "../../database/models/user.model";
import env from "dotenv";
env.config();

export const signUpController = async (req: any, res: any) => {
  const { username, email, authId, image } = req.body;

  const isUserExist = await UserModel.findOne({ authId });

  if (!isUserExist) {
    const user = await UserModel.create({
      username,
      authId,
      email,
      image,
    });

    res.status(201).send({ message: "User created successfully", data: user });
    return;
  }

  await UserModel.findOneAndUpdate(
    { authId: authId },
    { username, image },
    { new: true }
  );

  res.status(200).send("Profile updated successfully");
  return;
};
