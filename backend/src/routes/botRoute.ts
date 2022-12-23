import { Router } from "express"
import express from "express"
import { chatWithBot } from "../controllers/botController.js"

const router: Router = express.Router()

router.get("/", chatWithBot)

export default router
