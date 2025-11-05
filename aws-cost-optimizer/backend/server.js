import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import costRoutes from "./src/routes/costRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.use("/api/costs", costRoutes);

app.listen(5000, () => console.log("Backend running on port 5000"));