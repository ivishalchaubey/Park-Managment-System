import AdminModel from "../../models/adminModels/adminModel.js";

export const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.send("All Fields are requred..");
    } else {
      const user = await AdminModel.findOne({
        email: email,
        password: password,
      });
      if (user) {
        res.send(`Welcom ${user.name}`);
        console.log("Login..");
      } else {
        res.send("User Not Found..");
      }
    }
  } catch (error) {
    console.log("Error While Login");
    res.send("Error While Login..");
  }
};
