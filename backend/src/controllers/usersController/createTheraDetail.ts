import { theraDetailModel } from "../../database/models/theradetail.model";

export const createTheraDetail = async (req: any, res: any) => {
  const { formData, form, authId } = req.body;

  const { name, gender, age, year, zuvluguu, expectations } = formData;
  try {
    const existingUser = await theraDetailModel.findOne({ authId });
    if (existingUser) {
      return res.status(400).json({ message: "User details already exist." });
    }

    await theraDetailModel.create({
      name,
      gender,
      age,
      year,
      zuvluguu,
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
