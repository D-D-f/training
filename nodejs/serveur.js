const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  res.writeHead(200, {
    "content-types": "text/html",
  });
  const url = req.url;
  let fileContent;
  if (url === "/home") {
    res.writeHead(200, {
      "content-types": "text/html",
    });
    fileContent = fs.readFileSync("./index.html", "utf-8");
  } else if (url === "/info") {
    res.writeHead(200, {
      "content-types": "text/html",
    });
    fileContent = fs.readFileSync("./info.html", "utf-8");
  } else {
    res.writeHead(404, {
      "content-types": "text/html",
    });
    fileContent = fs.readFileSync("./notfound.html", "utf-8");
  }
  res.end(fileContent);
});

server.listen(8080);
