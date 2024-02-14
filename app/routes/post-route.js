import {
  getPosts,
  getPost,
  addPost,
  updatePost,
  deletePost,
} from "../services/post-service";

module.exports = (server) => {
  server
    .get("/posts", (_, res) => {
      getPosts()
        .then((result) => res.json(result))
        .catch((error) => res.json({ message: error }).status(500));
    })

    .get("/posts/:id", (req, res) => {
      getPost(req.params.id)
        .then((result) => res.json(result))
        .catch((error) => res.json({ message: error }).status(500));
    })

    .post("/posts/create", (req, res) => {
      addPost(req.body)
        .then((result) => res.json(result).status(201))
        .catch((error) => res.json({ message: error }).status(500));
    })

    .put("/posts/:id/update", (req, res) => {
      updatePost(req.params.id, req.body)
        .then((result) => res.json(result))
        .catch((error) => res.json({ message: error }).status(500));
    })

    .delete("/posts/:id", (req, res) => {
      deletePost(req.params.id)
        .then((result) => res.json(result))
        .catch((error) => res.json({ message: error }).status(500));
    });
};
