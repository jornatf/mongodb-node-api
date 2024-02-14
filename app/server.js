import express from "express";
import cors from "cors";
import { glob } from "glob";

import Database from "./database";
import { MONGODB_NAME, MONGODB_URI, PORT } from "./environment";

const server = express();
const port = parseInt(PORT) || 4000;

server.use(cors());
server.use(express.json());

const globRoutes = () =>
  new Promise((resolve, reject) => {
    glob("app/routes/*.js")
      .then((routes) => {
        // retrieve all routes
        for (let route of routes) {
          route = route.replace("app/", "./");
          require(route)(server);
        }
        // route error 404
        server.get("*", (req, res) =>
          res.json({ message: "404 Endpoint not exists" }).status(404)
        );
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });

export default () => {
  return Promise.all([globRoutes()])
    .then(() => {
      server.listen(port, (error) => {
        if (error) {
          throw error;
        }
        console.log(`🚀 Server is running on port ${port}`);
        Database.connect(MONGODB_URI, { dbName: MONGODB_NAME });
      });
    })
    .catch((err) => {
      Database.close();
      Promise.reject(err.message || err);
    });
};
