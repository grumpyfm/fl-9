import {addition, subtraction, multiplication, division} from './calculating-module';
import {getResult} from './output-module';

let result;
let frazeToCalculate;
let outputSigns = ['/', '0', '*', '+', '-'];

let calcBody = document.createElement('div');
calcBody.className = 'calculatorElements';
let body = document.querySelector('body');
body.appendChild(calcBody);

//input creation
export let input = document.createElement('input');
input.id = 'NumbInput';
input.value = '';
input.type = 'text';
input.addEventListener('submit', function (event) {
    event.preventDefault();
});

//ResultButton creation
let resultButton = document.createElement('div');
resultButton.id = 'resultButton';
resultButton.className = 'calcElement';
resultButton.innerHTML = '=';
resultButton.addEventListener('click', function (event) {
    event.preventDefault();
    preparationToCalculating();
});

//CleanButton creation
let cleanButton = document.createElement('div');
cleanButton.id = 'cleanButton';
cleanButton.className = 'calcElement';
cleanButton.innerHTML = 'C';
cleanButton.addEventListener('click', function (event) {
    event.preventDefault();
    input.value = '';
});

//adding Elements on page
calcBody.appendChild(input);
createNumberElement();
createSignElement();
calcBody.appendChild(cleanButton);
calcBody.appendChild(resultButton);


function createNumberElement() {
    for (let i = 1; i <= 9; i++) {
        let number = document.createElement('div');
        number.className = 'numberElement calcElement';
        number.innerHTML = i;
        calcBody.appendChild(number);
        number.addEventListener('click', function () {
            input.value = input.value + i;
        });
    }
}

function createSignElement() {
    for (let i = 0; i < outputSigns.length; i++) {
        let sign = document.createElement('div');
        sign.className = 'signElement calcElement';
        sign.innerHTML = outputSigns[i];
        calcBody.appendChild(sign);
        sign.addEventListener('click', function () {
            input.value = input.value + outputSigns[i];
        });
    }
}

function preparationToCalculating() {
    frazeToCalculate = input.value;
    let numbers = frazeToCalculate.split(/[\s*/+-]+/g);
    let signs = frazeToCalculate.split(/[0-9]/g);
    let sign = signs.filter(function (el) {
        return el !== '';
    });
    let firstNumb = Number(numbers[0]);
    let secondNumb = Number(numbers[1]);
    doCalculation(firstNumb, secondNumb, sign);
}

function doCalculation(firstNumb, secondNumb, sign) {
    if (sign[0] === '+') {
        result = addition(firstNumb, secondNumb);
    } else if (sign[0] === '-') {
        result = subtraction(firstNumb, secondNumb);
    } else if (sign[0] === '*') {
        result = multiplication(firstNumb, secondNumb);
    } else if (sign[0] === '/') {
        result = division(firstNumb, secondNumb);
    } else {
        result = 'Wrong input';
    }
    getResult(result);
}
