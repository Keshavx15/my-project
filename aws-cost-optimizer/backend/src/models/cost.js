import mongoose from "mongoose";

const costSchema = new mongoose.Schema({
  account: String,
  service: String,
  region: String,
  amount: Number,
  date: Date
});

export default mongoose.model("Cost", costSchema);