// Le middleware peut s'éxecuter pour chaque requete ou alors pour une fonction ou pour un chemin
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const middleware = (req, res, next) => {
  console.log("coucou");
  next();
};
app.use("/index", middleware);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/index", (req, res) => {
  res.render("ok");
});

app.listen(3000);
