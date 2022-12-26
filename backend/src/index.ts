import { Express } from "express"
import express from "express"
import { connectDB } from "./config/db.js"
import "dotenv/config.js"
connectDB()
import botRouter from "./routes/botRoute.js"
import { errorHandler } from "./middleware/errorMiddleware.js"
import cors, { CorsOptions } from "cors"

const port = process.env.PORT || 5000

const app: Express = express()

const whitelist = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://dumb-chatbot.vercel.app",
]
const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    //@ts-ignore
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/", botRouter)

app.use(errorHandler)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
