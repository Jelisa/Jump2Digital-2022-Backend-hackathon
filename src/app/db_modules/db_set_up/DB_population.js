/**
 * A file to process the initial json into the database.
 */
// Required Modules
import fs  from "fs";
import PATHS from '../../../config/list_paths.js';
import { pool } from "../db_config.js";
import { BD_ENV } from '../../../config/env.js';

populatDatabase(BD_ENV.DB_TABLE);

/**
 * A function to populate the database.
 * @param {*} table - String specifying the table name
 * @returns 
 */
async function populatDatabase(table) {
  const initialData = loadJSONFileToObject(PATHS.initialData);
  
  // Populate the database with the initial Data
  for (const company of initialData){
    const {id, website, name, founded, size, locality, region, country, industry, linkedin_url} = company;
    const SQL_INSERT = `INSERT INTO ?? (id, website, name, founded, size, locality, region, country, industry, linkedin_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const [rows] = await pool.query(SQL_INSERT, [table, id, website, name, founded, size, locality, region, country, industry, linkedin_url]);
    if (rows.affectedRows == 0) {
      return "Couldn't insert the data into the database";
    }
  }
  console.log("Json loaded into the table")
  pool.end()
}

function loadJSONFileToObject(filepath){
  /**A function to read and parse JSON files
   * @param {string} filepath - The full path including the name of the file to read.
   * @return  {Object} A object containing the information of the JSON file
   */
  const fileText = fs.readFileSync(filepath, 'latin1');
  return JSON.parse(fileText)
}