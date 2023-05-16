const brainPrime = (number) => {
  if (number > 1) {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  return false;
};

export default brainPrime;
