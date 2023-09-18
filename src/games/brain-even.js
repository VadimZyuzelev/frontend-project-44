import getRandomNumber from '../utils.js';

const brainEven = (number) => (number % 2 === 0);

const getBrainEven = () => {
  const number = [getRandomNumber(0, 30)];
  const correctAnswer = brainEven(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default getBrainEven;
