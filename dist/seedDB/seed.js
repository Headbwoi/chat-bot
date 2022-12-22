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
        question: ["Hi", "Hello", "Holla", "wassup"],
        answer: "Hi, Nice to have you, How can i help you?",
    },
];
let rtvalue = {};
const data = () => {
    dataSet.map((item) => {
        rtvalue = {
            question: item.question,
            answer: item.answer,
        };
    });
};
data();
export const seedDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose
            .connect(`${process.env.MONGO_URL_LOCAL}`)
            .then(() => console.log(`Database mongodb🚀🚀 connected `))
            .then(() => console.log("starting seed of database"))
            .then(() => Data.create(dataSet))
            .then(() => console.log("seeding completed"))
            .finally(() => {
            Data.createCollection(rtvalue);
        });
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
});
