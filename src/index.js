import readlineSync from 'readline-sync';
import getNameUser from './cli.js';
import brainCalc from './games/brain-calc.js';
import brainEven from './games/brain-even.js';

const correctAnswerCount = 3;

const greeting = (userName) => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName}!`);
};

const getRandomNumber = () => Math.floor(Math.random() * 10);

const getRandomOperation = () => {
  const array = ['+', '*', '-'];
  return array[Math.floor(Math.random() * array.length)];
};

const checkAnswer = (userAnswer, correctAnswer, userName) => {
  if (userAnswer.toString() === correctAnswer.toString()) {
    return 'Correct!';
  }

  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`;
};

const getQuestion = (questionArray) => console.log(`Question: ${questionArray}`);

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const getBrainCalc = () => {
  const currentUserName = getNameUser();
  greeting(currentUserName);

  console.log('What is the result of the expression?');

  for (let i = 0; i <= correctAnswerCount; i += 1) {
    const number = getRandomNumber();
    const numberTwo = getRandomNumber();
    const operation = getRandomOperation();

    const questionArray = [];
    questionArray.push(number, operation, numberTwo);
    const resultArray = questionArray.join(' ');

    getQuestion(resultArray);

    const userAnswer = getAnswer();
    const correctAnswer = brainCalc(number, numberTwo, operation);

    console.log(checkAnswer(userAnswer, correctAnswer, currentUserName));
  }
  console.log(`Congratulations, ${currentUserName}!`);
};

const getBrainEven = () => {
  const currentUserName = getNameUser();
  greeting(currentUserName);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i <= correctAnswerCount; i += 1) {
    const number = getRandomNumber();

    const questionArray = [number];
    getQuestion(questionArray);

    const userAnswer = getAnswer();
    const correctAnswer = brainEven(number);

    console.log(checkAnswer(userAnswer, correctAnswer, currentUserName));
  }
  console.log(`Congratulations, ${currentUserName}!`);
};

export { getBrainCalc, getBrainEven };
