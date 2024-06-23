'use strict';

/** DOM and DOM Manipulation
 *
 * Making Javascript interact with the webpage
 * DOCUMENT OBJECT MODEL: Structured representation of HTML documents.
                          Allows Javascript to access html elements and styles
                          to manipulate them. Connection point b/w HTML and JS code.

 * The DOM is automatically created by the browser as soon as the HTML page loads and it
   is stored in a tree structure where each HTML element is an object/node. We can access
   and interact with each of these nodes using JS. "document.querySelector(<element>)"

 * The root node of DOM is the "document" object, it serves as an entry point to the DOM via JS.
 * NOTE: DOM methods and properties for DOM manipulation are not actually part of JS, 
         they are actually as part of WEB APIs (Application Programming Interface).

 * Reacting to something that happens in the DOM (Listening to Events)
 * Event - something that happens on the page
 * we can react to events  "document.querySelector(<element>).addEventListener(<typeOfEvent>,<eventHandler>)" 
*/


// Initial Game Setup
document.querySelector('.guess').value = ""

let highScore = 0;
document.querySelector('.highscore').textContent = highScore;

const generateNumber = () => Math.trunc((Math.random() * 20)) + 1;
let luckyNumber = generateNumber();

let currScore = Number(document.querySelector('.score').textContent);



// high score checker
function isNewHigh() {

    return currScore > highScore;
}

// update high score
function updateHighScore() {

    highScore = currScore;
    document.querySelector('.highscore').textContent = highScore;
}

// update score
function updateScore(isRight) {
    if (isRight) document.querySelector('.score').textContent = ++currScore;
    else document.querySelector('.score').textContent = --currScore;
}

// set message 
function setMessage(str) {
    document.querySelector('.message').textContent = str;
}

// 0 points
function noPoints() {
    setMessage(`💥 You lost!`);
    updateScore(false);

}

// set body background color
function setBodyBg(str) {
    document.querySelector('body').style.backgroundColor = str;
}


// check number
function checkNumber() {

    const guessedNumber = Number(document.querySelector('.guess').value);

    if (!guessedNumber) setMessage(`⛔️ Invalid Guess`);
    else {

        if (guessedNumber === luckyNumber) {

            document.querySelector('.number').textContent = luckyNumber;
            document.querySelector('.number').style.width = "30rem";
            setMessage(`🍕 Correct Guess`);
            setBodyBg("#60b347");
            updateScore(true);
            if (isNewHigh()) updateHighScore();

        } else {
            if (currScore === 1) noPoints();
            else {
                setMessage(guessedNumber < luckyNumber ? `📉 Too Low!` : `📈 Too High!`);
                updateScore(false);
                setBodyBg("#C41E3A");
            }
        }
    }
}


document.querySelector('.check').addEventListener('click', checkNumber);


// restart game 
function playAgain() {

    currScore = 20;
    document.querySelector('.score').textContent = currScore;

    luckyNumber = generateNumber();
    document.querySelector('.number').textContent = `?`;
    document.querySelector('.number').style.width = "15rem";

    setMessage(`Start guessing...`);

    setBodyBg("#222");

    document.querySelector('.guess').value = "";

}
document.querySelector('.again').addEventListener('click', playAgain);