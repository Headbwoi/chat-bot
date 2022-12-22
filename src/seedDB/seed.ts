import mongoose from "mongoose"
import Data from "../models/dataModel.js"
const dataSet = [
  {
    question: ["Hi", "Hello", "Holla", "wassup"],
    answer: "Hi, Nice to have you, How can i help you?",
  },
]

let rtvalue: {} = {}
const data = () => {
  dataSet.map((item) => {
    rtvalue = {
      question: item.question,
      answer: item.answer,
    }
  })
}

data()

export const seedDB = async () => {
  try {
    await mongoose
      .connect(`${process.env.MONGO_URL_LOCAL}`)
      .then(() => console.log(`Database mongodb🚀🚀 connected `))
      .then(() => console.log("starting seed of database"))
      .then(() => Data.create(dataSet))
      .then(() => console.log("seeding completed"))
      .finally(() => {
        Data.createCollection(rtvalue)
      })
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
