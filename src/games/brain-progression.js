const brainProgression = (numFirst, numCount, step) => {
  const arrayProgression = [[], []];
  let randomIndexElement = 0;
  let numLast = 0;

  // Вычисляем последний элемент прогрессии
  numLast = numFirst + step * (numCount - 1);

  for (let i = numFirst; i <= numLast; i += step) {
    arrayProgression[0].push(i);
  }

  // Получаем рандомный индекс элемента
  randomIndexElement = Math.floor(Math.random() * arrayProgression[0].length);

  for (let i = 0; i < arrayProgression[0].length; i += 1) {
    if (i === randomIndexElement) {
      // Записываем элемент в результирующий массив
      arrayProgression[1] = arrayProgression[0][i];

      // Изменяем элемент
      arrayProgression[0][i] = '..';
    }
  }
  return arrayProgression;
};

export default brainProgression;
