import express from "express";
import dotenv from "dotenv";

dotenv.config();
import cors from "cors";
import messageRouter from "./routes/message.js";
import { sequelize } from "./models/Message.js";

sequelize.authenticate()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.log("PostgreSQL connection error:", err));

const app = express();
app.use(express.json());
app.use(cors({
  origin: ['https://gasteac.com', 'http://localhost:5173'],
  credentials: true
}));
app.use("/api/form", messageRouter);
app.listen(process.env.PORT, () => {
  console.log(`Running at port ${process.env.PORT}`);
});
