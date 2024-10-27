import { trimLeadingZeroes } from './utils.js';
import { sum, minus, divison, myltiply, percent } from './calculator.js';
import '../style/style.css';

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
  if (firstNumberInput != '' && operator === '') {
    firstNumberInput = +firstNumberInput * -1;
    resultOutputElement.textContent = firstNumberInput;
  } else if (secondNumberInput != '' && operator != '') {
    secondNumberInput = +secondNumberInput * -1;
    resultOutputElement.textContent = secondNumberInput;
  }
}

function dotSign() {
  if (
    firstNumberInput != '' &&
    operator === '' &&
    !firstNumberInput.includes('.')
  ) {
    firstNumberInput += '.';
    resultOutputElement.textContent = firstNumberInput;
  } else if (
    secondNumberInput != '' &&
    operator != '' &&
    !secondNumberInput.includes('.')
  ) {
    secondNumberInput += '.';
    resultOutputElement.textContent = secondNumberInput;
  }
}

function selectOperator(event) {
  const sign = event.target.textContent;
  operator = opereations.get(sign);
  resultOutputElement.textContent += sign;
}

function calculate() {
  firstNumberInput = operator(+firstNumberInput, +secondNumberInput);
  resultOutputElement.textContent = firstNumberInput;
  operator = undefined;
  secondNumberInput = '';
}

function changeTheme() {
  document.body.className =
    document.body.className === DARK_THEME_CLASS
      ? LIGHT_THEME_CLASS
      : DARK_THEME_CLASS;
}

function addDigit(event) {
  const presstKey = event.target.textContent;

  if (operator) {
    secondNumberInput += presstKey;
    resultOutputElement.textContent = secondNumberInput;
  } else {
    firstNumberInput += presstKey;
    resultOutputElement.textContent = firstNumberInput;
  }

  resultOutputElement.textContent = trimLeadingZeroes(
    resultOutputElement.textContent,
  );
}

document.querySelectorAll('.digit').forEach((e) => {
  e.addEventListener('click', addDigit);
});

document.querySelectorAll('.operation').forEach((e) => {
  e.addEventListener('click', selectOperator);
});

document.querySelector('.plus-minus').addEventListener('click', negateSign);

document.querySelector('.equal').addEventListener('click', calculate);

document.querySelector('.dot').addEventListener('click', dotSign);

document.querySelector('.theme').addEventListener('click', changeTheme);

document.querySelector('.ac').addEventListener('click', clearAll);

changeTheme();
