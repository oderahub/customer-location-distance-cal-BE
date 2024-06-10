import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("MongoDB Connected...");
  } catch (error) {
    console.log(`error connecting to database: ${error}`);
    process.exit(1);
  }
};
export default connectDB;
