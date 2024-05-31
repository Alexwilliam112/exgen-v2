#!/usr/bin/env node
const commands = process.argv.slice(2);
const { helpList } = require('./lib/helpList')
const cmd = commands[0];
const path = require('path');
const rootDir = path.dirname(require.main.filename);
const schemaPath = path.join(rootDir, 'buildSchema.js')

const { dependencies, devDependencies, buildSetup, models } = require(schemaPath)
const initialize = require('./utils/initialize')
const { dependencyInstaller, devDependencyInstaller } = require('./utils/dependencyInstaller')

switch (cmd) {
    case 'help': {
        console.log(helpList);
        break;
    }

    case 'init': {
        initialize()
        break;
    }

    case 'build': {
        dependencyInstaller(dependencies)
        devDependencyInstaller(devDependencies)
        break
    }

    default: {
        console.log(helpList);
        break;
    }
}
