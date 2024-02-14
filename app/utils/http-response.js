import httpCode from "../const/http-code.json";

export const httpSuccess = (res, data = null) => {
  return res
    .json({
      code: 200,
      message: httpCode["200"],
      data,
    })
    .status(200);
};

export const httpCreated = (res, data = null) => {
  return res
    .json({
      code: 201,
      message: httpCode["201"],
      data,
    })
    .status(201);
};

export const httpNotFound = (res) => {
  return res
    .json({
      code: 404,
      message: httpCode["404"],
    })
    .status(404);
};

export const httpServerError = (res, message = null) => {
  return res
    .json({
      code: 500,
      message: message || httpCode["500"],
    })
    .status(500);
};
