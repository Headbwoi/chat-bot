import mongoose from "mongoose"
import Data from "../models/dataModel.js"
const dataSet = [
  {
    question: ["Hi", "Hello", "Holla", "wassup"],
    answer: "Hi, Nice to have you, How can i help you?",
  },
  {
    question: ["Hi", "Hello", "Holla", "wassup"],
    answer: "Hi, Nice to have you, How can i help you?",
  },
  {
    question: ["Hi", "Hello", "Holla", "wassup"],
    answer: "Hi, Nice to have you, How can i help you?",
  },
  {
    question: ["Hi", "Hello", "Holla", "wassup"],
    answer: "Hi, Nice to have you, How can i help you?",
  },
]

export const seedDB = async () => {
  await Data.deleteMany({})
  await Data.insertMany(dataSet)
}

seedDB().then(() => {
  mongoose.connection.close()
})
