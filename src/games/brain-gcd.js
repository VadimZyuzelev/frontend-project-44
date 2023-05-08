const brainGCD = (number, numberTwo) => {
  let numberFirst = number;
  let numberSecond = numberTwo;

  if (numberFirst === 0 || numberSecond === 0) {
    return 0;
  }

  while (numberFirst !== numberSecond) {
    if (numberFirst > numberSecond) {
      numberFirst -= numberSecond;
    } else {
      numberSecond -= numberFirst;
    }
  }

  return numberFirst;
};

export default brainGCD;
