var express = require('express');
var bodyParser = require('body-parser');

//brought fakeData into server module
var fakeData = require('../database-mongo/fakedata');



// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
//var items = require('../database-mysql');
//var items = require('../database-mongo');

var app = express();

//bodyparser ensures that the body is NOT empty - USE BOTH!!!!
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//can't use the same endpoint as a index file
app.get('/getsnakes', function (req, res) {
  res.statusCode = 200;
  //console.log(fakeData);
  res.send(fakeData);
});


//post route to add snakes to our database
//post is working
app.post('/', function (req, res) {
    res.statusCode = 201;
    res.send('Post successful!');
    console.log(req.body);
    //save req.body to database once connected
    //refresh page???
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

