class calculator{
    constructor(topScrenTextElement, bottomScrenTextElement){
        this.topScrenTextElement = topScrenTextElement
        this.bottomScrenTextElement = bottomScrenTextElement
        this.clear();
    }
}

clear(){
this.topScren ='';
this.bottomScren = '';
this.operation = undefined;
}
delet(){

}
appendNumber(number){
this.bottomScren = number;
}
chooseOperation(operation){

}
compute(){

}
updateDisplay(){
    this.bottomScrenTextElement.innerText = this.bottomScren;
}


const numberButton = document.querySelectorAll(`[data-number]`);
const operationButton = document.querySelectorAll(`[data-operation]`);
const equalButton = document.querySelector(`[data-equaln]`);
const deletlButton = document.querySelector(`[data-delete]`);
const allClearButton = document.querySelector(`[data-all-clear]`);
const topScrenTextElement = document.querySelector(`[data-top-scren]`) as HTMLDivElement;
const bottomScrenTextElement = document.querySelector(`[ data-bottom-scren]`) as HTMLDivElement;

const calculator = new calculator(topScrenTextElement, bottomScrenTextElement);
numberButton.forEach(button => {
    button.addEventListener(`click`,() =>){
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    }
});