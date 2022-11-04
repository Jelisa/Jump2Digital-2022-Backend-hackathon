// Import the required modules
import express from 'express';
import { join } from 'path';
import { argv, env } from 'process';
import { DBcompaniesBySize, DBcompaniesByCreationDate, obtainStatistics } from './app/app.js';

// A constant to the HTML resources folder
const HTML_RESOURCES = 'static'
// Read the port to listen from or use a default one
const PORT = argv[2] || env.PORT || 4000;
// Read the hostname from the enviroment or use the localhost
const HOSTNAME = env.HOSTNAME || 'localhost';

// Create the APP
const APP = express();

// Indicate where the static resources can be found.
APP.use(express.static(HTML_RESOURCES));

APP.get('/', (req, res) => {
    console.log('request made')
    res.send('working');
});

// An end point to explain how the API works.
APP.get('/API', (req, res) => {
    console.log('request made')
    res.send('working');
});

// Endpoint to return the companies ordered by size
APP.get('/API/orderbySize', (req, res) => {
    results = DBcompaniesBySize();
    res.json(results);
});

// Endpoint to return the companies ordered by creation date
APP.get('/API/orderbyCreationDate', (req, res) => {
    results = DBcompaniesByCreationDate();
    res.json(results);
});

// Endpoint to return the companies statistics
APP.get('/API/statistics', (req, res) => {
    results = obtainStatistics();
    res.json(results);
});

// Other addresses rise a 404 error.
APP.get('/*', (req, res) => {
    console.log(join(__dirname,'static', '404.html'))
    res.status(404).sendFile(join(__dirname,'static', '404.html'));
});

// Start to listen on the specified port.
APP.listen(PORT, () => {console.log(`Listening on http://${HOSTNAME}:${PORT}`);});
