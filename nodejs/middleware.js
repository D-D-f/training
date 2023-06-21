// Le middleware peut s'éxecuter pour chaque requete ou alors pour une method ou pour un chemin
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const getUser = (req, res, next) => {
  req.user = {
    name: "toto",
    authenticated: false,
  };
  next();
};

const isAuthenticated = (req, res, next) => {
  if (req.user.authenticated) {
    console.log("user ok");
    next();
  } else {
    res.sendStatus(403);
  }
};

app.use("/index", getUser, isAuthenticated);

// je peux ajouter ou enlever en premier parametre un chemin
// app.get('*", middleware) cela ciblera toutes les requetes get

app.get("/index", (req, res) => {
  res.render("ok");
});

app.get("/index", (req, res) => {
  res.sendStatus(403);
});

app.listen(3000);
