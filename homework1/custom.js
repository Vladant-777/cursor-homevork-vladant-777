const apple = 15.678;
const orange = 123.965;
const pear = 90.2345;
const sum = apple + orange + pear;
const sumFloor = Math.floor(apple + orange + pear);
const roundingToHundreds = Math.ceil(sum / 100) * 100;
const payment = 500;
const middlePrice = Number((sum / 3).toFixed(2));
const randomDiscount = (Math.random() * 100).toFixed(0);
const discountPrice = Number((sum - randomDiscount).toFixed(2));
const netProfit = (sum / 2 - randomDiscount).toFixed(2);

console.log(Math.max(apple, orange, pear));
console.log(Math.min(apple, orange, pear));
console.log(roundingToHundreds);
console.log(sumFloor % 2 === 0 ? 'yes' : 'no');
console.log(payment - sum);
console.log(middlePrice);
console.log(discountPrice);
console.log(
  `Максимальнt число: ${Math.max(
    apple,
    orange,
    pear
  )}, Мінімальне число: ${Math.min(
    apple,
    orange,
    pear
  )}, Варстість товарів: ${sum}, Округлення в меншу сторону: ${Math.floor(
    apple + orange + pear
  )}, Округлення до сотен: ${roundingToHundreds}, Чи є сума всіх товарів парним або непарним числом: ${
    sumFloor % 2 === 0 ? 'yes' : 'no'
  }, Решта: ${
    payment - sum
  }, Середня ціна: ${middlePrice}, Випадкова знижка: ${randomDiscount}, Чистий прибуток: ${netProfit}`
);
