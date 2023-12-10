console.log("hello world");

const number = 1 + 5;

console.log(`Here is a number: ${number}`);

// Doesn't work in node!
// localStorage.setItem("omer", "5");
// console.log(localStorage.getItem("omer"));

console.log(process.argv);
console.log("hello", process.argv[2]);