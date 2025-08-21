import mongoose from "mongoose";

const AttemptSchema = new mongoose.Schema(
  {
    userId: { type: String, index: true, required: true },
    role: String,
    question: String,
    shortAnswer: String,     // model/fallback short answer
    userAnswer: String,      // (optional) if you later collect user answers
    correct: { type: Boolean, default: null }, // future use
    saved: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.models.Attempt || mongoose.model("Attempt", AttemptSchema);
