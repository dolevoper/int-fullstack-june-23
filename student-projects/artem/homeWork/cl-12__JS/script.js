const sideA = Number(window.prompt("Side A"));
console.log(sideA, typeof(sideA));
const sideB = Number(window.prompt("Side B"));
console.log(sideB, typeof(sideB));
if ( isNaN(sideA) || isNaN(sideB)){
    alert('Please enter numbers only....');
} else{
    let result = Math.sqrt(sideA*sideA + sideB*sideB);
    alert(`The length of side C is equal to ${result}` );
}



