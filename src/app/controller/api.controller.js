import { DBcompaniesBySize, DBcompaniesByCreationDate, obtainStatistics } from '../db_modules/db_manipulation.js';

export async function orderbySize(req, res) {
    let results = await DBcompaniesBySize();
    if (results.length === 0){
        return res.send("No company has been found.")
    }
    sortSizes(results)
    res.json(results);
};

export async function orderbyCreationDate (req, res) {
    let results = await DBcompaniesByCreationDate();
    if (results.length === 0){
        return res.send("No company has been found.")
    }
    res.json(results);
}

export async function generateStatistics (req, res) {
    /**A functionto obtain:
     * - Number of companies in each industria, 
     * - Number of companies in each rango de tamaños, 
     * - Number of companies in each año de creación
     * 
     */
    let results = {}
    results['companies_by_industry'] = await obtainStatistics('industry');
    results['companies_by_size'] = sortSizes(await obtainStatistics('size'));
    results['companies_by_founding'] = await obtainStatistics('founded');
    res.json(results);
}

function sortSizes(data){
    return data.sort((companyA, companyB) => {
        return parseInt(companyA.size.split('-')[0]) - parseInt(companyB.size.split('-')[0])
    })
}