#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';

let correctAnswerCount = 0;
const currentUserName = getUserName();

console.log('Welcome to the Brain Games!');
console.log(`Hello, ${currentUserName}!`);

const getRandom = () => {
  return Math.floor(Math.random() * 10);;
};

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

console.log('Answer "yes" if the number is even, otherwise answer "no".');

do {
  let number = 0;
  let answer = 0;
  let numberIsEven = 0;

  number = getRandom();
  numberIsEven = isEven(number);

  console.log(`Question: ${number}`);
  answer = readlineSync.question('Answer: ');

  if ((answer === 'yes' && numberIsEven) || (answer === 'no' && !(numberIsEven))) {
    console.log('Correct!');
    correctAnswerCount += 1;
  } else if (answer === 'yes' && (!numberIsEven)) {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log("Let's try again!");
    correctAnswerCount = 0;
  } else {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
    console.log("Let's try again!");
    correctAnswerCount = 0;
  }
} while (correctAnswerCount < 3);

console.log(`Congratulations, ${currentUserName}!`);
