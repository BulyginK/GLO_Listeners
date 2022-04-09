'use strict';

const btn = document.querySelector('#btn');
const text = document.querySelector('#text');
const square = document.querySelector('#square');
const eBtn = document.querySelector('#e_btn');
const range = document.querySelector('#range');
const circle = document.querySelector('#circle');
let color;

const textInput = function(e) {
    color = e.target.value;
};

const clickBtn = function() {
    square.style.backgroundColor = color;
}

const rangeInput = function(e) {
    let size = e.target.value + '%';
    circle.style.height = size;
    circle.style.width = size;
};

text.addEventListener('input', textInput);
btn.addEventListener('click', clickBtn);
eBtn.style.display = 'none';
range.addEventListener('input', rangeInput);