const http = require('http');

const server = http.createServer((request,response) => {
console.log(request.url, request.method);
console.log(response.statusCode);


/* 
response.setHeader("Content-Type" , "text/plain");
response.statusCode=200;
response.statusMessage ="OK";
response.write("Ana Sayfa");

 */

//istenen veri html olarak gönderilecekse content type text/html olmalı.
response.setHeader("Content-Type" , "text/html");
response.write("<h1>Ana Sayfa</h1>");
response.end();


});

server.listen(3000);
console.log("listening 3000 port");

