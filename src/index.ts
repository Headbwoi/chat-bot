import { Express } from "express"
import express from "express"
import { connectDB } from "./config/db.js"
import "dotenv/config.js"
connectDB()
import { seedDB } from "./seedDB/seed.js"
import botRouter from "./routes/botRoute.js"

// seedDB()

const port = process.env.PORT || 5000

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/", botRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
