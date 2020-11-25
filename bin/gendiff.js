#!/usr/bin/env node

import program from 'commander';

program
  .version('1.0.0', '-V, --version', 'outpoot the version number')
  .description('Compares two configuration files and show difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f --format <type>', 'output format');
program.parse(process.argv);
