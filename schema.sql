DROP DATABASE IF EXISTS snakes;
CREATE DATABASE snakes;
USE snakes;
CREATE TABLE snakelist (
  id int NOT NULL AUTO_INCREMENT,
  species varchar(50),
  photoLink varchar(200),
  biteProtocol varchar(200),
  notes varchar(200),
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
