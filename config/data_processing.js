/**
 * A file to process the initial json into the database.
 */
// Required Modules
const fs = require("fs");
const mariadb = require("mariadb");
const ENV = require("./env.js")
// console.log("🚀 ~ file: data_processing.js ~ line 8 ~ ENV", ENV)

// Read the JSON information
// const initialData = JSON.parse(fs.readFileSync('./data/companies.json', 'utf-8'));
// Import the required JSON files
const initialData = loadJSONFileToObject('./data/companies.json')
console.log("🚀 ~ file: data_processing.js ~ line 12 ~ initialData", initialData[0])

console.log(Object.keys(initialData[0]))

// initialData.forEach((element) => insertIntoDB(element))



function prepareInsertStatement(statement){
  return `INSERT INTO ${statement.table} (${statement.columns}) VALUES (${statement.values})`;
}

function processInitialData(initialData){
  // console.log("🚀 ~ file: data_processing.js ~ line 13 ~ initialData", initialData)
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
processInitialData(initialData.slice(0,2));

// Declare async function to make queries
async function connection(pool){
  let conn;
  try {
    conn = await pool.getConnection();
    rows = await conn.in("SELECT * from companies_information");
    console.log(34);  
  }
  catch (error) {
    console.log(error);
  }
  finally {
    console.log('here');
    if (conn){
      console.log('pato');
      return conn.end();}
  }
}

// async function to call the queries an process the data and finally close the pool.
async function companies(){
  const pool = mariadb.createPool({
    host: ENV.MDB_HOST,
    port: ENV.MDB_PORT,
    user: ENV.MDB_USER,
    password: ENV.MDB_PASS,
    database: "companies",
    trace: true
  });
  console.log(pool);
  await connection(pool);
  pool.end();
}

// companies();

function loadJSONFileToObject(filepath){
  /**A function to read and parse JSON files
   * @param {string} filepath - The full path including the name of the file to read.
   * @return  {Object} A object containing the information of the JSON file
   */
  const fileText = fs.readFileSync(filepath, 'utf-8');
  return JSON.parse(fileText)
}