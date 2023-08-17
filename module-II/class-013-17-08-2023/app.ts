// 1. Validate the individual numbers (negative numbers)
// 2. Validate empty strings
// 3. Validate click on cancel
// 4. Stop running if first number is invalid.

const a = Number(prompt("Enter length of leg a"));
const b = Number(prompt("Enter length of leg b"));
const cSquared = a ** 2 + b ** 2;
const c = Math.sqrt(cSquared);

if (isNaN(c)) {
    alert("Please enter valid numbers.");
} else {
    alert("The length of the hypotenuse is: " + c);
}

// comparison operators: >, <, ===, <=, >=, !== (, ==, !=)
// number -> number -> boolean
// const height = Number(prompt("Please enter your height (cm)"));
// const age = Number(prompt("Please enter your age"));
// const isTallEnough = height > 140;
// const isOldEnough = age > 12;
// const canRide = isTallEnough && isOldEnough; // AND

// if (isTallEnough && isOldEnough) {
//     alert("You can ride the roller-coaster!");
// } else {
//     alert("You shall not pass.");
// }

// if (!isTallEnough) {
//     alert("You are not tall enough to ride");
// } else if (!isOldEnough) {
//     alert("You are not old enough to ride");
// } else {
//     alert("Enjoy your ride!");
// }

// alert("always showing");

// const isSunday = true;
// const isMonday = true;
// const isWorkingDay = isSunday || isMonday; // OR
// alert("Is workday?\n" + isWorkingDay);
