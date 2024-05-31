const { readFile, writeFile } = require('fs').promises
const path = require('path');
const rootDir = path.dirname(require.main.filename);

async function initialize() {
    const schemaPath = path.join(rootDir, 'buildSchema.js')
    const template = await readFile('./lib/schemaTemplate.js')
    await writeFile(schemaPath, template)
    console.log('\x1b[32m%s\x1b[0m', 'TASK COMPLETE: Generated buildSchema.js file');

    const gitignorePath = path.join(rootDir, '.gitignore')
    const gitignore = await readFile('./lib/gitignore.js')
    await writeFile(gitignorePath, gitignore)
    console.log('\x1b[32m%s\x1b[0m', 'TASK COMPLETE: Generated gitignore file');

    return 
}
module.exports = initialize