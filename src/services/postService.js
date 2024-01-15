const { postModel } = require("../models/postModel");

const rejectError = (error) => {
  return error?.message || "Undefined error occured";
};

exports.getPosts = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let posts = await postModel.find({});
      resolve(posts);
    } catch (error) {
      reject(rejectError(error));
    }
  });
};

exports.getPost = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let post = await postModel.findById(id).exec();
      resolve(post);
    } catch (error) {
      reject(rejectError(error));
    }
  });
};

exports.addPost = async (request) => {
  return new Promise(async (resolve, reject) => {
    try {
      let post = await postModel.create(request);
      resolve(post);
    } catch (error) {
      reject(rejectError(error));
    }
  });
};

exports.updatePost = async (id, request) => {
  return new Promise(async (resolve, reject) => {
    try {
      let post = await postModel.findOneAndUpdate({ _id: id }, request);
      let updatedPost = await postModel.findById(id).exec();
      resolve(updatedPost);
    } catch (error) {
      reject(rejectError(error));
    }
  });
};

exports.deletePost = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let post = await postModel.findOneAndDelete({ _id: id });
      let posts = await postModel.find({});
      resolve(posts);
    } catch (error) {
      reject(rejectError(error));
    }
  });
};
