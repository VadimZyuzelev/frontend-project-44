#!/usr/bin/env node
import runGame from '../src/index.js';
import getBrainEven from '../src/games/brain-even.js';

const message = 'Answer "yes" if the number is even, otherwise answer "no".';
runGame(message, getBrainEven);

getBrainEven();
