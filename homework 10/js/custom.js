const buttons = document.querySelectorAll('.buttons');
const sound = new Audio();

buttons.forEach((button) =>
  button.addEventListener('click', function (e) {
    sound.src = `sounds/${e.target.id}.mp3`;
    sound.play();
  })
);
document.addEventListener('keydown', function (e) {
  sound.src = `sounds/${e.code}.mp3`;
  sound.play();
});
