console.log("\n\nWelcome to Vlad's first nodejs project!");
const firstNumber = Number(process.argv[2]);
const secondNumber = Number(process.argv[3]);
const result = firstNumber + secondNumber;
console.log(`\n===========\n${firstNumber} + ${secondNumber} = ${result}\n===========\n\n`);
export {};
