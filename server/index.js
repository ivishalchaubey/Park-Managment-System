import express from "express";
import configDB from "./database/db.js";
import Route from "./router/route.js";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());
app.use("/", Route);

configDB();
app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
