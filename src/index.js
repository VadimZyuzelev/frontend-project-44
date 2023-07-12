/* eslint-disable object-curly-newline */
import readlineSync from 'readline-sync';
import getNameUser from './cli.js';
import { brainCalc, getRandomOperation } from './games/brain-calc.js';
import brainEven from './games/brain-even.js';
import brainGCD from './games/brain-gcd.js';
import brainProgression from './games/brain-progression.js';
import brainPrime from './games/brain-prime.js';
import getRandomNumber from './utils.js';

// Количество верных ответов в каждой игре
const correctAnswerCount = 3;

const runGame = (question, correctAnswer, countUserAnswer, currentUserName) => {
  const resultQuetion = question.join(' ');
  console.log(`Question: ${resultQuetion}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer.toString() === correctAnswer.toString()) {
    return (countUserAnswer === correctAnswerCount) ? `Correct! \nCongratulations, ${currentUserName}!` : 'Correct!';
  }

  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}' \nLet's try again, ${currentUserName}!`;
};

const getBrainEven = () => {
  let resultGame = 0;
  const currentUserName = getNameUser();

  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${currentUserName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= correctAnswerCount; i += 1) {
    const number = [getRandomNumber(0, 30)];
    const correctAnswer = brainEven(number);
    resultGame = runGame(number, correctAnswer, i, currentUserName);

    console.log(resultGame);

    if (resultGame !== 'Correct!') {
      break;
    }
  }
};

const getBrainCalc = () => {
  let resultGame = 0;

  const currentUserName = getNameUser();

  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${currentUserName}!`);

  console.log('What is the result of the expression?');

  for (let i = 1; i <= correctAnswerCount; i += 1) {
    const number = getRandomNumber(0, 20);
    const numberTwo = getRandomNumber(0, 30);
    const operation = getRandomOperation();

    const questionArray = [number, operation, numberTwo];

    const correctAnswer = brainCalc(number, numberTwo, operation);

    resultGame = runGame(questionArray, correctAnswer, i, currentUserName);

    console.log(resultGame);

    if (resultGame !== 'Correct!') {
      break;
    }
  }
};

const getBrainGCD = () => {
  let resultGame = 0;

  const currentUserName = getNameUser();

  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${currentUserName}!`);

  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= correctAnswerCount; i += 1) {
    const number = getRandomNumber(1, 30);
    const numberTwo = getRandomNumber(1, 20);

    const questionArray = [number, numberTwo];

    const correctAnswer = brainGCD(number, numberTwo);

    resultGame = runGame(questionArray, correctAnswer, i, currentUserName);

    console.log(resultGame);

    if (resultGame !== 'Correct!') {
      break;
    }
  }
};

const getBrainProgression = () => {
  let resultGame = 0;

  const currentUserName = getNameUser();
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${currentUserName}!`);

  console.log('What number is missing in the progression?');
  for (let i = 1; i <= correctAnswerCount; i += 1) {
    const numberFirst = getRandomNumber(0, 30);
    const stepProgression = getRandomNumber(2, 20);
    const numberCount = getRandomNumber(5, 30);

    const correctAnswer = brainProgression(numberFirst, numberCount, stepProgression);

    resultGame = runGame(correctAnswer[0], correctAnswer[1], i, currentUserName);

    console.log(resultGame);

    if (resultGame !== 'Correct!') {
      break;
    }
  }
};

const getBrainPrime = () => {
  let resultGame = 0;

  const currentUserName = getNameUser();
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${currentUserName}!`);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 1; i <= correctAnswerCount; i += 1) {
    const number = [getRandomNumber(0, 40)];
    const correctAnswer = brainPrime(number) ? 'yes' : 'no';

    resultGame = runGame(number, correctAnswer, i, currentUserName);

    console.log(resultGame);

    if (resultGame !== 'Correct!') {
      break;
    }
  }
};

export { getBrainCalc, getBrainEven, getBrainGCD, getBrainProgression, getBrainPrime };
