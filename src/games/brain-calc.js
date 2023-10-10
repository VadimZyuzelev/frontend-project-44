import getRandomNumber from '../utils.js';

const getRandomOperation = () => {
  const array = ['+', '*', '-'];
  return array[getRandomNumber(0, array.length - 1)];
};

const brainCalc = (number, numberTwo, operation) => {
  switch (operation) {
    case '+':
      return number + numberTwo;
    case '*':
      return number * numberTwo;
    case '-':
      return number - numberTwo;
    default:
      return 'Произошла ошибка! Попробуйте еще раз!';
  }
};

const getBrainCalc = () => {
  const number = getRandomNumber(0, 20);
  const numberTwo = getRandomNumber(0, 30);
  const operation = getRandomOperation();

  const questionArray = [number, operation, numberTwo].join(' ');
  const correctAnswer = brainCalc(number, numberTwo, operation);

  return [questionArray, correctAnswer];
};

export default getBrainCalc;
