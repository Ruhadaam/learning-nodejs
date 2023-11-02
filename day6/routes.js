
const fs = require('fs');
const routeHandler = (request, response) => {

    if (request.url == "/") {
        fs.readFile("index.html", (error, html) => {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(html);
            response.end();



        })
    }
    else if (request.url == "/register" && request.method == "POST") {
        const data = [];
        request.on("data", (chunk) => {
            data.push(chunk);

        });
        request.on("end", () => {

            const result = Buffer.concat(data).toString();
            const parsedData = result.split("=")[1];
            fs.appendFile("data.txt", parsedData, (error) => {
                if (error) {
                    console.log(error);
                }
                else {
                    response.statusCode = 302;
                    response.setHeader("Location", "/");
                    response.end();
                }
            })

        });






    }

    else if (request.url == "/register") {

        fs.readFile("register.html", (error, html) => {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(html);
            response.end();
        })


    }
}

module.exports =routeHandler;