const express = require('express');

const app = express();

app.use(function (req,res) {
    res.end("hello dünya");
    
});

app.use("blog/:blogid", (req,res) => {
    res.send("blog detay sayfası");

});

app.use("blog", (req,res) => {
    res.send("blog sayfası");

});

app.use("/", (req,res) => {
    res.send("blog detay sayfası");

});

app.listen(3000, function(){
console.log("listening on port 3000");

});