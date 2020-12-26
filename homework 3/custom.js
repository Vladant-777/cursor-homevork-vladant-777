//1
const getMaxDigit = (number) => Math.max(...(number + '').split(''));
//2
const getChangeName = (name) =>
  name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();
//3
const getProfit = (profit, tax = 19.5) => profit - (profit / 100) * tax;
//4
const getRandomNum = (minNum, maxNum) =>
  Math.round(Math.random() * (maxNum - minNum) + minNum);
//5
const getCountLetter = (string, letter) => {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === letter.toLowerCase()) {
      counter++;
    }
  }
  return counter;
};
//6
const deleteLetters = (letter, string) => string.replaceAll(letter, '');

console.log(`Функція №1: ${getMaxDigit(12345567)}
Функція №3: ${getChangeName('garold')}
Функція №4: ${getProfit(27)}
Функція №5: ${getRandomNum(24, 40)}
Функція №6: ${getCountLetter('qwerxz', 'q')}
Функція №9: ${deleteLetters('q', 'qwert')}`);
