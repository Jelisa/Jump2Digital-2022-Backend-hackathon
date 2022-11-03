/* This file creates the database and the table following the json structure.
    An improvement to be made is to normalize the DB i.e: having the size locality, region, country in a separate table to avoid repetitions.
*/

-- drop if exists companies;
-- CREATE SCHEMA companies;

USE hackathon;

DROP TABLE IF EXISTS companies;
CREATE TABLE IF NOT EXISTS companies (
    id VARCHAR(255) primary key,
    website VARCHAR(255) NOT NULL,
    name VARCHAR(100),
    founded INT(4),
    size VARCHAR(25) NOT NULL,
    locality VARCHAR(100),
    region VARCHAR(100),
    country VARCHAR(100),
    industry VARCHAR(100),
    linkedin_url VARCHAR(250) NOT NULL
);