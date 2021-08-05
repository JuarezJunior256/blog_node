const express = require("express");
const slugify = require("slugify");
const Category = require("../models/Category");
const router = express.Router();

// ROUTES VIEWS
//render register page
router.get("/admin/categories/new", (req, res) => {
  res.render("admin/categories/new");
});

//render page list categories
router.get("/admin/categories", (req, res) => {
  res.render("admin/categories/index");
});

//ROUTES API
//route for register
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
