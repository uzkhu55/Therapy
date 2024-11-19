import { connect } from "mongoose";
import env from "dotenv";
env.config();

const URL: string = process.env.MONGO || "";
export const connectDataBase = async () => {
  try {
    await connect(URL);
    console.log("db connected");
  } catch (err) {
    console.log("DataBase not connect");
  }
};
