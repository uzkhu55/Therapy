import { UserModel } from "../../database/models/user.model";

export const isThrepapist = async (req: any, res: any) => {
  const { authId } = req.body;
  try {
    await UserModel.findOneAndUpdate({ authId }, { isSpecialist: true });
    res.status(200).send("succes");
  } catch (err) {
    res.status(200).send("fail");
  }
};
