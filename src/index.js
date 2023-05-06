import readlineSync from 'readline-sync';
import getNameUser from './cli.js';
import brainCalc from './games/brain-calc.js';
import brainEven from './games/brain-even.js';
import brainGCD from './games/brain-gcd.js';

const correctAnswerCount = 3;

const greeting = (userName) => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName}!`);
};

const getRandomNumber = () => Math.floor(Math.random() * 20);

const getRandomOperation = () => {
  const array = ['+', '*', '-'];
  return array[Math.floor(Math.random() * array.length)];
};

const checkAnswer = (userAnswer, correctAnswer) => {
  if (userAnswer.toString() === correctAnswer.toString()) {
    return true;
  }

  return false;
};

const getMessageStatusAnswer = (statusAnswer, userAnswer, correctAnswer) => {
  if (statusAnswer === true) {
    return 'Correct!';
  }

  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`;
};

const getMessageUser = (statusAnswer, userName) => {
  if (statusAnswer === true) {
    return `Congratulations, ${userName}!`;
  }

  return `Let's try again, ${userName}!`;
};

const setQuestion = (questionArray) => console.log(`Question: ${questionArray}`);

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const getBrainCalc = () => {
  let statusAnswer;

  const currentUserName = getNameUser();
  greeting(currentUserName);

  console.log('What is the result of the expression?');

  for (let i = 0; i < correctAnswerCount; i += 1) {
    const number = getRandomNumber();
    const numberTwo = getRandomNumber();
    const operation = getRandomOperation();

    const array = [];
    array.push(number, operation, numberTwo);
    const questionArray = array.join(' ');

    setQuestion(questionArray);

    const userAnswer = getAnswer();
    const correctAnswer = brainCalc(number, numberTwo, operation);

    statusAnswer = checkAnswer(userAnswer, correctAnswer);
    console.log(getMessageStatusAnswer(statusAnswer, userAnswer, correctAnswer));

    if (statusAnswer === false) {
      break;
    }
  }
  console.log(getMessageUser(statusAnswer, currentUserName));
};

const getBrainEven = () => {
  let statusAnswer;

  const currentUserName = getNameUser();
  greeting(currentUserName);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < correctAnswerCount; i += 1) {
    const number = getRandomNumber();

    const questionArray = [number];
    setQuestion(questionArray);

    const userAnswer = getAnswer();
    const correctAnswer = brainEven(number);

    statusAnswer = checkAnswer(userAnswer, correctAnswer);
    console.log(getMessageStatusAnswer(statusAnswer, userAnswer, correctAnswer));

    if (statusAnswer === false) {
      break;
    }
  }

  console.log(getMessageUser(statusAnswer, currentUserName));
};

const getBrainGCD = () => {
  let statusAnswer;

  const currentUserName = getNameUser();
  greeting(currentUserName);

  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < correctAnswerCount; i += 1) {
    const number = getRandomNumber();
    const numberTwo = getRandomNumber();

    const array = [];
    array.push(number, numberTwo);
    const questionArray = array.join(' ');
    setQuestion(questionArray);

    const userAnswer = getAnswer();
    const correctAnswer = brainGCD(number, numberTwo);

    statusAnswer = checkAnswer(userAnswer, correctAnswer);
    console.log(getMessageStatusAnswer(statusAnswer, userAnswer, correctAnswer));

    if (statusAnswer === false) {
      break;
    }
  }
  console.log(getMessageUser(statusAnswer, currentUserName));
};
export { getBrainCalc, getBrainEven, getBrainGCD };
