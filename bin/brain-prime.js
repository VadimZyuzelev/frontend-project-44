#!/usr/bin/env node
import runGame from '../src/index.js';
import getBrainPrime from '../src/games/brain-prime.js';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';
runGame(message, getBrainPrime);
