const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

module.exports = async (filename='answers.zip') => {
  const DIST_PATH = path.resolve(__dirname, '..', 'dist')
  const ZIP_FILE = path.resolve(DIST_PATH, filename);

  const output = fs.createWriteStream(ZIP_FILE);
  const archive = archiver('zip', {});

  archive.pipe(output);
  archive.directory(path.resolve(__dirname,'../questions'), false);
  await archive.finalize();
  return {
    filePath: ZIP_FILE,
    dirPath: DIST_PATH,
  }
}