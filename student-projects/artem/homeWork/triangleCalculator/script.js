const element = document.querySelector('.calculator__calculate');
// console.log(element);

element.addEventListener('click', function (){

    const sideA = document.getElementById('sideA').value;
    const sideB = document.getElementById('sideB').value;

    // console.log(sideA, sideB)
    
    if (sideA === 0 || sideB === 0) {
        result = 'Such triangle does not exist';     
    } else {
       const calcResult = Math.sqrt(sideA*sideA + sideB*sideB);
       const finalCalcResult = Math.floor(calcResult) === calcResult? calcResult: calcResult.toFixed(2);
       result = `The length of hypotenuse is ${finalCalcResult}.` ;
    }

    document.querySelector('#result').innerHTML = result;
    
})