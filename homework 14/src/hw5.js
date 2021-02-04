export const getRandomArray = (length, min, max) => {
  let randomArr = [];
  for (let i = 0; i < length; i++) {
    randomArr[i] = Math.round(Math.random() * (max - min) + min);
  }
  return randomArr;
};
