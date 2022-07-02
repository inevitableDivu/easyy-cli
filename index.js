#! /usr/bin/env node

import { program } from 'commander'
import { compiler } from './command/list.js'

program
    .option('-e, --exec, <fileName>')
    .description('Executes file with extension .c')
    .action(compiler)


program.parse()