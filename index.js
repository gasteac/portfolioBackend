import express from "express";
import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();
import cors from "cors";
import { sendMessage } from "./controllers/message.js";
mongoose.connect(process.env.DB_CNN).then(console.log("Connected to MongoDB")).catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.use(cors('https://gasteac.com'));
app.use("/api/form", sendMessage);
app.listen(process.env.PORT, () => {
  console.log(`Running at port ${process.env.PORT}`);
});
