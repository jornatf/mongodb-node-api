const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const { ATLAS_URI, DB_NAME } = process.env;

exports.runDB = async () => {
  try {
    await mongoose.connect(ATLAS_URI, { dbName: DB_NAME });
  } catch (error) {
    console.log("Connection failed", error);
  }
};
