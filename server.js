const express = require('express');   
const bodyParser = require('body-parser');
const app = express();

//Parser application
app.use(bodyParser.urlencoded({ extended: true }));  //Parse URL-
app.use(bodyParser.json());

//Panggil routes
var routes = require('./routes');
routes(app);

app.listen(3000, () => {
    console.log("Server is running on port 3000)")
});
