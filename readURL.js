const open = require('open');
var request = require('request');
var cheerio = require('cheerio');
const express = require('express');
const router = express.Router();
var searchTerm = 'screen+scraping';

router.post('/findLinks', async(req, res)=> {
  var data = req.body
    var url = data.url + searchTerm;
    var linkshref = [];
    console.log(url)
    request(url,  function(err, resp, body){
      $ = cheerio.load(body);
      links = $('a'); //jquery get all hyperlinks
     $(links).each (function (i, link) {
        console.log($(link).attr('href'));
        linkshref.push($(link).attr('href'));
        console.log(linkshref.length);

      });
      console.log(linkshref.length)
      res.send(linkshref);
    });
    
})
router.post('/find&open', async(req, res)=> {
  var data = req.body
    var url = data.url + searchTerm;
    var linkshref = [];
    console.log(url)
    request(url,  function(err, resp, body){
      $ = cheerio.load(body);
      links = $('a'); //jquery get all hyperlinks
     $(links).each (function (i, link) {

         open($(link).attr('href'), { wait: true });
        console.log($(link).attr('href'));
        linkshref.push($(link).attr('href'));
        console.log(linkshref.length);
     
        // });
      });
      // return linkshref
      console.log(linkshref.length)
      res.send(linkshref);
    });
    
})
module.exports = router;