const express = require('express');
const app = express();
const router = require('./routes/router');
const createTable = require('./models/create');

app.set("view engine", "ejs");

app.use(router);


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})