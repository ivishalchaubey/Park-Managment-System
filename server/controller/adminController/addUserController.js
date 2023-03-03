import AdminModel from "../../models/adminModels/adminModel.js";

export const Adduser = async (req, res) => {
  try {
    const data = AdminModel(req.body);
    await data.save();
    res.send("User Added Successfully..");
  } catch (error) {
    console.log("Error While Adding User...");
    res.send("Error While Adding User...");
  }
};
