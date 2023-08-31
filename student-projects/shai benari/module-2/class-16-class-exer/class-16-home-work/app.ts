// enter a number targetNumber
// make suer its a positiv number 
// call function "wholeNumber" 
// make loop from 1 to targetNumber
// put all whole nubers in an array
// print all the whole numbers array
let output = [];
const targetNumber =Number(prompt("enter a target number"));
wholeNumber(targetNumber);
alert(output);

function wholeNumber(targetNumber:number){
    for (let i=1; i <=targetNumber; i++){
    output.push(i);
    }
    return(output);
}
