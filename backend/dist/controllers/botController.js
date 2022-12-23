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
    const query = yield Data.find({ $text: { $search: `${prompt}` } })
        .sort({ score: { $meta: "textScore" } })
        .limit(1);
    const data = query.map((item) => item.answer);
    const queryResponse = data.toString();
    if (queryResponse) {
        res.status(200).json(queryResponse);
    }
    else {
        res.status(400);
        throw new Error("Sorry master i'm dumb and didn't recognise the command. 😣😔. Please be more Specific");
    }
}));
