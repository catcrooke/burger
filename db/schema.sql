-- In the db folder, create a file named schema.sql. Write SQL queries this file that do the following:

-- Create the burgers_db.
CREATE DATABASE burgers_db;
-- Switch to or use the burgers_db.
use burgers_db;

CREATE TABLE burgers (
	item_id INTEGER (20) AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR (500) NOT NULL,
	devoured BOOLEAN NOT NULL,
	date TIMESTAMP NOT NULL,
	primary key (item_id)
); 


-- Create the burgers_db.
CREATE DATABASE burgers_db;
-- Switch to or use the burgers_db.
use burgers_db;

