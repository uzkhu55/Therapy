import { userDetailModel } from "../../database/models/usedetail.model";

export const createUserDetail = async (req: any, res: any) => {
  const { formData, form, authId } = req.body;

  const {
    gender,
    age,
    relationshipStatus,
    prevTherapy,
    lookingFor,
    expectations,
  } = formData;

  try {
    const existingUser = await userDetailModel.findOne({ authId });

    if (existingUser) {
      return res.status(400).json({ message: "User details already exist." });
    }

    const newUserDetail = await userDetailModel.create({
      gender,
      age,
      relationshipStatus,
      prevTherapy,
      lookingFor,
      expectations,
      form: true,
      authId,
    });

    res.status(200).json({ message: "User details created successfully" });
  } catch (error) {
    console.error("Error saving user details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
