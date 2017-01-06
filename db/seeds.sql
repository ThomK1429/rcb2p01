INSERT INTO ufosightings
(sight_date, sight_time, city, state, shape, duration, summary, posted )
VALUES

('2016.01.01', '11:00', 'Maplewood', 'NJ' , 'cigar', '15 minutes', 'it flew back and forth across the sky', '2017.01.01'),	
('2016.01.02', '12:00', 'Wayne', 'NJ' , 'cigar', '2 minutes', 'it flew up and down in the sky', '2017.01.02'),
('2016.01.03', '09:00', 'Harrisburg', 'PA' , 'cigar', '15 minutes', 'it flew back and forth across the sky', '2017.01.01');	


SHOW DATABASES LIKE 'ufosightings_db';
SHOW COLUMNS from ufosightings;
SELECT * from ufosightings;
SELECT state from ufosightings;