// 1. Validate negative numbers
// 2. Validate empty strings
// 3. Validate click on cancel
// 4. Stop running if first number is invalid (show validation messages for first/second number)

const n1 = Number(prompt("Enter the first number"));
const n2 = Number(prompt("Enter the second number"));



if ( n1 < 1 ) {
    alert("first number is not larger than 0");
} else if  (isNaN(n1)) {
    alert("first number i");
}


if ( n2 < 1 ) {
    alert("first number is not larger than 0");
} else if  (isNaN(n2)) {
    alert("first number i");
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
