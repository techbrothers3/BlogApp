const mongoose = require("mongoose");
const Blog = require("../model/Blog");
const logger = require("../logger");

const addNewBlog = async (req, res) => {
    const { title, description } = req.body;
    const currentDate = new Date();
    const newBlog = new Blog({
      title,
      description,
      date: currentDate,
    });
    try {
      await newBlog.save();
    } catch (e) {
      logger.error(e);
      return res.status(500).json({message: e.message})
    }
    try {
      const session = await mongoose.startSession();
      session.startTransaction();
      await newBlog.save(session);
      session.commitTransaction();
    } catch (e) {
      logger.info(JSON.stringify({"statusCode":500, "message":e}));
      return res.status(500).json({ message: e });
    }
    logger.info(JSON.stringify({"statusCode":200,"responseBody":newBlog}));
    return res.status(200).json({ newBlog });
  };
  
module.exports = addNewBlog;