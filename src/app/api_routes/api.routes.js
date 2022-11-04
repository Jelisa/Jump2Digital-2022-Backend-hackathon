import {Router} from 'express';
import { generateStatistics, orderbyCreationDate, orderbySize } from '../controller/api.controller.js';

const router = new Router();

router.get('/', (req, res) => {
    console.log('request made')
    res.send('working');
});

// An end point to explain how the API works.
router.get('/API', (req, res) => {
    console.log('request made')
    res.send('working');
});

// Endpoint to return the companies ordered by size
router.get('/API/orderbySize', orderbySize);

// Endpoint to return the companies ordered by creation date
router.get('/API/orderbyCreationDate', orderbyCreationDate);

// Endpoint to return the companies statistics
router.get('/API/statistics', generateStatistics);

export default router