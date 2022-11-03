/**
 * A file to process the initial json into the database.
 */
// Required Modules
// const fs =  require ( "fs");
// const sqlite3 =  require ("sqlite3");
// const path =  require ("path");

// const ENV = require("./env.js");
import fs  from "fs";
import sqlite3 from "sqlite3";

// Read and Load the required JSON files
const initialData = loadJSONFileToObject('./data/companies.json')
// console.log(initialData );
const db = new sqlite3.Database('./data/companies.db', sqlite3.OPEN_READWRITE);
// async function createAndPopulateDB (){
  db.serialize(() => {
    db.run('DROP TABLE IF EXISTS companies_information');
    db.run(`CREATE TABLE IF NOT EXISTS companies_information (
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
    )`);
    console.log('h', db.get("SELECT * from companies_information"));
    const stmt = db.prepare("INSERT INTO companies_information VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    initialData.forEach(company =>{
      const {id, website, name, founded, size, locality, region, country, industry, linkedin_url} = company
      stmt.run([id, website, name, founded, size, locality, region, country, industry, linkedin_url]);
      // function (err, row) {if(err){console.log(5,company); throw err}} 
    });
    stmt.finalize();
    db.each("SELECT id FROM companies_information", (err, row) => {
        console.log(3, row);
    });
  });
// }

console.log('pato');
db.close();

function loadJSONFileToObject(filepath){
  /**A function to read and parse JSON files
   * @param {string} filepath - The full path including the name of the file to read.
   * @return  {Object} A object containing the information of the JSON file
   */
  const fileText = fs.readFileSync(filepath, 'utf-8');
  return JSON.parse(fileText)
}