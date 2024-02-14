import { model, Schema } from "mongoose";

const schema = new Schema({
  title: { type: String, required: "Title is required" },
  content: { type: String, required: "Content is required" },
  created_at: { type: Date, default: Date.now },
});

export default model("posts", schema);
