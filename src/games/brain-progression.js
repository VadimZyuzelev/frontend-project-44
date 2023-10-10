import getRandomNumber from '../utils.js';

const progression = () => {
  const arrayProgression = [];
  const lengthArray = getRandomNumber(5, 15);
  const numFirst = getRandomNumber(0, 30);
  const step = getRandomNumber(0, 20);
  const numLast = numFirst + step * (lengthArray - 1);

  for (let i = numFirst; i <= numLast; i += step) {
    arrayProgression.push(i);
  }

  return arrayProgression;
};

const getProgression = () => {
  const questionArray = progression();
  const randomIndex = getRandomNumber(0, questionArray.length - 1);
  questionArray[randomIndex] = '..';

  return [questionArray.join(' '), randomIndex];
};

export default getProgression;
