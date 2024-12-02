import { theraDetailModel } from "../../database/models/theradetail.model";

export const getTheraDetailById = async (req: any, res: any) => {
  const { authId } = req.params;
  try {
    const user = await theraDetailModel.findOne({ authId });

    if (!user) {
      return res.status(200).json({ message: "No user found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    return;
  }
};
