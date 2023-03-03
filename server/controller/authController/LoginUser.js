import AdminModel from "../../models/adminModels/adminModel.js";

export const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.send({ error: "All Fields are requred.." });
    } else {
      const user = await AdminModel.findOne({
        email: email,
        password: password,
      });
      if (user) {
        res.send({ success: `Welcom ${user.name}` });
      } else {
        res.send({ error: "User Not Found.." });
      }
    }
  } catch (error) {
    console.log({ error: "Error While Login" });
    res.send({ error: "Error While Login.." });
  }
};
