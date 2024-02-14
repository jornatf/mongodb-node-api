import dotenv from "dotenv";

dotenv.config({
  path: ["../.env", process.env.NODE_ENV].join("."),
});

export const { PORT } = process.env;
export const { MONGODB_NAME } = process.env;
export const { MONGODB_URI } = process.env;
