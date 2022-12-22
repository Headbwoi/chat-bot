var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from "mongoose";
import Data from "../models/dataModel.js";
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
];
export const seedDB = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Data.deleteMany({});
    yield Data.insertMany(dataSet);
});
seedDB().then(() => {
    mongoose.connection.close();
});
