const express = require('express');
const healthRouter = express.Router();

const {healthCheck} = require('../controller/health-controller');


healthRouter.get("/", healthCheck);

module.exports = healthRouter;
