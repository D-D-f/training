const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  const file = fs.readFileSync("./index.html", "utf-8");
  res.send(file);
  res.end();
});

app.listen(3000);
