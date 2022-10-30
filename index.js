const express = require('express');
const path = require('path');

const APP = express();

const PORT = 3000;

APP.use(express.static('static'));

APP.get('/', (req, res) => {
    console.log('reuest made')
    res.send('working');
});

APP.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname,'static', '404.html'));
});

APP.listen(PORT, () => {console.log(`Listening on http://localhost:${PORT}`);});
