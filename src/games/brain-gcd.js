const brainGCD = (number, numberTwo) => {
  let num1 = number;
  let num2 = numberTwo;

  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }

  return num1 !== 0 ? num1 : num2;
};

export default brainGCD;
