const a = Number(prompt("Enter length of leg a"));
const b = Number(prompt("Enter length of leg b"));
const cSquared = a ** 2 + b ** 2;
const c = Math.sqrt(cSquared);

if (c<5) {
  alert ("please enter a different number");
} else if (c>10) {
  alert ("ok ok");
} else {
  alert ("The length og the hypotenue is: " + c);
}



