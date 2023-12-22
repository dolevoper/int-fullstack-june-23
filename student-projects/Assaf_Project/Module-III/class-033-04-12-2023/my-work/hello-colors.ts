import chalk from "chalk";

// console.log("hello", process.argv[2]);

// if (process.argv[2] === "assaf") {
//     console.log("hello", chalk.blueBright(process.argv[2]));
// } else {
//     console.log("hello", process.argv[2]);
// }

process.argv[2] === "assaf" ? console.log("hello", chalk.blueBright(process.argv[2])) : console.log("hello", process.argv[2]);

