export const getSum = (firstNum, endNum, skipEvenNum) => {
  let sumOfNum = 0;
  for (let i = firstNum; i <= endNum; i++) {
    if (skipEvenNum && i % 2 === 0) {
      continue;
    }
    sumOfNum += i;
  }
  return sumOfNum;
};
