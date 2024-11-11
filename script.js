const body = document.querySelector('body');
const colorPicker1 = document.getElementById('pickerOne');
const colorPicker2 = document.getElementById('pickerTwo');
const colorPlaceHolder = document.querySelector('h3');

const randomBtn = document.querySelector('.random');

darkenStyles = () => {
    body.style.color = '#000';
    randomBtn.style.color = '#000';
    randomBtn.style.color = '#000';
    colorPicker1.style.border = '3px solid #333';
    colorPicker2.style.border = '3px solid #333';
};

function setGradient(el, direction, color1, color2) {
    const color = `linear-gradient(${direction}, ${color1}, ${color2})`;
    el.style.background = color;
    return color;
}

function setButtonGradient() {
    setGradient(randomBtn, 'to right', colorPicker2.value, colorPicker1.value);
    randomBtn.style.border = `2px solid ${colorPicker2.value}`;
}

function setBodyGradient() {
    const color = setGradient(
        body,
        'to right',
        colorPicker1.value,
        colorPicker2.value
    );
    colorPlaceHolder.textContent = color + ';';
}

function setBackGroundColors(ev) {
    setBodyGradient();
    setButtonGradient();
}

generateRandomColors = (ev) => {
    /**
     * r g b.
     * All possible numbers in hex from 0x000000 to 0xFFFFFF
     * equaling to 16777216.
     */
    const possibleColors = 256 * 256 * 256;
    const randomNum1 = Math.floor(Math.random() * possibleColors);
    const randomNum2 = Math.floor(Math.random() * possibleColors);

    const randomColor1 = randomNum1.toString(16).padStart(6, '0'); // (maxLength, fillString) <-- if short
    const randomColor2 = randomNum2.toString(16).padStart(6, '0'); // (maxLength, fillString) <-- if short

    colorPicker1.value = `#${randomColor1}`;
    colorPicker2.value = `#${randomColor2}`;

    setBackGroundColors(null);
    darkenStyles();
};

colorPicker1.addEventListener('input', setBackGroundColors);
colorPicker2.addEventListener('input', setBackGroundColors);

randomBtn.addEventListener('click', generateRandomColors);

document.addEventListener('DOMContentLoaded', setBackGroundColors);
