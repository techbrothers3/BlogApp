const express = require("express");
const cors = require("cors");
const logger = require("./logger");
require("./db");
const blogRouter = require("./route/blog-route");
const healthRouter = require("./route/health-route");

const app = express();
app.use(cors());

app.use(express.json());

// middleware to log request body
const logRequestBody = (req, res, next) => {
  logger.info(`Request Body: ${JSON.stringify(req.body)}`);
  next();
};
app.use(logRequestBody);

app.use("/api/blogs", blogRouter);

app.use("/health-check", healthRouter);


app.listen(5000, () => {
  logger.info("Server running on port 5000....");
});
