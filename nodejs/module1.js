const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("app", {
    name: "David",
    authentificated: true,
    friends: 11,
    products: [
      { title: "product1", content: "content1" },
      { title: "product2", content: "content2" },
      { title: "product3", content: "content3" },
    ],
  });
});

app.listen(3000);
// Il faut installer ejs via pnpm
