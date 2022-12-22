import mongoose, { Document } from "mongoose"

export interface IData extends Document {
  question: string
  answer: string
}

const dataSchema = new mongoose.Schema<IData>({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
})

export default mongoose.model<IData>("Bot", dataSchema)
