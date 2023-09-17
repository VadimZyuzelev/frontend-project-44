#!/usr/bin/env node
import runGame from '../src/index.js';
import getBrainGCD from '../src/games/brain-gcd.js';

const message = 'Find the greatest common divisor of given numbers.';
runGame(message, getBrainGCD);
