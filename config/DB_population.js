/**
 * A file to process the initial json into the database.
 */
// Required Modules
import fs  from "fs";
import PATHS from './list_paths.js';
import { pool } from "../app/db_config.js";

const initialData = loadJSONFileToObject(PATHS.initialData);

console.log(initialData.length);

// Populate the database with the initial Data
initialData.forEach(async company => {
    const {id, website, name, founded, size, locality, region, country, industry, linkedin_url} = company;
    const SQL_INSERT = `INSERT INTO companies (id, website, name, founded, size, locality, region, country, industry, linkedin_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const [rows] = await pool.query(SQL_INSERT, [id, website, name, founded, size, locality, region, country, industry, linkedin_url]);
    console.log(rows);
    if (rows.affectedRows == 0) {
      return "Couldn't insert the data into the database";
    }
});
// pool.end()

function loadJSONFileToObject(filepath){
  /**A function to read and parse JSON files
   * @param {string} filepath - The full path including the name of the file to read.
   * @return  {Object} A object containing the information of the JSON file
   */
  const fileText = fs.readFileSync(filepath, 'latin1');
  return JSON.parse(fileText)
}