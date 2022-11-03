import PATHS from "../config/list_paths.js";
import sqlite3 from 'sqlite3';

// sqlite3.verbose();

export const db = new sqlite3.Database(PATHS.dbPath, sqlite3.OPEN_READWRITE);
