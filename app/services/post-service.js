import Model from "../models/post-model";
import { rejectError } from "../utils/reject-error";

export const getPosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      let posts = await Model.find({});
      resolve(posts);
    } catch (error) {
      reject(rejectError(error));
    }
  });

export const getPost = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      let post = await Model.findById(id).exec();
      resolve(post);
    } catch (error) {
      reject(rejectError(error));
    }
  });

export const addPost = (request) =>
  new Promise(async (resolve, reject) => {
    try {
      let post = await Model.create(request);
      resolve(post);
    } catch (error) {
      reject(rejectError(error));
    }
  });

export const updatePost = (id, request) =>
  new Promise(async (resolve, reject) => {
    try {
      await Model.findOneAndUpdate({ _id: id }, request);
      let updatedPost = await Model.findById(id).exec();
      resolve(updatedPost);
    } catch (error) {
      reject(rejectError(error));
    }
  });

export const deletePost = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      await Model.findOneAndDelete({ _id: id });
      let posts = await Model.find({});
      resolve(posts);
    } catch (error) {
      reject(rejectError(error));
    }
  });
