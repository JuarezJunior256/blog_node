const express = require("express");
const slugify = require("slugify");
const Category = require("../models/Category");
const router = express.Router();

// routes views
router.get("/admin/categories/new", (req, res) => {
  res.render("admin/categories/new");
});

//routes api
router.post("/categories/save", (req, res) => {
  var title = req.body.title;
  if (title != undefined) {
    Category.create({
      title: title,
      slug: slugify(title),
    }).then(() => {
      res.redirect("/");
    });
  } else {
    res.redirect("/admin/categories/new");
  }
});

module.exports = router;
