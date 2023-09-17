#!/usr/bin/env node
import runGame from '../src/index.js';
import getBrainProgression from '../src/games/brain-progression.js';

const message = 'What number is missing in the progression?';
runGame(message, getBrainProgression);
