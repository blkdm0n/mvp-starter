DROP DATABASE snakes;
CREATE DATABASE snakes;
USE snakes;
CREATE TABLE snakelist (
  ID INT NOT NULL, 
  species VARCHAR(255) NOT NULL, 
  photoLink VARCHAR(255) NOT NULL, 
  biteProtocol VARCHAR(255) NOT NULL, 
  notes VARCHAR(255) NOT NULL
);

-- connect to mysql server 
-- > mysql -u root -p;
-- import sql file:
-- > CREATE DATABASE dbName
-- > USE dbName
-- > SOURCE sqlFile.sql




