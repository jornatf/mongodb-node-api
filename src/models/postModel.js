const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    title: { type: String, required: "Title is required" },
    content: { type: String, required: "Content is required" },
  },
  {
    versionKey: false,
  }
);

exports.postModel = model("posts", schema);
