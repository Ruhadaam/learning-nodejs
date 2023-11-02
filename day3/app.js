
const http = require('http');

const server = http.createServer((request, response) => {
  if (request.url == "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(`
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Anasayfa</title>
      </head>
      <body>
        <h1>Ana Sayfa</h1>
      </body>
      </html>`);
  } else if (request.url == "/deneme") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(`
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Deneme Sayfası</title>
      </head>
      <body>
        <h1>Deneme</h1>
      </body>
      </html>`);
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.write(`
      <html>
      <head>
        <meta charset="UTF-8">
        <title>404 Not Found</title>
      </head>
      <body>
        <h1>Böyle bir sayfa bulunamadı.</h1>
      </body>
      </html>
    `);
  }

  response.end();
});

server.listen(3000);
console.log("Listening on port 3000");
