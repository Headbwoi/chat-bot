import mongoose from "mongoose"
import { seedDB } from "../seedDB/seed.js"

export const connectDB = async () => {
  try {
    await mongoose
      .connect(`${process.env.MONGO_URL}`)
      .then(() => console.log(`Database mongodb🚀🚀 connected `))
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

seedDB()
