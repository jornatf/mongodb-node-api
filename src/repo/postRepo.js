const { postModel } = require("../models/postModel");

exports.getPosts = async () => {
  return await postModel.find({});
};

exports.getPost = async (id) => {
  return await postModel.findById(id).exec();
};

exports.addPost = async (request) => {
  return await postModel.create(request);
};

exports.updatePost = async (id, request) => {
  return await postModel.findOneAndUpdate({ _id: id }, request);
};

exports.deletePost = async (id) => {
  return await postModel.findOneAndDelete({ _id: id });
};
