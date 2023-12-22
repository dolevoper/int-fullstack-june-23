const sideA = Number(window.prompt("Please enter the length of the first side of a right triangle"));
const sideB = Number(window.prompt("Please enter the length of the second side of a right triangle"));
const sideC = Number(window.prompt("Please enter the length of the third side of a right triangle"));

const arrSides = [sideA, sideB, sideC].sort((a, b) => (a - b))
// console.log(arrSides);


if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
    alert('Please enter numbers only....');
} else {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
        alert('Please enter a valid numbers only....');
    } else {
        const result = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
        if (result === sideC) {
            alert('A right triangle with such sides can exist.')
        } else {
            alert("A right triangle with such sides cannot exist.")
        }
    }
}
