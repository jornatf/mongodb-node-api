const repo = require("../repo/postRepo");

const rejectError = (error) => {
  return error?.message || "Undefined error occured";
};

exports.getPosts = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let posts = await repo.getPosts();
      resolve(posts);
    } catch (error) {
      reject(rejectError(error));
    }
  });
};

exports.getPost = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let post = await repo.getPost(id);
      resolve(post);
    } catch (error) {
      reject(rejectError(error));
    }
  });
};

exports.addPost = async (request) => {
  return new Promise(async (resolve, reject) => {
    try {
      let post = await repo.addPost(request);
      resolve(post);
    } catch (error) {
      reject(rejectError(error));
    }
  });
};

exports.updatePost = async (id, request) => {
  return new Promise(async (resolve, reject) => {
    try {
      let post = await repo.updatePost(id, request);
      let updatedPost = await repo.getPost(id);
      resolve(updatedPost);
    } catch (error) {
      reject(rejectError(error));
    }
  });
};

exports.deletePost = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let post = await repo.deletePost(id);
      let posts = await repo.getPosts();
      resolve(posts);
    } catch (error) {
      reject(rejectError(error));
    }
  });
};
