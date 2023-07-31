const getRandomOperation = () => {
  const array = ['+', '*', '-'];
  return array[Math.floor(Math.random() * array.length)];
};

const brainCalc = (number, numberTwo, operation) => {
  if (operation === '+') {
    return number + numberTwo;
  }

  if (operation === '*') {
    return number * numberTwo;
  }

  return number - numberTwo;
};

export { getRandomOperation, brainCalc };
