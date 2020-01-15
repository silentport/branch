#!/usr/bin/env node

const chalk = require('chalk');
const util = require('util');
const log = console.log;
const error = chalk.bold.red;
const warn = chalk.bold.yellow;
const success = chalk.bold.green;
const exec = util.promisify(require('child_process').exec);

const groupStart = () => {
  console.group("---------------------------------------------------");
};
const groupEnd = () => {
  console.groupEnd();
  log("---------------------------------------------------\n");
};

const execCommand = async (cmd, b) => {
  const ls = await exec(cmd);
  const current = ls.stdout.trim();

  groupStart();

  log(chalk.green('Current Branch: ') + `${current}\n`);
  if (!b) {
    log(warn('Warning: ')
      +
      `Maybe you should assign a specific branch for current 
         script, such as use ${chalk.green('branch master && node xxx')} in scripts 
         of your package.json`);
    groupEnd();
    return;
  }
  if (current !== b) {
    log(error('Error: ')
      +
      `The script you try to execute is only available in
        ${chalk.green(b)} branch, but current branch is ${chalk.blue(current)}`
    );
    groupEnd();
    process.exit(1);
  }
  log(success('Success: ') + 'you passed the branch check  √');
  groupEnd();

};
execCommand('git symbolic-ref --short -q HEAD', process.argv[2]);
