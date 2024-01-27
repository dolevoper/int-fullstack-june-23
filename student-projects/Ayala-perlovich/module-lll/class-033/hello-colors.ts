import chalk from "chalk";
console.log(chalk.greenBright `hello Ayala`);
console.log(chalk.redBright `hello everyone`);
console.log(chalk.blueBright `hello everyone`);
console.log(chalk.bgGray `hello everyone`);
// console.log("hello world");

const number = 1 + 5;

console.log(`Here is a number: ${number}`);

// Doesn't work in node!
// localStorage.setItem("omer", "5");
// console.log(localStorage.getItem("omer"));

console.log(process.argv);
console.log("hello", process.argv[2]);