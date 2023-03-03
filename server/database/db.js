import mongoose from "mongoose";

const configDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/PMS");
    console.log("Database Connected..");
  } catch (error) {
    console.log("Error While Connecting Database..");
  }
};

export default configDB;
