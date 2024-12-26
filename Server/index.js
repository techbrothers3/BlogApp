const express = require("express");
const cors = require("cors");
const logger = require("./logger");
require("dotenv").config();
require("./db");
const blogRouter = require("./route/blog-route");
const getRouter = require("./route/get-route");
const healthRouter = require("./route/health-route");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.use(express.json());

// middleware to log request body
const logRequestBody = (req, res, next) => {
  logger.info(`Request Body: ${JSON.stringify(req.body)}`);
  next();
};
app.use(logRequestBody);

app.use("/api/blogs", getRouter);
app.use("/api/blog", blogRouter);

app.use("/health-check", healthRouter);


app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
