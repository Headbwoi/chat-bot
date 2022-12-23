import { Router } from "express"
import express from "express"
import { chatWithBot } from "../controllers/botController.js"

const router: Router = express.Router()

router.post("/", chatWithBot)

export default router
