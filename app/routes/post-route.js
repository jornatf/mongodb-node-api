import {
  getPosts,
  getPost,
  addPost,
  updatePost,
  deletePost,
} from "../services/post-service";
import { httpServerError, httpSuccess } from "../utils/http-response";

module.exports = (server) => {
  server
    .get("/posts", (_, res) => {
      getPosts()
        .then((result) => httpSuccess(res, result))
        .catch((error) => httpServerError(res, error));
    })

    .get("/posts/:id", (req, res) => {
      getPost(req.params.id)
        .then((result) => httpSuccess(res, result))
        .catch((error) => httpServerError(res, error));
    })

    .post("/posts/create", (req, res) => {
      addPost(req.body)
        .then((result) => httpCreated(res, result))
        .catch((error) => httpServerError(res, error));
    })

    .put("/posts/:id/update", (req, res) => {
      updatePost(req.params.id, req.body)
        .then((result) => httpSuccess(res, result))
        .catch((error) => httpServerError(res, error));
    })

    .delete("/posts/:id", (req, res) => {
      deletePost(req.params.id)
        .then((result) => httpSuccess(res, result))
        .catch((error) => httpServerError(res, error));
    });
};
