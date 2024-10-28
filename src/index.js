import { trimLeadingZeroes } from './utils.js';
import { sum, minus, divison, myltiply, percent, negate } from './calculator.js';
import '../styles/style.css';

const DARK_THEME_CLASS = 'dark-theme';
const LIGHT_THEME_CLASS = 'light-theme';

let firstNumberInput = '';
let secondNumberInput = '';
const resultOutputElement = document.querySelector('.calculator-screen p');
let operator = '';
let opereations = new Map();
opereations.set('+', sum);
opereations.set('*', myltiply);
opereations.set('-', minus);
opereations.set('/', divison);
opereations.set('%', percent);

function clearAll() {
  firstNumberInput = '';
  secondNumberInput = '';
  operator = '';
  resultOutputElement.textContent = '';
}

function negateSign() {
  if (firstNumberInput && !operator) {
    firstNumberInput = negate(+firstNumberInput);
    resultOutputElement.textContent = firstNumberInput;
  } else if (secondNumberInput && operator) {
    secondNumberInput = negate(+secondNumberInput);
    resultOutputElement.textContent = secondNumberInput;
  }
}

function makeFloat() {
  if (firstNumberInput && !operator && !firstNumberInput.includes('.')) {
    firstNumberInput += '.';
    resultOutputElement.textContent = firstNumberInput;
  } else if (secondNumberInput && operator && !secondNumberInput.includes('.')) {
    secondNumberInput += '.';
    resultOutputElement.textContent = secondNumberInput;
  }
}

function selectOperator(event) {
  if (operator && firstNumberInput && secondNumberInput) {
    calculate();
  }
  const sign = event.target.textContent;
  operator = opereations.get(sign);
  resultOutputElement.textContent = firstNumberInput + sign;
}

function calculate() {
  firstNumberInput = operator(+firstNumberInput, +secondNumberInput).toString();
  resultOutputElement.textContent = firstNumberInput;
  operator = undefined;
  secondNumberInput = '';
}

function changeTheme() {
  document.body.className =
    document.body.className === DARK_THEME_CLASS ? LIGHT_THEME_CLASS : DARK_THEME_CLASS;
}

function displayNumber(number) {
  if (operator) {
    secondNumberInput += number;
    resultOutputElement.textContent = secondNumberInput;
  } else {
    firstNumberInput += number;
    resultOutputElement.textContent = firstNumberInput;
  }
  resultOutputElement.textContent = trimLeadingZeroes(resultOutputElement.textContent);
}

function addDigit(event) {
  const presstKey = event.target.textContent;
  displayNumber(presstKey);
}

document.querySelectorAll('.digit').forEach((e) => {
  e.addEventListener('click', addDigit);
});

document.querySelectorAll('.operation').forEach((e) => {
  e.addEventListener('click', selectOperator);
});

document.querySelector('.plus-minus').addEventListener('click', negateSign);

document.querySelector('.equal').addEventListener('click', calculate);

document.querySelector('.dot').addEventListener('click', makeFloat);

document.querySelector('.light-theme-toggle').addEventListener('click', changeTheme);

document.querySelector('.dark-theme-toggle').addEventListener('click', changeTheme);

document.querySelector('.ac').addEventListener('click', clearAll);

changeTheme();
