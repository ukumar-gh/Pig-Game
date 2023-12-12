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

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  diceEl.classList.add("hidden");
  player0El.classList.add("player--active");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player1El.classList.remove("player--active");
  score0El.textContent = "0";
  score1El.textContent = "0";
  current0El.textContent = "0";
  current1El.textContent = "0";
};

init();

btnNew.addEventListener("click", init);

btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6 + 1);
    //   console.log(dice);
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnHold.addEventListener("click", function () {
  if (playing) {
    //   alert("here");
    scores[activePlayer] += currentScore;
    //   score0El.textContent = scores[0];
    //   score1El.textContent = scores[1];
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] > 10) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});
