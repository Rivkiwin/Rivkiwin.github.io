const open = require('open');
var request = require('request');
var cheerio = require('cheerio');
var searchTerm = 'screen+scraping';
var url = 'https://stackoverflow.com/questions/28269973/node-js-error-cannot-find-module-request' + searchTerm;
request(url, function(err, resp, body){
  $ = cheerio.load(body);
  links = $('a'); //jquery get all hyperlinks
  $(links).each(function(i, link){
    (async () => {
      await open($(link).attr('href'), {wait: true});
    })();
    console.log(
      // $(link).text())
       $(link).attr('href'));
  });
});
