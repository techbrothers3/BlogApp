const mongoose = require("mongoose");
const Blog = require("../model/Blog");
const logger = require("../logger");

const updateBlog = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  let currentBlogToUpdate;
  try {
    currentBlogToUpdate = await Blog.findByIdAndUpdate(id, {
      title,
      description,
    });
  } catch (e) {
    logger.error(e);
    logger.info(JSON.stringify({ "statusCode": 500 }));
    return res
      .status(500)
      .json({ message: "something went wrong while updating pls try again" });
  }
  if (!currentBlogToUpdate) {
    logger.info(JSON.stringify({ "statusCode": 500 }));
    return res.status(500).json({ message: "unable to update" });
  }
  logger.info(
    JSON.stringify({ "responseBody": currentBlogToUpdate, "statusCode": 200 })
  );
  return res.status(200).json({ currentBlogToUpdate });
};
module.exports = updateBlog;
