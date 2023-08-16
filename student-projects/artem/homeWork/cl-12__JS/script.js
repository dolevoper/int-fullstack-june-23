const sideA = Number(window.prompt("Please enter the length of first leg of a right triangle"));
// console.log(sideA, typeof(sideA));
const sideB = Number(window.prompt("Please enter the length of second leg of a right triangle"));
// console.log(sideB, typeof(sideB));

if ( isNaN(sideA) || isNaN(sideB)){
    alert('Please enter numbers only....');
} else if (sideA <= 0 || sideB <= 0) {
    alert('Such triangle is not exist');     
} else {
    const result = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
    alert(`The length of hypotenuse is to ${result}`);
}



