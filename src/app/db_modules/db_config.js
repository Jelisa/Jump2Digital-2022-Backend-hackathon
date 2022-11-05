// Jelisa Iglesias

import { BD_ENV } from '../../config/env.js';
import {createPool} from 'mysql2/promise';

/**
 * The pool constant that contains the DB connection information
 */
export const pool = createPool({
            host: BD_ENV.DB_HOST,
            port: BD_ENV.DB_PORT,
            user: BD_ENV.DB_USER,
            password: BD_ENV.DB_PWD,
            database: BD_ENV.DB_NAME
});

export const DB_TABLE = BD_ENV.DB_TABLE;