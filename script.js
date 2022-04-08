'use strict';

// // 1) Повесить на кнопку обработчик события click и реализовать такой функционал:
// В input[type=text] можно ввести цвет: red, green, blue и так далее.
// По нажатию на кнопку необходимо брать этот цвет и добавлять его свойству style="backgroundColor: " квадрата
const btn = document.querySelector('#btn');
const text = document.querySelector('#text');
const square = document.querySelector('#square');

const textInput = function(event) {
    console.log(event.target.value);
};

const clickBtn = function() {
    square.style.backgroundColor = 'green';
};

text.addEventListener('input', textInput);
btn.addEventListener('click', clickBtn);