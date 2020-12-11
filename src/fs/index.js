'use strict';

const fsBasic = require('./fs-basic');
const fsStructure = require('./fs-structure');
const tempFolder = require('./temp-folder');

module.exports = {
    ...fsBasic,
    ...fsStructure,
    ...tempFolder
};
