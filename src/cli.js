import readlineSync from 'readline-sync';

const getNameUser = () => {
  const name = readlineSync.question('May I have your name? ');
  return `${name}`;
};

export default getNameUser;
