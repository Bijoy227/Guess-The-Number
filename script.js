'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highScore = 0;

// play again button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;

  document.querySelector('.message').textContent = '⏳ Start Guessing!';

  score = 20;
  document.querySelector('.score').textContent = score;

  // change the background color
  document.querySelector('body').style.backgroundColor = '#222';

  // change the font
  document.querySelector('.number').style.width = '15rem';

  // clear the check
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  if (score > 1) {
    const num = Number(document.querySelector('.guess').value);

    if (!num) {
      document.querySelector('.message').textContent = '⛔ No Number!';
    } else if (num == secretNumber) {
      document.querySelector('.message').textContent = '🎉 Correct Numebr!';
      if (highScore < score) {
        highScore = score;
      }
      document.querySelector('.highscore').textContent = highScore;
      score += 1;

      // change the background color
      document.querySelector('body').style.backgroundColor = '#60b347';

      // change the font
      document.querySelector('.number').style.width = '30rem';
    } else if (num > secretNumber) {
      document.querySelector('.message').textContent = '📈 Too High!';
    } else {
      document.querySelector('.message').textContent = '📉 Too Low';
    }
    score--;
  } else {
    score = 0;
    document.querySelector('.message').textContent = '💥 You lose the Game!';
  }
  document.querySelector('.score').textContent = score;
});
