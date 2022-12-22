import Data from "../models/dataModel.js"
import asyncHandler from "express-async-handler"
import { Request, Response } from "express"

export const chatWithBot = asyncHandler(async (req: Request, res: Response) => {
  let prompt: string = req.body.text
  const dataSet = await Data.find({ $text: { $search: `${prompt}` } })
    .sort({ score: { $meta: "textScore" } })
    .limit(1)

  const data = Object.values(dataSet)

  const ans = data.map((item) => item.answer)
  const answerResponse = ans.toString()
  if (answerResponse) {
    res.status(200).json(answerResponse)
  } else {
    res.status(400)
    throw new Error("Sorry master i'm dumb and didn't recognise the command")
  }
})
