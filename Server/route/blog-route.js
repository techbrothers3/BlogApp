const express = require("express");
const blogRouter = express.Router();
const fetchListOfBlogs = require('../controller/fetchListOfBlogs');
const addNewBlog = require('../controller/addNewBlog');
const deleteBlog = require('../controller/deleteBlog');
const updateBlog = require('../controller/updateBlog');

blogRouter.get("/", fetchListOfBlogs);
blogRouter.post("/add", addNewBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.delete("/delete/:id", deleteBlog);

module.exports = blogRouter;
