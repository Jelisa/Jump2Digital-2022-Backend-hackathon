import {Router} from 'express';
import { generateStatistics, orderbyCreationDate, orderbySize } from '../controller/companies.controller.js';

const router = new Router();

// Endpoint to return the companies ordered by size
router.get('/API/orderBySize', orderbySize);

// Endpoint to return the companies ordered by creation date
router.get('/API/orderByCreationDate', orderbyCreationDate);

// Endpoint to return the companies statistics
router.get('/API/statistics', generateStatistics);

export default router