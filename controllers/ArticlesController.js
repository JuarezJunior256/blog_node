const express = require("express");
const route = express.Router();

route.get("/articles", (req, res) => {
  res.send("teste articles");
});

module.exports = route;
