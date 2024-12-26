const mongoose = require("mongoose");
const Blog = require("../model/Blog");
const logger = require("../logger");
const fetchListOfBlogs = async (req, res,next) => {
    let blogList;
    try {
      blogList = await Blog.find();
    } catch (e) {
       //Return a 500 status code if the app cannot connect to db
       logger.info(JSON.stringify({"statusCode":500,"message": e.message}));
       res.status(500).json({message: "Internal server error cannot connect to db"})
    }
    if (!blogList) {
      return res.status(404).json({ message: "no blogs found" });
    }
    logger.info(JSON.stringify({"responseBody": blogList, "statusCode": 200}));
    res.status(200).json({ blogList });
  };

module.exports = fetchListOfBlogs
