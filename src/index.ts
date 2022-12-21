import { Express } from "express"
import express from "express"
import { connectDB } from "./config/db.js"
connectDB()
const port = process.env.PORT || 5000
const app: Express = express()
app.get("/", (req, res) => res.send("Hello World!"))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
