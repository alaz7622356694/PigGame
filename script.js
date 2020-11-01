'use strict';
const dice = document.querySelector('.dice');
dice.classList.add('hidden');
const score0 = document.querySelector('#score--0');
score0.textContent = '0';
const score1 = document.querySelector('#score--1');
score1.textContent = '0';
const btnRoll = document.querySelector('.btn--roll');

let currentScore = 0;

const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');

btnRoll.addEventListener('click', function () {
  const randomDice = Math.trunc(Math.random() * 6) + 1;

  dice.classList.remove('hidden');

  dice.src = `dice-${randomDice}.png`;

  if (randomDice !== 1) {
    console.log(currentScore);
    currentScore = currentScore + randomDice;
    current0.textContent = currentScore;
  } else {
  }
});
