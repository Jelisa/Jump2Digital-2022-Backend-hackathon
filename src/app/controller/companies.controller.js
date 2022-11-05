import { DBcompaniesBySize, DBcompaniesByCreationDate, obtainStatistics } from '../db_modules/db_manipulation.js';
import { DB_TABLE } from '../db_modules/db_config.js';

/**
 * A function to obtain the companies information sorted by size.
 * It needs to be asynchronous because DBcompaniesBySize is asynchronous.
 * @param {*} req - The request object, representing the HTTP request
 * @param {*} res - The response object, represents the HTTP response
 * @returns 
 */
export async function orderbySize(req, res) {
    let results = await DBcompaniesBySize(DB_TABLE);
    if (results.length === 0){
        return res.send("No company has been found.")
    }
    sortSizes(results)
    res.json(results);
}

/**
 * A function to obtain the companies information sorted by founding date.
 * It needs to be asynchronous because DBcompaniesByCreationDate is asynchronous.
 * @param {*} req - The request object, representing the HTTP request
 * @param {*} res - The response object, represents the HTTP response
 * @returns The res.send object
 */
export async function orderbyCreationDate (req, res) {
    let results = await DBcompaniesByCreationDate(DB_TABLE);
    if (results.length === 0){
        return res.send("No company has been found.")
    }
    return res.json(results);
}

/**
 * An asynchronous function to obtain the:
 * - Number of companies in each industria, 
 * - Number of companies in each rango de tamaños, 
 * - Number of companies in each año de creación
 * It needs to be asynchronous because obtainStatistics is asynchronous.
 * @param {*} req - The request object, representing the HTTP request
 * @param {*} res - The response object, represents the HTTP response
 * @returns The res.send object
 */
export async function generateStatistics (req, res) {
    let results = {}
    results['companies_by_industry'] = await obtainStatistics(DB_TABLE, 'industry');
    results['companies_by_size'] = sortSizes(await obtainStatistics(DB_TABLE, 'size'));
    results['companies_by_founding'] = await obtainStatistics(DB_TABLE, 'founded');
    return res.json(results);
}

/**
 * An auxiliary funtion to sort the data by size 
 * @param {Object} data - An object with an attribute size with the folowing format [0-9]+-[0-9]+ or [0-9]+
 * @returns 
 */
function sortSizes(data){
    return data.sort((companyA, companyB) => {
        return parseInt(companyA.size.split('-')[0]) - parseInt(companyB.size.split('-')[0])
    })
}