const express = require("express");
const getRouter = express.Router();
const fetchListOfBlogs = require('../controller/fetchListOfBlogs');


getRouter.get("/", fetchListOfBlogs);

module.exports = getRouter;
