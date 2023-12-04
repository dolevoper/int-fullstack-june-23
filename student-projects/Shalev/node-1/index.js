function addNumbers(num1, num2) {
	return num1 + num2
}

function handleArguments() {
	const args = process.argv.slice(2)

	if (args.length === 0) {
		console.log("Hello, World!")
	} else if (args.length === 1) {
		const num = parseFloat(args[0])
		console.log(`You only provided one number: ${num} but we need 2!`)
	} else if (args.length === 2) {
		const num1 = parseFloat(args[0])
		const num2 = parseFloat(args[1])

		if (isNaN(num1) || isNaN(num2)) {
			console.error("Please provide valid numbers for addition!")
		} else {
			console.log("Hello, World!")
			const sum = addNumbers(num1, num2)
			console.log(`${num1} and ${num2} is: ${sum}!`)
		}
	} else {
		console.error("We only need 2 numbers!")
	}
}
handleArguments()
