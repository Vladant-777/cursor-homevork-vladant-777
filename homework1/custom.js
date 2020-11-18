const applePrice = 15.678;
const orangePrice = 123.965;
const pearPrice = 90.2345;

const maxPrice = Math.max(applePrice, orangePrice, pearPrice);
console.log(maxPrice);

const minPrice = Math.min(applePrice, orangePrice, pearPrice);
console.log(minPrice);

const sumPrice = applePrice + orangePrice + pearPrice;

const sumFloor = Math.floor(applePrice + orangePrice + pearPrice);

const roundingToHundreds = Math.ceil(sumPrice / 100) * 100;
console.log(roundingToHundreds);

const sumFloorEvenOrNotEnen = sumFloor % 2 === 0 ? true : false;
console.log(sumFloorEvenOrNotEnen);

const payment = 500;
const sumOfRest = payment - sumPrice;
console.log(sumOfRest);

const middlePrice = Number((sumPrice / 3).toFixed(2));
console.log(middlePrice);

const randomDiscount = Math.round(Math.random() * 100);

const netProfit = Number((sumPrice / 2 - randomDiscount).toFixed(2));
console.log(netProfit);

console.log(
  `Максимальне число: ${maxPrice}
  Мінімальне число: ${minPrice}
  Варстість товарів: ${sumPrice}
  Округлення в меншу сторону: ${sumFloor}
  Округлення до сотен: ${roundingToHundreds}
  Чи є сума всіх товарів парним або непарним числом: ${sumFloorEvenOrNotEnen}
  Решта: ${sumOfRest}
  Середня ціна: ${middlePrice}
  Випадкова знижка: ${randomDiscount}
  Чистий прибуток: ${netProfit}`
);
