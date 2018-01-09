-- Create the database to store the personal account information
DROP DATEBASE IF EXIST acct_workouts_db;
-- creats the database to store the personal accts of each user 
CREATE DATEBASE acct_workouts_db;

USE acct_workouts_db;
	-- once the account informaiton is stored link the accounts and personal workouts

-- stores the personal acct information
CREATE TABLE person_acct(
	id_acct INTEGER NOT NULL AUTO_INCREMENT,
	username VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL,
	user_city VARCHAR(255) NOT NULL,
	user_zip INTEGER NOT NULL,
	acct_creation TIMESTAMP NOT NULL,


	PRIMARY KEY (id_acct)
);

-- link the personal acct table with the workout table
		-- this table will track the exercise that the user puts in 
CREATE TABLE workouts(
	id_workout INTEGER NOT NULL AUTO_INCREMENT,
	id_acct INTEGER,
	exercise_1 VARCHAR(255) NOT NULL,
	exercise_2 VARCHAR(255),
	exercise_3 VARCHAR(255),
	exercise_4 VARCHAR(255),	
	exercise_5 VARCHAR(255),
	exercise_6 VARCHAR(255),
	exercise_7 VARCHAR(255),
	exercise_8 VARCHAR(255),
	exercise_9 VARCHAR(255),
	exercise_10 VARCHAR(255),

	PRIMARY KEY (id_workout),
	-- call from the tale above to get the foreign key
	FOREIGN KEY (id_acct) REFERENCES person_acct(id_acct)
); 

-- table to save all the exercises 
CREATE TABLE exercises(
	id_exercise INTEGER NOT NULL AUTO_INCREMENT,
	exercise_name VARCHAR(255) NOT NULL,
	exercise_discription VARCHAR(255),
	muscle_group VARCHAR(255) NOT NULL,

	PRIMARY KEY (id_exercise)
);