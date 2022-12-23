import { Express } from "express"
import express from "express"
import { connectDB } from "./config/db.js"
import "dotenv/config.js"
connectDB()
import botRouter from "./routes/botRoute.js"
import { errorHandler } from "./middleware/errorMiddleware.js"
import cors from "cors"

const port = process.env.PORT || 5000

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
)

app.use("/", botRouter)

app.use(errorHandler)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))