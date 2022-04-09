'use strict';

// 1) Повесить на кнопку обработчик события click и реализовать такой функционал:
// В input[type=text] можно ввести цвет: red, green, blue и так далее.
// По нажатию на кнопку необходимо брать этот цвет и добавлять его свойству style="backgroundColor: " квадрата
const btn = document.querySelector('#btn');
const text = document.querySelector('#text');
const square = document.querySelector('#square');
let color;

const textInput = function(e) {
    color = e.target.value;
};

const clickBtn = function() {
    square.style.backgroundColor = color;
}

text.addEventListener('input', textInput);
btn.addEventListener('click', clickBtn);

// 2) В кружке (который внутри квадрата) есть кнопка. Дать ей свойство style="display: none; "
const eBtn = document.querySelector('#e_btn');
eBtn.style.display = 'none';

// 3) Повесить на input[type=range] обработчик события input и реализовать такой функционал:
// при каждом изменении положения ползунка значение input[type=range] необходимо заносить в свойства ширины и высоты кружка (который внутри квадрата) (height и width) (в процентах!!)
const range = document.querySelector('#range');
const circle = document.querySelector('#circle');

const rangeInput = function(e) {
    let size = e.target.value + '%';
    circle.style.height = size;
    circle.style.width = size;
};

range.addEventListener('input', rangeInput);

