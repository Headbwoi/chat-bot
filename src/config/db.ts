import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    await mongoose
      .connect(`${process.env.MONGO_URL_LOCAL}`)
      .then(() => console.log(`Database mongodb🚀🚀 connected `))
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
