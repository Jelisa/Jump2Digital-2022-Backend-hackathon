/**
 * A file to process the initial json into the database.
 */
// Required Modules
const fs = require("fs");
const mariadb = require("mariadb");
const ENV = require("./env.js")

// Read and Load the required JSON files
const initialData = loadJSONFileToObject('./data/companies.json')

function prepareInsertStatement(statement){
  return `INSERT INTO ${statement.table} (${statement.columns}) VALUES (${statement.values})`;
}

function processInitialData(initialData){
  /**
   *  
   */
  let elementsToInsert = ''
  initialData.map((element) => {
    let columns = [];
    let values =  [];
    for ([key, value] of Object.entries(element)) {
      columns.push(key);
      values.push(value);
    }
    const newElement = {table: 'companies', columns: columns.join(", "), values: values.join(", ")}
    elementsToInsert += prepareInsertStatement(newElement) + '\n';
  })
  return elementsToInsert
}

// Declare async function to make queries
async function connection(pool, query){
  /**
   * 
   */
  let conn;
  try {
    // conn = await pool.getConnection();
    // console.log(3);
    rows = await pool.query(query);
  }
  catch (error) {
    console.log("Failed to connect and perform", query);
    console.log(error);
  }
  finally {
    if (conn){
      return conn.release();}
  }
}

// async function to call the queries an process the data and finally close the pool.
async function companies(){
  /**
   * 
   */
  const pool = mariadb.createPool({
    host: ENV.MDB_HOST,
    port: ENV.MDB_PORT,
    user: ENV.MDB_USER,
    password: ENV.MDB_PASS,
    database: "companies",
    connectTimeout : 10000,
    trace: true
  });
  console.log('here');
  await connection(pool, "SELECT 1 as val");
  // Create table;
  // const tableCreation = `CREATE TABLE IF NOT EXISTS companies_information (
  //         id VARCHAR(255) primary key,
  //         website VARCHAR(255) NOT NULL,
  //         name VARCHAR(100),
  //         founded INT(4),
  //         size VARCHAR(25) NOT NULL,
  //         locality VARCHAR(100),
  //         region VARCHAR(100),
  //         country VARCHAR(100),
  //         industry VARCHAR(100),
  //         linkedin_url VARCHAR(250) NOT NULL)`;
  // console.log('here');
  // await connection(pool, tableCreation);
  // // Populate the table
  // console.log('here2');
  // let populateDBQuery = processInitialData(initialData)
  // await connection(pool, populateDBQuery);
  pool.end();
}

companies();

function loadJSONFileToObject(filepath){
  /**A function to read and parse JSON files
   * @param {string} filepath - The full path including the name of the file to read.
   * @return  {Object} A object containing the information of the JSON file
   */
  const fileText = fs.readFileSync(filepath, 'utf-8');
  return JSON.parse(fileText)
}