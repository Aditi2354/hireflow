import mongoose from "mongoose";

const DailySchema = new mongoose.Schema(
  {
    userId: { type: String, index: true, required: true },
    dateKey: { type: String, index: true, required: true }, // e.g., "2025-08-19"
    role: String,
    question: String,
    shortAnswer: String
  },
  { timestamps: true }
);

export default mongoose.models.Daily || mongoose.model("Daily", DailySchema);
