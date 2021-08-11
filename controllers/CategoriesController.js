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
  Category.findAll().then((categories) => {
    res.render("admin/categories/index", { categories: categories });
  });
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

router.post("/categories/delete", (req, res) => {
  var id = req.body.id;
  if (id != undefined) {
    Category.destroy({
      where: {
        id: id,
      },
    }).then(() => {
      res.redirect("/admin/categories");
    });
  } else {
  }
});
module.exports = router;
