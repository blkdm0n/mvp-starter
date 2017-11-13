var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mysql/index');

//brought fakeData into server module
var fakeData = require('../database-mongo/fakedata');



// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var items = require('../database-mysql');

var app = express();

//bodyparser ensures that the body is NOT empty - USE BOTH!!!!
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//can't use the same endpoint as a STATIC file DERPPPPPP!!!!!!
app.get('/getsnakes', function (req, res) {
  //console.log(fakeData);
  res.send(fakeData);
});


//post route to add snakes to our database
//post is working
app.post('/', function (req, res) {
    res.statusCode = 201;
    res.send('Post successful!');
    
    var species = req.body.species;
    var photoLink = req.body.photoLink;
    var biteProtocol = req.body.biteProtocol;
    var notes = req.body.notes;
    
    //data parse for tables
    var addedSnake = {
      species: species,
      photoLink: photoLink,
      biteProtocol: biteProtocol,
      notes: notes
    };
    
    db.insertOne(addedSnake, (err) => {
      if (err) {
        console.log('error');
      } else {
        console.log('data sent');
      }
    })
    
    //save req.body to database once connected
    //refresh page???
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

