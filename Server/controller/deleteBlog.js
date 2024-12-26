const mongoose = require("mongoose");
const Blog = require("../model/Blog");
const logger = require("../logger");

const deleteBlog = async (req, res) => {
  const id = req.params.id;
  const ObjectId = require("mongoose").Types.ObjectId;
  if (!ObjectId.isValid(id) || id.length === 0) {
    logger.info(JSON.stringify({ statusCode: 400, message: "invalid id" }));

    return res.status(400).json({ message: "invalid id" });
  }
  try {
    const findCurrentBlog = await Blog.findByIdAndDelete(id);
    if (!findCurrentBlog) {
      logger.info(
        JSON.stringify({ statusCode: 404, message: "blog not found" })
      );

      return res.status(404).json({ message: "blog not found" });
    }
    logger.info(
      JSON.stringify({ statusCode: 200, message: "successfully deleted" })
    );
    return res.status(200).json({ message: "successfully deleted" });
  } catch (e) {
    logger.error(e.message);
    logger.info(JSON.stringify({ statusCode: 500 }));
    return res
      .status(500)
      .json({ message: "unable to delete pls provide the valid id" });
  }
};

module.exports = deleteBlog;
