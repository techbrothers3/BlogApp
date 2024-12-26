const express = require("express");
const blogRouter = express.Router();
const addNewBlog = require('../controller/addNewBlog');
const deleteBlog = require('../controller/deleteBlog');
const updateBlog = require('../controller/updateBlog');

blogRouter.post("/", addNewBlog);
blogRouter.put("/:id", updateBlog);
blogRouter.delete("/:id", deleteBlog);

module.exports = blogRouter;
