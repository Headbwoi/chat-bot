import mongoose from "mongoose"
import Data from "../models/dataModel.js"
const dataSet = [
  {
    question:
      "what can you do what do you can what are your capabilities what are you capable of",
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
  {
    question: "Hi Hello Holla wassup hey start begin initiate init",
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
