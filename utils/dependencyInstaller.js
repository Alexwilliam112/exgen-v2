const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);
module.exports = {
    dependencyInstaller: async (deps) => {
        const toInstall = Object.keys(deps).filter(dep => deps[dep]);

        for (const dep of toInstall) {
            try {
                const { stdout, stderr } = await execAsync(`npm install ${dep}`);
                console.log('\x1b[32m%s\x1b[0m',`Successfully installed ${dep}:`, stdout);
                if (stderr) {
                    console.error('\x1b[31m%s\x1b[0m',`${dep}:`, stderr);
                }
            } catch (error) {
                console.error('\x1b[31m%s\x1b[0m',`Error installing ${dep}:`, error);
            }
        }
    },

    devDependencyInstaller: async (deps) => {
        const toInstall = Object.keys(deps).filter(dep => deps[dep]);

        for (const dep of toInstall) {
            try {
                const { stdout, stderr } = await execAsync(`npm install ${dep}`);
                console.log('\x1b[32m%s\x1b[0m',`Successfully installed ${dep}:`, stdout);
                if (stderr) {
                    console.error('\x1b[31m%s\x1b[0m',`${dep}:`, stderr);
                }
            } catch (error) {
                console.error('\x1b[31m%s\x1b[0m',`Error installing ${dep}:`, error);
            }
        }
    }
}