const path = require('path');
const {runCLI} = require('jest-cli');

const projectRootPath = path.resolve(__dirname, '..');

const run = async () => {
  // Run the Jest asynchronously
  const {results} = await runCLI({
    silent: true,
    reporters: [],
    runInBand: true,
  }, [projectRootPath]);

  const r = {
    totalPassedTests: results.numPassedTests,
    totalFailedTests: results.numFailedTests,
    testResults: results.testResults.map((tr) => {
      return {
        file: path.basename(tr.testFilePath),
        passed: tr.numPassingTests,
        failed: tr.numFailingTests,
        results: tr.testResults.map((v) => {
          return {
            name: v.fullName,
            status: v.status,
          }
        }),
      }
    })
  }

  return r;
}

module.exports = run;

