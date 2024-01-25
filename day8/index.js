const express = require('express');
const userRouter = require('./routes/user');
const app = express(); // Express uygulamasını oluşturun
const path = require('path');


app.use("/libs",express.static(path.join(__dirname,'node_modules')));
app.use("/static",express.static( path.join(__dirname, 'public')));

app.use(userRouter); 


app.listen(3000, () => {
    console.log("Port 3000 üzerinde dinleniyor");
});
