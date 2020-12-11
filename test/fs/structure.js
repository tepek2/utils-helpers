'use strict';

const fsUtilsRead = 'text';
const fsUtils = 'one\ntwo\nthree\nfour\n';

const structure = {
    data: {
        data2: {
            'file.txt': ''
        },
        'fs-utils-read.txt': fsUtilsRead,
        'fs-utils.txt': fsUtils
    }
};

module.exports = { structure };
