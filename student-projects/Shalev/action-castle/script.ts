let isAtHouse = true

function housePlace() {
	const wakeUpChoice = prompt(
		'You have just woken up in your house, what should you do?\n brush teeth\n eat\n go to garden\n go to work'
	)
	const wakeUpChoiceOptions = [
		'brush teeth',
		'eat',
		'go to garden',
		'go to work',
	]

	if (wakeUpChoice === null) {
		prompt('No choice detected. Exiting game.')
		return
	}

	if (wakeUpChoiceOptions.includes(wakeUpChoice)) {
		if (wakeUpChoice === 'brush teeth') {
			brushTeeth()
		} else if (wakeUpChoice === 'eat') {
			eat()
		} else if (wakeUpChoice === 'go to garden') {
			gardenPlace()
		} else if (wakeUpChoice === 'go to work') {
			workPlace()
		}
	} else {
		prompt('Invalid choice. Please choose from the provided options.')
	}
}

function brushTeeth() {
	prompt('You have now brushed your teeth')
}

function eat() {
	let chosenFood
	if (isAtHouse) {
		chosenFood = prompt(
			'Please select a food:\n banana\n apple\n omelette\n water'
		)
	} else {
		chosenFood = prompt(
			'Please select a food:\n coffee\n tea\n water\n banana\n apple\n sandwich'
		)
	}

	while (
		chosenFood === 'banana' ||
		chosenFood === 'apple' ||
		chosenFood === 'omelette' ||
		chosenFood === 'water' ||
		chosenFood === 'coffee' ||
		chosenFood === 'tea' ||
		chosenFood === 'sandwich'
	) {
		if (chosenFood === 'banana') {
			prompt('You have now eaten a banana')
		} else if (chosenFood === 'apple') {
			prompt('You have now eaten an apple')
		} else if (chosenFood === 'omelette') {
			prompt('You have now eaten an omelette')
		} else if (chosenFood === 'water') {
			prompt('You drank water')
		} else if (chosenFood === 'coffee') {
			prompt('You drank coffee')
		} else if (chosenFood === 'tea') {
			prompt('You drank tea')
		} else if (chosenFood === 'sandwich') {
			prompt('You have now eaten a sandwich')
		}
		break
	}
}

function gardenPlace() {
	prompt('You are in the garden.')
}

function workPlace() {
	prompt('You are at work.')
}

housePlace()
