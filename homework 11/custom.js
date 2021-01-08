async function getRandomChinese(length) {
  let char = '';
  const delay = 50;
  const makeChineseChar = () =>
    String.fromCharCode(String(Date.now()).slice(-5));
  const getRandomChar = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(makeChineseChar()), delay)
    );
  while (length > 0) {
    char += await getRandomChar();
    length--;
  }
  return char;
}

getRandomChinese(4).then((result) => console.log(result));
