var http = require("http");
var fs = require("fs");
const { error } = require("console");

var server = http.createServer((request, response) => {

  if (request.url == '/') {
    fs.readFile("index.html", (error, html) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    });
  }
  else if (request.url == "/create" && request.method == "POST") {
    fs.appendFile("deneme.txt", "deneme", (err) => {
      if (err) {
        console.error(err);
      }
      else {
        response.statusCode = 302;
        response.setHeader("Location", "/");
        response.end();
      }
    });

   
  }
  else if (request.url == "/create") {
    fs.readFile("create.html", (error, html) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    });
  }


  else {
    fs.readFile("404.html", (error, html) => {
      response.writeHead(404, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    });
  }

});

server.listen(3000);

console.log("node.js server at port 3000");