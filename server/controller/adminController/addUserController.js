import AdminModel from "../../models/adminModels/adminModel.js";

export const Adduser = async (req, res) => {
  try {
    const data = AdminModel(req.body);
    await data.save();
    res.send({ success: "User Added Successfully.." });
  } catch (error) {
    res.send({ error: "Error While Adding User..." });
  }
};
