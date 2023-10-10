/* eslint-disable object-curly-newline */
import readlineSync from 'readline-sync';
import getNameUser from './cli.js';

const totalNumberRounds = 3;

const runGame = (message, game) => {
  const currentUserName = getNameUser();
  console.log(`Welcome to the Brain Games! \nHello, ${currentUserName}!`);
  console.log(message);

  for (let i = 0; i < totalNumberRounds; i += 1) {
    const [questionArray, correctAnswer] = game();

    console.log(`Question: ${questionArray}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toString() === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}' \nLet's try again, ${currentUserName}!`);
    }
  }
  return console.log(`Congratulations, ${currentUserName}!`);
};

export default runGame;
