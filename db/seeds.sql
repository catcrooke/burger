 -- In this file, write insert queries to populate the burgers table with at least three entries.
 CREATE TABLE burgers (
	item_id INTEGER (20) AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR (500) NOT NULL,
	devoured BOOLEAN NOT NULL,
	date TIMESTAMP NOT NULL,
	primary key (item_id)
); 