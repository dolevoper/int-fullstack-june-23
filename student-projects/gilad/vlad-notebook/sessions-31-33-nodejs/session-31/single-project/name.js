import chalk from "chalk";
const name_argument = process.argv[2];
if (name_argument === "Vlad")
    console.log(chalk.cyan `${name_argument}`);
else
    console.log(name_argument);
