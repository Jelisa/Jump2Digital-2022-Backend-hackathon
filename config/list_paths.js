const path = require ('path')
const fs = require('fs');

const DIRECTORIES_FILES = {
    initialData: 'config/companies.json'
}

fs.writeFileSync('files_directories.json', JSON.stringify(DIRECTORIES_FILES))