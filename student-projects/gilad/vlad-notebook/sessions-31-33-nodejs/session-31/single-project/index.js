console.log("\n\nWelcome to Vlad's first nodejs project!");

const firstNumber = process.argv[2];
const secondNumber = process.argv[3];

console.log(
	`\n===========\n${firstNumber} + ${secondNumber} = ${
		firstNumber + secondNumber
	}\n===========\n\n`
);
