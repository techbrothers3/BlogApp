const mongoose = require("mongoose");
const Blog = require("../model/Blog");
const logger = require("../logger");

const addNewBlog = async (req, res) => {
    const { title, description } = req.body;
    if(title.trim().length === 0 || description.trim().length === 0) {
      logger.info(JSON.stringify({"message": "title or description is empty","statusCode":400}));
      return res.status(400).json({"message": "title or description is empty"})
    }
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
      logger.info(JSON.stringify({"statusCode":500, message: e.message}));
      return res.status(500).json({message: e.message})
    }
    logger.info(JSON.stringify({"statusCode":200,"responseBody":newBlog}));
    return res.status(200).json({ newBlog });
  };
  
module.exports = addNewBlog;
