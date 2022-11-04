import {createConnection} from 'mysql2/promise';

createDatabase();
createTable();

async function createDatabase (){
    const db_connection = await createConnection({
        host:'localhost', // HOST NAME
        port: 3306,
        user:'root', // USER NAME
        password:'' // DATABASE PASSWORD
    });
    await db_connection.query(`DROP SCHEMA IF EXISTS hackathon`);
    await db_connection.execute(`CREATE SCHEMA hackathon`);
    db_connection.destroy()
    console.log("Database created");
}

async function createTable(){
    // Create a new database connection
    const db_connection = await createConnection({
        host:'localhost', // HOST NAME
        port: 3306,
        user:'root', // USER NAME
        password:'', // DATABASE PASSWORD
        database: 'hackathon', // The name of the database
    });
    await db_connection.execute(`DROP TABLE IF EXISTS companies`);
    await db_connection.execute(`CREATE TABLE IF NOT EXISTS companies (
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
    
    // Read and Load the required JSON files
    db_connection.destroy();
    console.log("Table created");
}
