const service = require("../services/postService");

exports.postRoute = (app) => {
  app
    .get("/posts", async (_, res) => {
      await service
        .getPosts()
        .then((result) => res.json(result))
        .catch((error) => res.json({ error }).status(500));
    })
    .get("/posts/:id", async (req, res) => {
      const { id } = req.params;
      await service
        .getPost(id)
        .then((result) => res.json(result))
        .catch((error) => res.json({ error }).status(500));
    })
    .post("/posts/create", async (req, res) => {
      const { body } = req;
      await service
        .addPost(body)
        .then((result) => res.json(result).status(201))
        .catch((error) => res.json({ error }).status(500));
    })
    .put("/posts/:id/update", async (req, res) => {
      const {
        params: { id },
        body,
      } = req;
      await service
        .updatePost(id, body)
        .then((result) => res.json(result))
        .catch((error) => res.json({ error }).status(500));
    })
    .delete("/posts/:id", async (req, res) => {
      const { id } = req.params;
      await service
        .deletePost(id)
        .then((result) => res.json(result))
        .catch((error) => res.json({ error }).status(500));
    });
};
