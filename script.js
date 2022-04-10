'use strict';

const btn = document.querySelector('#btn');
const text = document.querySelector('#text');
const square = document.querySelector('#square');
const eBtn = document.querySelector('#e_btn');
const range = document.querySelector('#range');
const spanRange = document.querySelector('#range-span');
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
    spanRange.textContent = size;
    circle.style.height = size;
    circle.style.width = size;
};

eBtn.style.display = 'none';
spanRange.textContent = range.value;

text.addEventListener('input', textInput);
btn.addEventListener('click', clickBtn);
range.addEventListener('input', rangeInput);