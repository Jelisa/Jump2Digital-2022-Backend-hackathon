import { DBcompaniesBySize, DBcompaniesByCreationDate, obtainStatistics } from '../app/app.js';

router.get('/', (req, res) => {
    console.log('request made')
    res.send('working');
});

// An end point to explain how the API works.
router.get('/API', (req, res) => {
    console.log('request made')
    res.send('working');
});
import {Router} from 'express';

const router = new Router();

// Endpoint to return the companies ordered by size
router.get('/API/orderbySize', (req, res) => {
    results = DBcompaniesBySize();
    res.json(results);
});

// Endpoint to return the companies ordered by creation date
router.get('/API/orderbyCreationDate', (req, res) => {
    results = DBcompaniesByCreationDate();
    res.json(results);
});

// Endpoint to return the companies statistics
router.get('/API/statistics', (req, res) => {
    results = obtainStatistics();
    res.json(results);
});

export default router