const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const conneticon = require("./database/database");
const connection = require("./database/database");

// import controllers
const CategoriesController = require("./controllers/CategoriesController");
const ArticlesController = require("./controllers/ArticlesController");

const Article = require("./models/Article");
const Category = require("./models/Category");

// connection databse
connection
  .authenticate()
  .then(() => {
    console.log("connection okay");
  })
  .catch((error) => {
    console.log(error);
  });

// view engine
app.set("view engine", "ejs");

// static
app.use(express.static("public"));

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/", CategoriesController);
app.use("/", ArticlesController);

app.listen(8080, () => {
  console.log("Servidor  online");
});
