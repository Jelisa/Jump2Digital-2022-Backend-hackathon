import { db } from "./db_connection.js";

export const DBcompaniesBySize = async (req, res) =>{
    /** A function to obtain the companies sorted by size.
     * @return {Object} An object containing the companies sorted by size.
     */
    let results = [];
    db.serialize(() =>{
        db.each('SELECT * FROM companies_information ORDER BY size DESC',
            function (err, row) {
                if (err) {
                    return res.status(500).send(err);
                }
                results.push(row);
                results.push(3)
                // res.json(rows);
        });
        console.log(45, results);
    });
    // db.close()
}

export function DBcompaniesByCreationDate(req, res){
    /** A function to obtain the companies sorted by creation year.
     * @return {Object} An object containing the companies sorted by creation year.
     */
    return {'temporarySolution': 'DBcompaniesByAge'};
}

export function obtainStatistics(req, res){
    /** A function to obtain the companies statistics.
     * @return {Object} An object containing the companies statistics.
     */
    return {'temporarySolution': 'obtainStatistics'};
}
