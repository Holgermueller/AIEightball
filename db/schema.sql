### Create schema for burgers_db
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    burger_id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(200),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (burger_id)
);