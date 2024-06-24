'use strict';

// refactoring - restructuring code without changing it's functionality

const showModalBtn = document.querySelectorAll('.show-modal'); // using querySelector will choose only the first one
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');

for (let i = 0; i < showModalBtn.length; i++)
    showModalBtn[i].addEventListener('click', function () {

        modal.classList.remove('hidden'); // manupilating classes
        overlay.classList.remove('hidden');
    })

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

closeModalBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    /**
     * When a keydown Event occurs, JS generates an Event objects which stores information 
     * about the particular Event and is accessible to the Event Handler function.
     * It takes the Event object as an argument.
     */

    if (e.key === "e") {
        if (!modal.classList.contains('hidden')) closeModal();
    }
})