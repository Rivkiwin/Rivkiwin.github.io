const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
const readUrl=require('./readURL');
const { json } = require('body-parser');
const PORT = process.env.PORT || 4001
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.listen(PORT, function () {
    console.log("my server is listening to port 4001");
    
});
app.use('/readUrl',readUrl);
