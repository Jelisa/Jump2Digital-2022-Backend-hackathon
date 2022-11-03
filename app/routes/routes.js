import {Router} from 'express';
import {DBcompaniesBySize, DBcompaniesByCreationDate, obtainStatistics} from '../dbManipulation/app.js';

const ROUTER = Router();

ROUTER.get('/', (req, res) => {
    console.log('request made')
    res.send('working');
});

// An end point to explain how the API works.
ROUTER.get('/API', (req, res) => {
    console.log('request made')
    res.send('patata');
});

// Endpoint to return the companies ordered by size
// ROUTER.get('/API/orderbySize', (req, res) => {
//     // console.log(DBcompaniesBySize());
//     let results = DBcompaniesBySize();
//     console.log("🚀 ~ file: routes.js ~ line 21 ~ ROUTER.get ~ results", results)
//     res.json(results);
// });
ROUTER.get('/API/orderbySize', DBcompaniesBySize);



// Endpoint to return the companies ordered by creation date
ROUTER.get('/API/orderbyCreationDate', (req, res) => {
    results = DBcompaniesByCreationDate();
    res.json(results);
});

// Endpoint to return the companies statistics
ROUTER.get('/API/statistics', (req, res) => {
    results = obtainStatistics();
    res.json(results);
});

export default ROUTER;
