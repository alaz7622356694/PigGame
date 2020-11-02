'use strict';
const dice = document.querySelector('.dice');
dice.classList.add('hidden');
const score0 = document.querySelector('#score--0');
score0.textContent = '0';
const score1 = document.querySelector('#score--1');
score1.textContent = '0';
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;
let activePlayer = 0;

const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let score = [0, 0];

let playing = true;

btnRoll.addEventListener('click', function () {
  if (playing) {
    const randomDice = Math.trunc(Math.random() * 6) + 1;

    dice.classList.remove('hidden');

    dice.src = `dice-${randomDice}.png`;

    if (randomDice !== 1) {
      currentScore = currentScore + randomDice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      if (activePlayer === 0) {
        activePlayer = 1;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');

        currentScore = 0;
        current0.textContent = currentScore;
      } else if (activePlayer === 1) {
        activePlayer = 0;
        player1.classList.toggle('player--active');
        player0.classList.toggle('player--active');

        currentScore = 0;
        current1.textContent = currentScore;
      }
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    if (activePlayer === 1) {
      score[0] = score[0] + Number(current1.textContent);
      score1.textContent = score[0];

      if (score[0] >= 10) {
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add('player--winner');
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove('player--active');
        dice.classList.add('hidden');
        playing = false;
      } else {
        activePlayer = 0;
        player1.classList.toggle('player--active');
        player0.classList.toggle('player--active');
        currentScore = 0;
        current1.textContent = currentScore;
      }
    }
    if (activePlayer === 0) {
      score[1] = score[1] + Number(current0.textContent);
      score0.textContent = score[1];
      if (score[1] >= 10) {
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add('player--winner');
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove('player--active');
        dice.classList.add('hidden');
        playing = false;
      } else {
        activePlayer = 1;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
        currentScore = 0;
        current0.textContent = currentScore;
      }
    }
  }
});
