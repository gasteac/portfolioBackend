import express from "express";
import dotenv from "dotenv";

dotenv.config();
import cors from "cors";
import messageRouter from "./routes/message.js";
import { sequelize } from "./models/Message.js";

// Eliminar la conexión de Mongoose
// mongoose.connect(process.env.DB_CNN).then(console.log("Connected to MongoDB")).catch((err) => console.log(err));

// Probar conexión a PostgreSQL
sequelize.authenticate()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.log("PostgreSQL connection error:", err));

const app = express();
app.use(express.json());
app.use(cors({
  origin: ['https://gasteac.com'],
  credentials: true
}));
app.use("/api/form", messageRouter);
app.listen(process.env.PORT, () => {
  console.log(`Running at port ${process.env.PORT}`);
});
