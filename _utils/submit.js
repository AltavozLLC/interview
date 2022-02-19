const path = require('path');
const inquirer = require('inquirer');
const open = require('open');
const fs = require('fs-extra');
const zipSubmission = require('./zip');
const runTests = require('./runTests');

const choices = [
  'Unfamiliar',
  'Beginner',
  'Intermediate',
  'Advanced',
  'Expert',
]

const questions = [
  {
    type: 'input',
    name: 'full_name',
    message: "What's your full name?",
    validate: function (input) {
      if (!input) {
        return new Error('Field is Required')
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "What's your email?",
    validate: function (input) {
      if (!input) {
        return new Error('Field is Required')
      }
      return true;
    }
  },
  {
    type: 'list',
    name: 'react_exp',
    message: 'How would you rank your React.js experience?',
    choices,
  },
  {
    type: 'list',
    name: 'node_exp',
    message: 'How would you rank your Node.js experience?',
    choices,
  },
  {
    type: 'list',
    name: 'sql_exp',
    message: 'How would you rank your SQL experience?',
    choices,
  },
  {
    type: 'list',
    name: 'devops_exp',
    message: 'How would you rank your DevOps experience?',
    choices,
  },
];

inquirer.prompt(questions).then(async (answers) => {
  const submissionPath = path.resolve(__dirname, '..', 'questions/submission.json');
  const testResults = await runTests();

  fs.writeJSONSync(submissionPath, {
    ...answers,
    testResults,
  }, {
    spaces: 2,
  });

  const testsSrc = path.resolve(__dirname, '..', '__tests__/index.js');
  const testsDest = path.resolve(__dirname, '..', 'questions/tests.js');
  fs.copyFileSync(testsSrc, testsDest);

  const d = new Date();
  const timestamp = `${d.getFullYear()}${(d.getMonth() + 1).toString().padStart(2, '0')}${d.getDate().toString().padStart(2, '0')}`;
  const name = answers.full_name.trim().replace(/ /gi, '_');

  const { dirPath } = await zipSubmission(`${name}-${timestamp}.zip`);
  fs.removeSync(submissionPath);
  console.log(`Opening Directory (${dirPath})...`);
  open(dirPath);
});

