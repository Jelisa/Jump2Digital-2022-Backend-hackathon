import { join } from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const DIRECTORIES_FILES = {
    initialData: join(__dirname, '../data/companies.json')
}

export default DIRECTORIES_FILES