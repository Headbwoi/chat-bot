import mongoose from "mongoose"
import Data from "../models/dataModel.js"
import { dataSet } from "./data.js"
import "dotenv/config.js"

export const seedDB = async () => {
  try {
    await mongoose
      .connect(`${process.env.MONGO_URL}`)
      .then(() => console.log(`Database mongodb🚀🚀 connected `))
    await Data.deleteMany({}).then(() => console.log("seeding database..."))
    await Data.insertMany(dataSet).then(() =>
      console.log("seed completed 😊🚀")
    )
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

seedDB().then(() => {
  mongoose.connection.close()
})
