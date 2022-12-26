import Bot, { dataSchema } from "../models/dataModel.js"
import asyncHandler from "express-async-handler"
import { Request, Response } from "express"

dataSchema.index({ question: "text" })

export const chatWithBot = asyncHandler(async (req: Request, res: Response) => {
  let prompt: string = req.body.text
  const query = await Bot.find({ $text: { $search: `${prompt}` } })
    .sort({ score: { $meta: "textScore" } })
    .limit(1)

  const data: string[] = query.map((item) => item.answer)
  const queryResponse: string = data.toString()
  if (queryResponse) {
    res.status(200).json(queryResponse)
  } else {
    res.status(400)
    throw new Error(
      "Sorry master i'm dumb and didn't recognise the command. 😣😔. Please be more Specific"
    )
  }
})
