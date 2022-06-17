const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use('/application',require('../routes/login.js'));

module.exports=app;