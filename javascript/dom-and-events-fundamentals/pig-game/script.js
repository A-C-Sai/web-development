'use strict';

// TODO: Refactor code
// FIXME: Able to switch player without rolling the die

const btnRoll = document.querySelector('.btn--roll');
const diceImg = document.querySelector('.dice');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

// players
const player0 = {
    section: document.querySelector('.player--0'),
    playerName: document.querySelector('#name--0'),
    totScoreElement: document.getElementById('score--0'),
    currScoreElement: document.getElementById('current--0'),
    totScore: 0,
    currScore: 0
};

const player1 = {
    section: document.querySelector('.player--1'),
    playerName: document.querySelector('#name--1'),
    totScoreElement: document.getElementById('score--1'),
    currScoreElement: document.getElementById('current--1'),
    totScore: 0,
    currScore: 0
};

// starting conditions 
player0.totScoreElement.textContent = player0.currScoreElement.textContent = 0;
player1.totScoreElement.textContent = player1.currScoreElement.textContent = 0;
diceImg.classList.add('hidden');
btnHold.classList.add('hidden');

// active Player 
let activePlayer = 0;
const players = [player0, player1];



// main game functionality
btnRoll.addEventListener('click', function () {

    if (btnHold.classList.contains('hidden')) btnHold.classList.remove('hidden');

    // generate number
    const roll = Math.trunc(Math.random() * 6) + 1;

    // set image
    diceImg.setAttribute('src', `./assets/dice-${roll}.png`);
    diceImg.classList.remove('hidden');


    if (roll === 1) { // if number is 1 set current score to 0 and switch players
        players[activePlayer].currScore = 0;
        players[activePlayer].currScoreElement.textContent = players[activePlayer].currScore;
        players[activePlayer].section.classList.remove('player--active');
        activePlayer = activePlayer === 0 ? 1 : 0; // helps us switch active players
        players[activePlayer].section.classList.add('player--active');

    } else { // add number to current score
        players[activePlayer].currScore += roll;
        players[activePlayer].currScoreElement.textContent = players[activePlayer].currScore;
    }


})


// hold score functionality
btnHold.addEventListener('click', function () {

    players[activePlayer].totScore += players[activePlayer].currScore; // add current score to total score 
    players[activePlayer].totScoreElement.textContent = players[activePlayer].totScore; // update total score display
    players[activePlayer].currScore = 0; // reset current score to 0

    if (players[activePlayer].totScore >= 50) { // if winning limit of 50 is reached

        players[activePlayer].section.classList.add('player--winner');
        players[activePlayer].playerName.textContent = "Winner!";
        btnRoll.classList.add('hidden');
        btnHold.classList.add('hidden');
        diceImg.classList.add('hidden');
    }
    else { // continue switching players
        players[activePlayer].currScoreElement.textContent = players[activePlayer].currScore;
        players[activePlayer].section.classList.remove('player--active');
        activePlayer = Math.abs(~(-activePlayer));
        players[activePlayer].section.classList.add('player--active');
    }
})


// reset game to initial conditions
btnNew.addEventListener('click', function () {

    if (players[activePlayer].section.classList.contains('player--winner')) { // we could have used classList.toggle()
        players[activePlayer].section.classList.remove('player--winner');
    }

    players[activePlayer].playerName.textContent = `PLAYER ${activePlayer + 1}`;

    player0.currScore = player0.totScore = 0;
    player1.currScore = player1.totScore = 0;
    player0.totScoreElement.textContent = player0.currScoreElement.textContent = 0;
    player1.totScoreElement.textContent = player1.currScoreElement.textContent = 0;
    diceImg.classList.add('hidden');
    players[activePlayer].section.classList.remove('player--active');
    activePlayer = 0;
    players[activePlayer].section.classList.add('player--active');

    if (btnRoll.classList.contains('hidden')) btnRoll.classList.remove('hidden');

    if (!btnHold.classList.contains('hidden')) btnHold.classList.add('hidden');

})


