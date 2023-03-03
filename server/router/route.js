import express from "express";
import { HomePage } from "../controller/HomeController.js";
import { Adduser } from "../controller/adminController/addUserController.js";
import { ViewUsers } from "../controller/adminController/viewUserController.js";
import { LoginUser } from "../controller/authController/LoginUser.js";
const Route = express.Router();

Route.get("/", HomePage);

// Admin Routes..

Route.post("/adduser", Adduser);

Route.get("/viewusers", ViewUsers);

// Login User

Route.post("/login", LoginUser);

export default Route;
