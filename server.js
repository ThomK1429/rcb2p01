// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3300;


// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var ufo=[];

fs.readFile('ufo.json', 'utf8', function (err, data) {
    ufo = JSON.parse(data);
    console.log(ufo);
});

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'index.html'));
})
app.get('/ufoinfo', function(req, res){
	res.sendFile(path.join(__dirname, 'ufoinfo.html'));
})
// Search for Specific ufo (or all ufo) - provides JSON
app.get('/api/:ufo?', function(req, res){

	var chosen = req.params.ufo;

	if(chosen){
		console.log(chosen);

		for (var i=0; i <ufo.length; i++){

			if (chosen == ufo[i].routeName){
				res.json(ufo[i]);
				return;
			}
		}

		res.json(false);
	}

	else{
		res.json(ufo);
	}
})

// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})