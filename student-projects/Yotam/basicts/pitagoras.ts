const a = Number(prompt("please enter the length of the first leg"));
const b = Number(prompt("please enter the length of the second leg"));
const c = Number(prompt("please enter the length of the third leg"));

if (a * a + b * b === c * c || b * b + c * c === a * a || a * a + c * c === b * b) {
    alert("These sides can be used to form a right-angled triangle");
} else {
    alert("These sides cannot be used to form a right-angled triangle");
}
