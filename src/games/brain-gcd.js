const brainGCD = (number, numberTwo) => {
  let numberFirst = number;
  let numberSecond = numberTwo;

  while ((numberFirst !== 0) && (numberSecond !== 0)) {
    if (numberFirst > numberSecond) {
      numberFirst %= numberSecond;
    } else {
      numberSecond %= numberFirst;
    }
  }

  return numberFirst !== 0 ? numberFirst : numberSecond;
};

export default brainGCD;
