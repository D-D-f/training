const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  res.writeHead(200, {
    "content-types": "text/html",
  });
  const fileContent = fs.readFileSync("./index.html", "utf-8");
  const template = fileContent.replace("{{name}}", "David");
  res.end(template);
});

server.listen(8080);
