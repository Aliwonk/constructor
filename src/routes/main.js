const express = require("express");
const mainRoute = express.Router();

mainRoute.get("/", (req, res) => {
    res.send("Hello");
});

module.exports = mainRoute;