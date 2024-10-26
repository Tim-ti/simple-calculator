let stringValueOfFirstNumber = '';
let stringValueOfSecondNumber = '';
const displaingResultOfCalculations = document.querySelector(
  '.calculator-screen p'
);
const calculatorTheme = document.body.classList;
let operators;

function trimLeadingZeroes(str) {
  const trimmed = str.replace(/^0+/, '');
  return trimmed === '' ? '0' : trimmed;
}

function clearAll() {
  stringValueOfFirstNumber = '';
  stringValueOfSecondNumber = '';
  operators = undefined;
  displaingResultOfCalculations.textContent = '';
}

function operatiorSelection(event) {
  const sign = event.target.textContent;
  operators = opereations.get(sign);
  displaingResultOfCalculations.textContent += sign;
}

function calculation() {
  stringValueOfFirstNumber = operators(
    +stringValueOfFirstNumber,
    +stringValueOfSecondNumber
  );
  displaingResultOfCalculations.textContent = stringValueOfFirstNumber;
  operators = undefined;
  stringValueOfSecondNumber = '';
}

function changesTheme() {
  if (calculatorTheme.contains('dark-theme')) {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  }
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

let opereations = new Map();
opereations.set('+', sum);
opereations.set('*', myltiply);
opereations.set('-', minus);
opereations.set('/', divison);
opereations.set('%', percent);

document.querySelector('.buttons').addEventListener('click', function (event) {
  if (!event.target.classList.contains('btn')) return;
  if (event.target.classList.contains('ac')) return;
  if (event.target.classList.contains('operation')) return;
  if (event.target.classList.contains('equal')) return;
  if (event.target.classList.contains('theme')) return;

  const presstKey = event.target.textContent;

  if (operators) {
    if (
      presstKey === '.' &&
      !displaingResultOfCalculations.textContent.includes('.')
    ) {
      stringValueOfSecondNumber += presstKey;
      displaingResultOfCalculations.textContent = stringValueOfSecondNumber;
    } else if (
      presstKey === '.' &&
      displaingResultOfCalculations.textContent.includes('.')
    ) {
      displaingResultOfCalculations.textContent += '';
    } else {
      stringValueOfSecondNumber += presstKey;
      displaingResultOfCalculations.textContent = stringValueOfSecondNumber;
    }
  } else {
    if (
      presstKey === '.' &&
      !displaingResultOfCalculations.textContent.includes('.')
    ) {
      stringValueOfFirstNumber += presstKey;
      displaingResultOfCalculations.textContent = stringValueOfFirstNumber;
    } else if (
      presstKey === '.' &&
      displaingResultOfCalculations.textContent.includes('.')
    ) {
      displaingResultOfCalculations.textContent += '';
    } else {
      stringValueOfFirstNumber += presstKey;
      displaingResultOfCalculations.textContent = stringValueOfFirstNumber;
    }
  }

  displaingResultOfCalculations.textContent = trimLeadingZeroes(
    displaingResultOfCalculations.textContent
  );
});
document.querySelectorAll('.operation').forEach((e) => {
  e.addEventListener('click', operatiorSelection);
});

document.querySelector('.equal').addEventListener('click', calculation);

document.querySelector('.theme').addEventListener('click', changesTheme);

document.querySelector('.ac').addEventListener('click', clearAll);
