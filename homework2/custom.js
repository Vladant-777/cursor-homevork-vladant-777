let firstNum;
let endNum;

do {
  firstNum = +prompt(`Please, whrite a number from which we will add`);
} while (!Number.isInteger(firstNum) || firstNum == '' || isNaN(firstNum));

do {
  endNum = +prompt(`Please, whrite a number to wich we will add`);
} while (
  !Number.isInteger(endNum) ||
  endNum == '' ||
  isNaN(endNum) ||
  endNum < firstNum
);

const skipEvenNum = confirm(`Do you need to skip even numbers?`);

let sumOfNum = 0;
for (let i = firstNum; i <= endNum; i++) {
  if (skipEvenNum && i % 2 === 0) {
    continue;
  }
  sumOfNum += i;
}
console.log(sumOfNum);
