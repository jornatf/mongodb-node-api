import { mongoose } from "mongoose";

module.exports.DB = mongoose;

module.exports.connect = (uri, options) => {
  console.log("MongoDB connecting...");

  mongoose
    .connect(uri, options)
    .then()
    .catch((err) => {
      console.error("MongoDB connection failed!", err.message);
    });

  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected!");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected!", new Date());
  });
};

module.exports.close = () => mongoose.connection.close();
