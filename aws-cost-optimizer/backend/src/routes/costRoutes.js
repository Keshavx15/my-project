import express from "express";
import { getCosts } from "../controllers/costController.js";

const router = express.Router();
router.get("/", getCosts);
export default router;