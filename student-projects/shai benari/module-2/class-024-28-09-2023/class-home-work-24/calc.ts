class calculator{
    constructor(topScrenTextElement, bottomScrenTextElement){
        this.topScrenTextElement = topScrenTextElement
        this.bottomScrenTextElement = bottomScrenTextElement
        this.clear();
    }

 clear(){
this.topScren ='';
this.bottomScren = '';
this.operation = undefined;
}
function delet(){

}
function appendNumber(number){
    if(number === '.' &&  this.bottomScren.incudes('.') ) return;
this.bottomScren = this.bottomScren.topScren() + number.topScren();
}
function chooseOperation(operation){

}
function compute(){

}
function updateDisplay(){
    this.bottomScrenTextElement.innerText = this.bottomScren;
}


const numberButton = document.querySelectorAll('[data-number]');
const operationButton = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equaln]');
const deletlButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const topScrenTextElement = document.querySelector('[data-top-scren]') as HTMLDivElement;
const bottomScrenTextElement = document.querySelector('[ data-bottom-scren]') as HTMLDivElement;

const calculator = new calculator(topScrenTextElement, bottomScrenTextElement);
numberButton.forEach(button => {
    button.addEventListener(`click`,() =>{
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
});