import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("MongoDB connected succesfully");
  } catch (err) {
    console.error("MongoDB connection Error", err);
    process.exit(1);
  }
};

export default connectDB;
