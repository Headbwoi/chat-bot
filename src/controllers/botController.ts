import Data from "../models/dataModel"
import asyncHandler from "express-async-handler"
import { Request, Response } from "express"

export const chatWithBot = asyncHandler(async (req: Request, res: Response) => {
  let prompt: {} = req.body.text
  if (prompt.toString().includes("name")) {
    res.send("Hello my name is bot")
  } else {
    res.send("i dont recognise the command")
  }
  //   res.send("enter name")
})
