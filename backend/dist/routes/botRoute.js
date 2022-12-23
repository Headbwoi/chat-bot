import express from "express";
import { chatWithBot } from "../controllers/botController.js";
const router = express.Router();
router.get("/", chatWithBot);
export default router;
