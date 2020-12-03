//Function1
const getRandomArray = (length, min, max) => {
  let randomArr = [];
  for (let i = 0; i < length; i++) {
    randomArr[i] = Math.round(Math.random() * (max - min) + min);
  }
  return randomArr;
};

console.log(getRandomArray(5, 1, 10));

//Function3
const getAverage = (...numbers) => {
  const averageNum = [...numbers].filter((number) => {
    return Math.trunc(number) === number;
  });
  const total = averageNum.reduce((total, number) => {
    return total + number;
  }, 0);
  const average = total / averageNum.length;
  return average;
};
console.log(getAverage(3, 43, 44, 543, 21));

//Function4
const getMedian = (...numbers) => {
  const median = [...numbers]
    .filter((number) => {
      return Math.trunc(number) === number;
    })
    .sort((a, b) => a - b);
  return median.length % 2 === 1
    ? median[Math.floor(median.length / 2)]
    : (median[median.length / 2] + median[median.length / 2 - 1]) / 2;
};
console.log(getMedian(2, 4, 6, 55, 3, 668, 32, 36));

//Function5
const filterEvenNumbers = (...numbers) => {
  const evenNumbers = [...numbers].filter((evenNum) => evenNum % 2 === 1);
  return evenNumbers;
};
console.log(filterEvenNumbers(1, 3, 7, 6, 4, 7, 9, 6));

//Function6
const countPositiveNumbers = (...numbers) => {
  const positiveNumbers = [...numbers].filter((positiveNum) => positiveNum > 0);
  return positiveNumbers.length;
};
console.log(countPositiveNumbers(2, 4, -2, -8, 1));

//Function7
const getDevidedByFive = (...numbers) => {
  const devidedNumers = [...numbers].filter((devideNum) => devideNum % 5 === 0);
  return devidedNumers;
};
console.log(getDevidedByFive(1, 3, 7, 6, 4, 7, 9, 10, 20));
