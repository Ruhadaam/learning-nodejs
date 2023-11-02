const http = require('http');
const routes = require('./routes');



const server = http.createServer(routes);

server.listen(3000);
console.log("this server is using 3000 port");