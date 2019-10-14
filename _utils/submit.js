const path = require('path');
const inquirer = require('inquirer');
const open = require('open');
const fs = require('fs-extra');
const zipSubmission = require('./zip');
const runTests = require('./runTests');

const experienceChoices = [
  'Unfamiliar',
  'Beginner',
  'Intermediate',
  'Advanced',
  'Expert',
]

const questions = [
  {
    type: 'input',
    name: 'confirm',
    message: "If you confirm that the submission you are making is complete and is work of your own creation, type \"CONFIRM\"",
    validate: (input) => {
      if(input === 'CONFIRM') {
        return true;
      }
      
      return new Error("You may not incomplete work or work that is not your own.")
    }
  },
  {
    type: 'input',
    name: 'full_name',
    message: "What's your full name?",
    validate: function (input) {
      if(!input) {
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
      if(!input) {
        return new Error('Field is Required')
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'phone',
    message: "What's your best contact number? (optional)"
  },
  {
    type: 'input',
    name: 'resume',
    message: "Link to Resume (optional)"
  },
  {
    type: 'list',
    name: 'react_exp',
    message: 'How would you rank your React.js experience?',
    choices: experienceChoices
  },
  {
    type: 'list',
    name: 'node_exp',
    message: 'How would you rank your Node.js experience?',
    choices: experienceChoices
  },
  {
    type: 'list',
    name: 'graphql_exp',
    message: 'How would you rank your GraphQL experience?',
    choices: experienceChoices
  },
  {
    type: 'list',
    name: 'sql_exp',
    message: 'How would you rank your Sql experience?',
    choices: experienceChoices
  },
  {
    type: 'list',
    name: 'devops_exp',
    message: 'How would you rank your Devops experience?',
    choices: experienceChoices
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

  const d = new Date();
  const timestamp = `${d.getFullYear()}${d.getMonth().toString().padStart(2, '0')}${d.getDate().toString().padStart(2, '0')}`;
  const name = answers.full_name.trim().replace(/ /gi, '_');

  const { dirPath } = await zipSubmission(`${name}-${timestamp}.zip`);
  fs.removeSync(submissionPath);
  console.log(`Opening Directory (${dirPath})...`);
  open(dirPath);
});

