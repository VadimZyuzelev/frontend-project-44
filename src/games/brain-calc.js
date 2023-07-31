const getRandomOperation = () => {
  const array = ['+', '*', '-'];
  return array[Math.floor(Math.random() * array.length)];
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

export { getRandomOperation, brainCalc };
