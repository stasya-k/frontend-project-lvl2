#!/usr/bin/env node

import program from 'commander';

program
  .version('1.0.0', '-V, --version', 'outpoot the version number')
  .description('Compares two configuration files and show difference.');

program.parse(process.argv);
