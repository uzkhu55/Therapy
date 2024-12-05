import { connect } from "mongoose";
import env from "dotenv";
env.config();

const URL: string = process.env.MONGO || "";
export const connectDataBase = async () => {
  try {
    await connect(URL);
  } catch (err) {}
};
