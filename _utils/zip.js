const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const ZIP_FILE = path.resolve(__dirname, '..', 'dist/answers.zip');

const output = fs.createWriteStream(ZIP_FILE);
const archive = archiver('zip', {});

archive.pipe(output);
archive.directory(path.resolve(__dirname,'../questions'), false);
archive.finalize();