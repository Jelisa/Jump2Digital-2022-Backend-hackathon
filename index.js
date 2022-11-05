// Import the required modules

import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import express from 'express';
import { join } from 'path';
import { argv, env } from 'process';
import routes from './src/app/api_routes/api.routes.js';

// A constant to the HTML resources folder
const HTML_RESOURCES = '/src/HTML_resources'
// Read the port to listen from or use a default one
const PORT = argv[2] || env.PORT || 4000;
// Read the hostname from the enviroment or use the localhost
const HOSTNAME = env.HOSTNAME || 'localhost';

// Create the APP
const APP = express();

// Indicate where the static resources can be found.
APP.use(express.static(join(__dirname, HTML_RESOURCES)));

APP.use(routes)

/**  Root Webpage.*/
APP.get('/', (req, res) => {
    console.log('request made')
    res.sendFile(join(__dirname, HTML_RESOURCES, 'index.html'));
});

/**  Explanatori API page*/
APP.get('/API', (req, res) => {
    console.log('request made')
    res.sendFile(join(__dirname, HTML_RESOURCES, 'API.html'));
});

/**  Other addresses rise a 404 error.*/
APP.get('/*', (req, res) => {
    console.log(join(__dirname,'static', '404.html'))
    res.status(404).sendFile(join(__dirname, HTML_RESOURCES, '404.html'));
});

/**  Start to listen on the specified port.*/
APP.listen(PORT, () => {console.log(`Listening on http://${HOSTNAME}:${PORT}`);});
