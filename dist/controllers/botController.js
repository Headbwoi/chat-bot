var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Data from "../models/dataModel.js";
import asyncHandler from "express-async-handler";
export const chatWithBot = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let prompt = req.body.text;
    const dataSet = yield Data.find({});
    const data = Object.values(dataSet);
    let result = data.forEach((item) => {
        res.json(prompt);
    });
    //   res.json(prompt)
    res.json(result);
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
    };
    obj();
}));
