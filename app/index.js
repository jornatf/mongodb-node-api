import Server from "./server";

Server()
  .then()
  .catch((err) => console.log("Someting went wrong!", err));
