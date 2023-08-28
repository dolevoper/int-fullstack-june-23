const a = Number(prompt("Please enter the 1st length:"));
if (isNaN(a)) {
    alert("Please enter numbers only");
    throw '';
}
if (a <= 0) {
    alert("Please enter positive numbers only");
    throw '';
}
const b = Number(prompt("Please enter the 2nd length:"));
if (isNaN(b)) {
    alert("Please enter numbers only");
    throw '';
}
if (b <= 0) {
    alert("Please enter positive numbers only");
    throw '';
}
const c = Number(prompt("Please enter the 3rd length:"));
if (isNaN(c)) {
    alert("Please enter numbers only");
    throw '';
}
if (c <= 0) {
    alert("Please enter positive numbers only");
    throw '';
}
if ((a ** 2 + b ** 2 === c ** 2) || (a ** 2 + c ** 2 === b ** 2) || (c ** 2 + b ** 2 === a ** 2)) {
    alert("This is a right triangle! 📐");
} else {
    alert("This is not a right triangle 🥺");
}