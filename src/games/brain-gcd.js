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

export default brainGCD;
