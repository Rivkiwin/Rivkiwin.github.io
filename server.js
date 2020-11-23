const express = require('express');
const app = express();
const path = require('path'); 
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
var port=Number(process.env.PORT || 4001);
app.use(bodyParser.urlencoded({ extended: true }));
const readUrl=require('./readURL');
const { json } = require('body-parser');
app.set("view options", {layout: false});
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.listen(port, function () {
    console.log("my server is listening to port 4001");
    
});
app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname+'/index.html'));
  });
app.use('/readUrl',readUrl);

