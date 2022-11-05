import {createConnection} from 'mysql2/promise';
import { BD_ENV } from '../../../config/env.js';

createDatabase();

async function createDatabase (){
    const db_connection = await createConnection({
        host: BD_ENV.DB_HOST, // HOST NAME
        port: BD_ENV.DB_PORT,
        user: BD_ENV.DB_USER, // USER NAME
        password: BD_ENV.DB_PWD // DATABASE PASSWORD
    });
    await db_connection.query('DROP SCHEMA IF EXISTS ' +BD_ENV.DB_NAME);
    console.log(958, db_connection.format('CREATE SCHEMA ' + BD_ENV.DB_NAME));
    await db_connection.execute('CREATE SCHEMA ' + BD_ENV.DB_NAME);
    db_connection.destroy()
    console.log("Database created");
    createTable();
}

async function createTable(){
    // Create a new database connection
    const db_connection = await createConnection({
        host: BD_ENV.DB_HOST, // HOST NAME
        port: BD_ENV.DB_PORT, // PORT TO CONNECT
        user: BD_ENV.DB_USER, // USER NAME
        password:BD_ENV.DB_PWD, // DATABASE PASSWORD
        database: BD_ENV.DB_NAME, // The name of the database
    });
    let sql; // A variable to store the SQL queries. 
    sql = db_connection.format('DROP TABLE IF EXISTS ??', [BD_ENV.DB_TABLE]);
    await db_connection.execute(sql);
    sql = db_connection.format(`CREATE TABLE IF NOT EXISTS ?? (id VARCHAR(255) primary key, website VARCHAR(255) NOT NULL, name VARCHAR(100), founded INT(4), size VARCHAR(25) NOT NULL, locality VARCHAR(100), region VARCHAR(100), country VARCHAR(100), industry VARCHAR(100), linkedin_url VARCHAR(250) NOT NULL
    )`, [BD_ENV.DB_TABLE]);
    await db_connection.execute(sql);
    
    // Read and Load the required JSON files
    db_connection.destroy();
    console.log("Table created");
}
