function DBcompaniesBySize(){
    /** A function to obtain the companies sorted by size.
     * @return {Object} An object containing the companies sorted by size.
     */
    return {'temporarySolution': 'DBcompaniesByAge'};
}

function DBcompaniesByCreationDate(){
    /** A function to obtain the companies sorted by creation year.
     * @return {Object} An object containing the companies sorted by creation year.
     */
    return {'temporarySolution': 'DBcompaniesByAge'};
}

function obtainStatistics(){
    /** A function to obtain the companies statistics.
     * @return {Object} An object containing the companies statistics.
     */
    return {'temporarySolution': 'obtainStatistics'};
}

module.exports = {
    DBcompaniesBySize : DBcompaniesBySize,
    DBcompaniesByCreationDate : DBcompaniesByCreationDate,
    obtainStatistics : obtainStatistics
}