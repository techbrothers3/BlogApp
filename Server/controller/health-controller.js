const express = require('express');

const app = express();

const healthCheck = (req, res) => {
    res.status(200).send();
}

module.exports = {healthCheck};
