import mongoose, { Mongoose } from "mongoose"

export const connectDB = async () => {
  try {
    const conn: void | typeof import("mongoose") = await mongoose
      .connect(process.env.MONGO_URL)
      .then(() => console.log(`Database mongodb🚀🚀 connected ${conn}`))
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
