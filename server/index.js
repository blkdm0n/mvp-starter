var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
//var items = require('../database-mysql');
//var items = require('../database-mongo');

var app = express();


//bodyparser ensures that the body is NOT empty - USE BOTH!!!!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
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

