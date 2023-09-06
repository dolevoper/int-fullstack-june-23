var a = Number(prompt("Enter length of leg a"));
var b = Number(prompt("Enter length of leg b"));
if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
    alert("Please enter valid positive numbers for the lengths of legs.");
}
else if (a < 0 || b < 0) {
    alert("Please enter valid non-negative numbers for the lengths of legs.");
}
else {
    var cSquared = Math.pow(a, 2) + Math.pow(b, 2);
    var c = Math.sqrt(cSquared);
    if (isNaN(c)) {
        alert("Please enter valid numbers.");
    }
    else {
        alert("The length of the hypotenuse is: " + c);
    }
}
// 1. Validate negative numbers
// 2. Validate empty strings
// 3. Validate click on cancel
// 4. Stop running if first number is invalid (show validation messages for first/second number)
