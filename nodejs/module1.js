const fs = require("fs");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log(req.headers);
  const fileContent = fs.readFileSync("index.html", "utf-8");
  res.send(fileContent);
  res.end();
});

app.listen(3000);
