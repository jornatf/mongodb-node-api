const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { routes } = require("./src/routes");
const { runDB } = require("./src/database/mongoose");

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 4000;

app.use(cors());
app.use(express.json());

app.listen(port, (error) => {
  if (!error) {
    runDB();
    return console.log("Server is running on port", port);
  }
  return console.log("error", error);
});

routes(app);
