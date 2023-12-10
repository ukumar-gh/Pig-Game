"use strict";

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6 + 1);
  //   console.log(dice);
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
  /*
  if (dice !== 1) {
    currentScore += dice;
    // alert(currentScore);
    activePlayer === 0
      ? (current0El.textContent = currentScore)
      : (current1El.textContent = currentScore);
  } else {
    currentScore = 0;
    activePlayer === 0
      ? (current0El.textContent = currentScore)
      : (current1El.textContent = currentScore);
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  }
  */
});
