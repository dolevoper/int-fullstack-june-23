const shape = prompt('Please enter shape [Square] [Rectangle] [Circle]')

if (shape == 'Square' || 'Rectangle' || 'Circle') {
	if (shape == 'Square') {
		const a = Number(prompt('Enter lengh of leg a'))
		const b = Number(prompt('Enter length of leg b'))
		const Square = a * b
		alert('The answer is ' + Square)
	}

	if (shape == 'Rectangle') {
		const a = Number(prompt('Enter lengh of leg a'))
		const b = Number(prompt('Enter length of leg b'))
		const Rectangle = a * b
		alert('The answer is ' + Rectangle)
	}

	if (shape == 'Circle') {
		const a = Number(prompt('Enter lengh of leg a'))
		const b = Number(prompt('Enter length of leg b'))
		const circle = a * b
		alert('The answer is ' + circle)
	}
}

if (shape != 'Square' && 'Rectangle' && 'Circle') {
	alert('ERR: Unknown {shape} defined. Exit code 1')
}
