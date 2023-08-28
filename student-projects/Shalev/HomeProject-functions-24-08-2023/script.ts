let isNumberEven = false

function foo(x: number) {
	if (x % 2 === 0) {
		setEven()
	} else {
		setOdd()
	}
}

function setEven() {
	isNumberEven = true
	alert('The number is even!')
}

function setOdd() {
	isNumberEven = false
	alert('The number is odd!')
}

function playGame() {
	const userInput = prompt('Please enter a number:')

	if (userInput === null) {
		alert('Input canceled. Exiting the game.')
		return
	}

	const userNumber = parseFloat(userInput)

	if (isNaN(userNumber)) {
		alert('Invalid input. Please enter a valid number.')
		playGame()
		return
	}

	foo(userNumber)

	const playAgain = confirm('Would you like to play again?')
	if (playAgain) {
		playGame()
	} else {
		alert('Thanks for playing!')
	}
}

playGame()

const playButton = document.querySelector('.button-container__btn')
if (playButton) {
	playButton.addEventListener('click', () => {
		playGame()
	})
}
