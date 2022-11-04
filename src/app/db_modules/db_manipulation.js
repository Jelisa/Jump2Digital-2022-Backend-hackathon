import { pool } from "./db_config.js";

export const DBcompaniesBySize = async () => {
    /** A function to obtain the companies sorted by size.
     * @return {Object} An object containing the companies sorted by size.
     */
    try{
        const [result] = await pool.query('SELECT * FROM companies ORDER BY size ASC');
        return result;
    }
    catch (err){
        console.log(err)
        return err;
    }
}

export const DBcompaniesByCreationDate = async () => {
    /** A function to obtain the companies sorted by creation year.
     * @return {Object} An object containing the companies sorted by creation year.
     */
    try{
        const [result] = await pool.query('SELECT * FROM companies ORDER BY founded ASC');
        return result;
    }
    catch (err){
        console.log(err)
        return err;
    }
}

export const obtainStatistics = async (category) => {
    /** A function to obtain the number of companies grouped by category.
     * @return {Object} An object containing the companies statistics.
     */

     try{
        const [result] = await pool.query(`SELECT ${category}, count(*) as "number of companies" FROM companies GROUP BY ${category}`);
        // const result2 = await pool.query('SELECT industry, count(*) as "number of companies" FROM companies GROUP BY ?', [category]);
        // console.log("🚀 ~ file: db_manipulation.js ~ line 39 ~ obtainStatistics ~ result2", result2)
        return result;
    }
    catch (err){
        console.log(err)
        return err;
    }

}

// module.exports = {
//     DBcompaniesBySize : DBcompaniesBySize,
//     DBcompaniesByCreationDate : DBcompaniesByCreationDate,
//     obtainStatistics : obtainStatistics
// }