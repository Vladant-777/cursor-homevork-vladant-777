let firstNum = +prompt(`Please, whrite a number from which we will add`);
let endNum = +prompt(`Please, whrite a number to wich we will add`);
let skipEvenNum = confirm(`Skip even numbers?`);
console.log(Number.isInteger(firstNum) ? `correct` : `wrong`);
console.log(Number.isInteger(endNum) ? `correct` : `wrong`);
let sumNum = 0;
for (let i = firstNum; i <= endNum; i++) {
  if (i % 2 === 1 || (i % 2 === 0 && skipEvenNum === 'false')) sumNum += i;
}
console.log(sumNum);
