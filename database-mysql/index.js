var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'snakes'
});


var selectAll = function(callback) {
  //connect to database
  connection.connect(function(err) {
    if(err) throw err;
    console.log('db connected');
  });

  //SELECT all from snakelist
  connection.query('SELECT * FROM snakelist', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });

  //end the connection
  connection.end();
};

var insertOne = function(addedSnake, callback) {

  //INSERT into snakelist
  connection.query(`INSERT INTO snakelist (species, photoLink, biteProtocol, notes) VALUES (${addedSnake.species}, ${addedSnake.photoLink},${addedSnake.biteProtocol},${addedSnake.notes})`,
   addedSnake, function (err, result) {
    if (err) {
      console.log('Error adding data to database', err);
    }
  });
}
  
   

module.exports = {
  insertOne: insertOne,
  selectAll: selectAll
};