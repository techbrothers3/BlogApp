const mongoose = require("mongoose");
const express = require("express");
const { username, password } = require("./config.js");
const logger = require("../logger.js");
const app = express();
mongoose.set("strictQuery", false);

mongoose
  .connect(
    `mongodb+srv://${username}:${password}@mydb.nvmdb.mongodb.net/?retryWrites=true&w=majority&appName=myDb?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&socketTimeoutMS=20000`
  )
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((e) => {
    logger.error("Failed to connect", e.message);
  });
