import { Express } from "express"
import express from "express"
import { connectDB } from "./config/db.js"
import "dotenv/config.js"
// connectDB()
import { seedDB } from "./seedDB/seed.js"

seedDB()

const port = process.env.PORT || 5000

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  let prompt: {} = req.body.text
  if (prompt.toString().includes("name")) {
    res.send("Hello my name is bot")
  } else {
    res.send("i dont recognise the command")
  }
  //   res.send("enter name")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
