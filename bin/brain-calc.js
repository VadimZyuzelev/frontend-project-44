#!/usr/bin/env node
import runGame from '../src/index.js';
import getBrainCalc from '../src/games/brain-calc.js';

const message = 'What is the result of the expression?';
runGame(message, getBrainCalc);
