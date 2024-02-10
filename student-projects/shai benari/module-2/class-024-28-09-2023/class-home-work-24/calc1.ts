const topScren = document.querySelector('.top-scren');
const bottomScren = document.querySelector('.bottom-scren');
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtens =  document.querySelectorAll('[data-operation]');
const clearButton = document.querySelector('[data-all-clear]');
const deletButton = document.querySelector('[data-delete]');
const equalButton = document.querySelector('[data-equal]');

let calculation = [];
let acumeletCalculation

function calculate(button){
    const value = button.innerText;
    calculation.push(value);
    acumeletCalculation = calculation.join('');
    topScren.innerText = acumeletCalculation;

    console.log(acumeletCalculation);
}
function clearAll(){
    acumeletCalculation = [''];
    topScren.innerText = acumeletCalculation;
    calculation = [];
    bottomScren.innerText = '';
}
function deletOne(){
    acumeletCalculation = acumeletCalculation.slice(0,-1);
    topScren.innerText = acumeletCalculation;
    calculation = [];
    
}
function compute(){
    bottomScren.innerText = eval(acumeletCalculation);
}

numberButtons.forEach( button => button.addEventListener('click',() => calculate(button)));
operationButtens.forEach( button => button.addEventListener('click',() => calculate(button)));
clearButton.addEventListener('click',clearAll);
deletButton.addEventListener('click',deletOne);
equalButton.addEventListener('click',compute);


