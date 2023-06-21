// Le middleware peut s'éxecuter pour chaque requete ou alors pour une method ou pour un chemin
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const middleware = (req, res, next) => {
  console.log("coucou");
  next();
};
app.use(middleware); // je peux ajouter ou enlever en premier parametre un chemin
// app.get('*", middleware) cela ciblera toutes les requetes get
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/index", (req, res) => {
  res.render("ok");
});

app.listen(3000);
