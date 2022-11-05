// Jelisa Iglesias

/** This module takes care of the database queries and comunnications.*/

import { pool } from "./db_config.js";

/** A function to obtain the companies sorted by size.
 * @param {String} table -  This provides a the table to look for in the DB.
 * @return {Object} An object containing the companies sorted by size.
 */
 export async function  DBcompaniesBySize (table) {
    try{
        const [result] = await pool.query('SELECT * FROM ?? ORDER BY size ASC', [table]);
        return result;
    }
    catch (err){
        console.log(err)
        return err;
    }
}

/** A function to obtain the companies sorted by creation year.
 * @param {String} table -  This provides a the table to look for in the DB.
 * @return {Object} An object containing the companies sorted by creation year.
 */
export async function DBcompaniesByCreationDate (table) {
    try{
        const [result] = await pool.query('SELECT * FROM ?? ORDER BY founded ASC', [table]);
        return result;
    }
    catch (err){
        console.log(err)
        return err;
    }
}

/** A function to obtain the number of companies grouped by subcategory inside a category (column).
 * @param {String} table -  This provides a the table to look for in the DB.
 * @param {String} category -  This provides a the column name to look for and group by in the database table.
 * @return {Object} An object containing the companies statistics.
 */
 export async function  obtainStatistics (table, category) {
     try{
        const [result] = await pool.query('SELECT ??, count(*) as "number of companies" FROM ?? GROUP BY ??', [category, table, category]);
        return result;
    }
    catch (err){
        console.log(err)
        return err;
    }

}
