import { theraDetailModel } from "../../database/models/theradetail.model";
import { UserModel } from "../../database/models/user.model";

export const getSpecialistsController = async (req: any, res: any) => {
  try {
    // Step 1: Find all users who are specialists
    const specialists = await UserModel.find({ isSpecialist: true });

    if (!specialists.length) {
      return res.status(404).json({ message: "No specialists found" });
    }

    const specialistsWithDetails = await Promise.all(
      specialists.map(async (specialist) => {
        // Query the TheraDetailModel using the specialist's authId
        const theraDetail = await theraDetailModel.findOne({
          authId: specialist.authId,
        });

        return {
          ...specialist.toObject(), // Convert the Mongoose document to a plain object
          theraDetail: theraDetail || null, // Add the TheraDetail data to the response
        };
      })
    );

    res.status(200).json(specialistsWithDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
