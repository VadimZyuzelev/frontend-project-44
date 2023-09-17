import getRandomNumber from '../utils.js';

const brainPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getBrainPrime = () => {
  const number = [getRandomNumber(0, 40)];
  const correctAnswer = brainPrime(number) ? 'yes' : 'no';

  return [number, correctAnswer];
};

export default getBrainPrime;
