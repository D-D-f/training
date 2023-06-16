const path = require("path");
const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("views engine", "pug");

app.use("/foo", (req, res, next) => {});

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000);
