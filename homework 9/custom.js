const square = document.querySelector('.square');

const getRandomColor = () => {
  const maxNumber = 16777215;
  return '#' + Math.floor(Math.random() * maxNumber).toString(16);
};

const generateBlocks = () => {
  square.innerHTML = '';
  for (let i = 0; i < 25; i++) {
    const block = document.createElement('block');
    block.style.width = `50px`;
    block.style.height = `50px`;
    block.style.background = getRandomColor();
    square.append(block);
  }
};

const generateBlocksInterval = () => setInterval(generateBlocks, 1000);

generateBlocksInterval();
