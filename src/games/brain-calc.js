const brainCalc = (number, numberTwo, operation) => {
  if (operation === '+') {
    return number + numberTwo;
  }

  if (operation === '*') {
    return number * numberTwo;
  }

  return number - numberTwo;
};

export default brainCalc;
