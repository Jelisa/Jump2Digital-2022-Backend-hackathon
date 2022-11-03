// Import the required modules
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import path from 'path';
import express from 'express';
import { argv, env } from 'process';
import APIRoutes from './routes/routes.js'

// A constant to the HTML resources folder
const HTML_RESOURCES = 'static';
// Read the port to listen from or use a default one
const PORT = argv[2] || env.PORT || 4000;
// Read the hostname from the enviroment or use the localhost
const HOSTNAME = env.HOSTNAME || 'localhost';

// Create the APP
const APP = express();

// Indicate where the static resources can be found.
APP.use(express.static(HTML_RESOURCES));

APP.use(express.json());

APP.use(APIRoutes);

// Other addresses rise a 404 error.
APP.use((req, res) => {
    console.log('Ruta incorrecta');
    res.status(404).sendFile(path.join(__dirname,'static', '404.html'));
});
// Start to listen on the specified port.
APP.listen(PORT, () => {console.log(`Listening on http://${HOSTNAME}:${PORT}`);});

