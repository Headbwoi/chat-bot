import mongoose from "mongoose";
const dataSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
});
dataSchema.index({ question: "text" });
export default mongoose.model("Bot", dataSchema);
