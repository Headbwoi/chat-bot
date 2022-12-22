import Data from "../models/dataModel.js"
import asyncHandler from "express-async-handler"
import { Request, Response } from "express"

export const chatWithBot = asyncHandler(async (req: Request, res: Response) => {
  let prompt: string = req.body.text
  const dataSet = await Data.find({})

  const data = Object.values(dataSet)

  let result = data.forEach((item) => {
    res.json(prompt)
  })
  //   res.json(prompt)

  res.json(result)

  //   res.json(data.values())
  //   data.forEach((element) => {
  //     combinedObj[element.id] = { ...element }
  //     res.json(combinedObj)
  //   })

  const obj = () => {
    // Array.from(dataSet).map((item) => {
    //   //   let ques: string = dataSet[2].question
    //   res.status(200).json(ques)
    //   if (ques.includes(prompt)) {
    //     res.status(200).json({ message: item.answer })
    //   }
    //   res.status(400).json({ message: "i dont recognise the command" })
    // })
  }

  obj()
})
