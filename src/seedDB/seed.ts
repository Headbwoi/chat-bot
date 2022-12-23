import mongoose from "mongoose"
import Data from "../models/dataModel.js"
import { dataSet } from "./data.js"

export const seedDB = async () => {
  await Data.deleteMany({})
  await Data.insertMany(dataSet)
}

seedDB().then(() => {
  mongoose.connection.close()
})
