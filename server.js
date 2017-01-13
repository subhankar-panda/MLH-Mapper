//dependencies
var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.redirect('/scrape');
});

app.get('/scrape', function(req, res){

  //All the web scraping magic will happen here
   url = 'https://mlh.io/seasons/na-2017/events';

    // The structure of our request call
    // The first parameter is our URL
    // The callback function takes 3 parameters, an error, response status code and the html

    request(url, function(error, response, html){

        // First we'll check to make sure no errors occurred when making the request

        if(!error){
            // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality

            var $ = cheerio.load(html);
            // Finally, we'll define the variables we're going to capture

            var foobar, release, rating
            var json = { foobar : "", release : "", rating : ""};

            $('.event-392').filter(function(){
            	var data = $(this);
            	foobar = data.children().first().text();
            	json.foobar = foobar;
            	//res.send(data);
            });
        }
    fs.writeFile('./public/js/output.json', JSON.stringify(json, null, 4), function(err){
    	console.log('File successfully written! - Check your project directory for the output.json file');
	})

	res.sendFile( __dirname + "/public/html/index.html");
    });
})


app.listen('3000')

console.log('Server running on 3000');

exports = module.exports = app;