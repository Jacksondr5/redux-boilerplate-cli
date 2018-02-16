const program = require('commander');
const { prompt } = require('inquirer');
const fs = require('fs');
const actionBuilder = require('./actionBuilder');

const questions = [
  { type: 'input', name: 'test1', message: 'Does this really work?' },
  { type: 'input', name: 'test2', message: 'This works!' },
];
// export function main({})

program.version('0.0.1').description(
  `Handles writing Redux boilerplate code for you, without adding
    any dependencies.`
);

program
  .command('test')
  .alias('t')
  .description('Tests to see if this actually works')
  .action(() => {
    prompt(questions).then(answers => {
      console.log(answers);
    });
  });

program
  .command('file')
  .alias('f')
  .description('Tests to see if we can get a file')
  .action(() => {
    actionBuilder
      .getFile('./testFiles/testActionConstants.js')
      .then(actionBuilder.getNewConstLocationChoices);
  });

program.parse(process.argv);
