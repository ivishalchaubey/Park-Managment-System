import AdminModel from "../../models/adminModels/adminModel.js";

export const ViewUsers = async (req, res) => {
  try {
    const users = await AdminModel.find({});
    res.send(users);
  } catch (error) {
    res.send("Error While View Data..");
  }
};
