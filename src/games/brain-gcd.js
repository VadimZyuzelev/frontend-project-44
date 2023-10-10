import getRandomNumber from '../utils.js';

const brainGCD = (num, numSecond) => {
  let numberFirst = num;
  let numberSecond = numSecond;

  while (numberSecond) {
    const temp = numberSecond;
    numberSecond = numberFirst % numberSecond;
    numberFirst = temp;
  }

  return numberFirst;
};

const getBrainGCD = () => {
  const number = getRandomNumber(1, 30);
  const numberTwo = getRandomNumber(1, 20);

  const questionArray = [number, numberTwo];
  const correctAnswer = brainGCD(number, numberTwo);

  return [questionArray.join(' '), correctAnswer];
};

export default getBrainGCD;
