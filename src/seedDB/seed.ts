import mongoose from "mongoose"
import Data from "../models/dataModel.js"
const dataSet = [
  {
    question: "Hi Hello Holla wassup",
    answer: "Hi, Nice to have you, How can i help you?",
  },
  {
    question: "what can you do",
    answer: "You can ask me about BUK",
  },
  {
    question: "where is fcsit",
    answer: "go f yourself",
  },
  {
    question: "who is the vc",
    answer: "sagir something i dunno",
  },
]

export const seedDB = async () => {
  await Data.deleteMany({})
  await Data.insertMany(dataSet)
}

seedDB().then(() => {
  mongoose.connection.close()
})
