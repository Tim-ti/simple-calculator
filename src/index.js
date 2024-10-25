let firstNumber = '';
let secondNumber = '';
const result = document.querySelector('.calc-screen p');
const calc = document.querySelector('.calc ');
const calcScreen = document.querySelector('.calc-screen ');
const theme = document.querySelector('.theme');
const btn = document.querySelectorAll('.btn');

let operation;

function trimLeadingZeroes(str) {
  const trimmed = str.replace(/^0+/, '');
  return trimmed === '' ? '0' : trimmed;
}

function clearAll() {
  firstNumber = '';
  secondNumber = '';
  operation = undefined;
  result.textContent = '';
}

function sum(a, b) {
  return a + b;
}
function myltiply(a, b) {
  return a * b;
}
function divison(a, b) {
  return a / b;
}
function minus(a, b) {
  return a - b;
}
function percent(a, b) {
  return (a * b) / 100;
}

var opereations = new Map();
opereations.set('+', sum);
opereations.set('*', myltiply);
opereations.set('-', minus);
opereations.set('/', divison);
opereations.set('%', percent);

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
  if (!event.target.classList.contains('btn')) return;
  if (event.target.classList.contains('ac')) return;
  if (event.target.classList.contains('operation')) return;
  if (event.target.classList.contains('equal')) return;
  if (event.target.classList.contains('theme')) return;

  const pressKey = event.target.textContent;

  if (operation) {
    if (pressKey === '.' && result.textContent.includes('.') === false) {
      secondNumber += pressKey;
      result.textContent = secondNumber;
    } else if (pressKey === '.' && result.textContent.includes('.') === true) {
      result.textContent += '';
    } else {
      secondNumber += pressKey;
      result.textContent = secondNumber;
    }
  } else {
    if (pressKey === '.' && result.textContent.includes('.') === false) {
      firstNumber += pressKey;
      result.textContent = firstNumber;
    } else if (pressKey === '.' && result.textContent.includes('.') === true) {
      result.textContent += '';
    } else {
      firstNumber += pressKey;
      result.textContent = firstNumber;
    }
  }

  result.textContent = trimLeadingZeroes(result.textContent);
};
document.querySelectorAll('.operation').forEach((e) => {
  e.onclick = (event) => {
    const sign = event.target.textContent;
    operation = opereations.get(sign);
    result.textContent += sign;
  };
});

document.querySelector('.equal').onclick = () => {
  firstNumber = operation(+firstNumber, +secondNumber);
  result.textContent = firstNumber;
  operation = undefined;
  secondNumber = '';
};

document.querySelector('.theme').onclick = () => {
  if (theme.textContent === '🌞') {
    for (let i = 0; i < btn.length; i++) {
      if (btn[i].classList.contains('bg-white')) {
        btn[i].classList.remove('bg-white');
        btn[i].classList.add('bg-dark');
      } else if (btn[i].classList.contains('bg-green')) {
        btn[i].classList.remove('bg-green');
        btn[i].classList.add('bg-orange');
      } else {
        btn[i].classList.remove('bg-white-grey');
        btn[i].classList.add('bg-grey');
      }
    }
    calc.classList.remove('white');
    calc.classList.add('dark');
    calcScreen.classList.remove('white-screen');
    calcScreen.classList.add('dark-screen');
    theme.textContent = '🌙';
  } else if (theme.textContent === '🌙') {
    for (let i = 0; i < btn.length; i++) {
      if (btn[i].classList.contains('bg-dark')) {
        btn[i].classList.remove('bg-dark');
        btn[i].classList.add('bg-white');
      } else if (btn[i].classList.contains('bg-orange')) {
        btn[i].classList.remove('bg-orange');
        btn[i].classList.add('bg-green');
      } else {
        btn[i].classList.remove('bg-grey');
        btn[i].classList.add('bg-white-grey');
      }
    }
    calc.classList.remove('dark');
    calc.classList.add('white');
    calcScreen.classList.remove('dark-screen');
    calcScreen.classList.add('white-screen');
    theme.textContent = '🌞';
  }
};
