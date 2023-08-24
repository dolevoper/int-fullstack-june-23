const a = Number(prompt("Enter length of leg a"));
const b = Number(prompt("Enter length of leg b"));
if(isNaN(a) || isNaN(b) || a <= 0 || b <= 0){
    alert("Please enter valid positive numbers for the lengths of legs.")
}else if (a < 0 || b < 0) {
    alert("Please enter valid non-negative numbers for the lengths of legs.")
} else {

const cSquared = a ** 2 + b ** 2;
const c = Math.sqrt(cSquared);

if (isNaN(c)) {
    alert("Please enter valid numbers.");
} else {
    alert("The length of the hypotenuse is: " + c);
}
}

// 1. Validate negative numbers
// 2. Validate empty strings
// 3. Validate click on cancel
// 4. Stop running if first number is invalid (show validation messages for first/second number)