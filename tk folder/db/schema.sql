SHOW DATABASES;

drop DATABASE ufosightings_db;

CREATE DATABASE ufosightings_db;

SHOW DATABASES LIKE 'ufosightings_db';

USE ufosightings_db;

DROP TABLES ufosightings;

CREATE TABLE ufosightings
(
sight_date					date,
sight_time					time,		
city								varchar(25),
state 							varchar(2),
shape								varchar(25), 
duration						varchar(25), 
summary							varchar(80), 
posted							date 

);


SHOW DATABASES LIKE 'ufosightings_db';
SHOW COLUMNS from ufosightings;
SELECT * from ufosightings;
