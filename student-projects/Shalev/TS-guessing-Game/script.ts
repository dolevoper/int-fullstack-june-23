const easySecretNumber = Math.floor(Math.random() * 10) + 1
const hardSecretNumber = Math.floor(Math.random() * 100) + 1
const impossibleSecretNumber = Math.floor(Math.random() * 1000) + 1

const userDifficulty = prompt(
	'Please choose a difficulty: [Easy] [Hard] [Impossible]'
)

if (userDifficulty == 'Easy') {
	const userAnswer = prompt('Please guess the chosen number (1, 10)')

	if (
		userAnswer !== null &&
		userAnswer !== '' &&
		!isNaN(Number(userAnswer)) &&
		parseInt(userAnswer) > 0
	) {
		const guessedNumber = parseInt(userAnswer)

		if (guessedNumber === easySecretNumber) {
			alert('Congratulations! You guessed the secret number!')
		} else {
			alert(
				'Oops! Your guess is incorrect. The secret number was: ' +
					easySecretNumber
			)

			if (guessedNumber > easySecretNumber) {
				alert('Your guess was too high!')
			}

			if (guessedNumber < easySecretNumber) {
				alert('Your guess was too low!')
			}
		}
	} else {
		alert('Invalid input. Please enter a valid positive integer.')
	}
} else if (userDifficulty == 'Hard') {
	const userAnswer = prompt('Please guess the chosen number (1, 100)')

	if (
		userAnswer !== null &&
		userAnswer !== '' &&
		!isNaN(Number(userAnswer)) &&
		parseInt(userAnswer) > 0
	) {
		const guessedNumber = parseInt(userAnswer)

		if (guessedNumber === hardSecretNumber) {
			alert('Congratulations! You guessed the secret number!')
		} else {
			alert(
				'Oops! Your guess is incorrect. The secret number was: ' +
					hardSecretNumber
			)

			if (guessedNumber > hardSecretNumber) {
				alert('Your guess was too high!')
			}

			if (guessedNumber < hardSecretNumber) {
				alert('Your guess was too low!')
			}
		}
	} else {
		alert('Invalid input. Please enter a valid positive integer.')
	}
} else if (userDifficulty == 'Impossible') {
	const userAnswer = prompt('Please guess the chosen number (1, 1000)')

	if (
		userAnswer !== null &&
		userAnswer !== '' &&
		!isNaN(Number(userAnswer)) &&
		parseInt(userAnswer) > 0
	) {
		const guessedNumber = parseInt(userAnswer)

		if (guessedNumber === impossibleSecretNumber) {
			alert('Congratulations! You guessed the secret number!')
		} else {
			alert(
				'Oops! Your guess is incorrect. The secret number was: ' +
					impossibleSecretNumber
			)

			if (guessedNumber > impossibleSecretNumber) {
				alert('Your guess was too high!')
			}

			if (guessedNumber < impossibleSecretNumber) {
				alert('Your guess was too low!')
			}
		}
	} else {
		alert('Invalid input. Please enter a valid positive integer.')
	}
}
