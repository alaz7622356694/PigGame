'use strict';
const dice = document.querySelector('.dice');
dice.classList.add('hidden');
const score0 = document.querySelector('#score--0');
score0.textContent = '0';
const score1 = document.querySelector('#score--1');
score1.textContent = '0';

const random = Math.floor(Math.random() * 6) + 1;
document.querySelector('btn--roll').addEventListener('click', function () {
  dice.classList.remove('hidden');
});
