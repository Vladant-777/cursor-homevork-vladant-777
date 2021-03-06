export const generateBlocks = () => {
  const numberBlocks = 25;
  const square = document.createElement('div');
  document.body.childNodes[0].remove();
  square.classList.add('square');
  document.body.prepend(square);
  for (let i = 0; i < numberBlocks; i++) {
    const block = document.createElement('div');
    block.classList.add('blocks');
    block.style.background = getColor();
    square.append(block);
  }
};
export function getColor() {
  return '#' + Math.random().toString(16).slice(5, 11);
}
export const delay = 1000;
export function generateBlocksInterval() {
  setInterval(generateBlocks, delay);
}
