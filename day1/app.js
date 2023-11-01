const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request);
    console.log(response);
    response.end();
}); // server oluşturmak için


server.listen(3000);//port dinlemek için 