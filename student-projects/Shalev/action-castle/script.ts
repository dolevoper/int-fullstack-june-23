let isAtHouse = true
function housePlace() {
	const wakeUpChoice = prompt(
		'You have just woken up in your house, what should you do?\n BRUSH TEETH\n EAT\n GO TO GARDEN\n GO TO WORK'
	)
	const wakeUpChoiceOptions = [
		'BRUSH TEETH',
		'EAT',
		'GO TO GARDEN',
		'GO TO WORK',
	]

	if (wakeUpChoice === null) {
		console.log('No choice detected. Exiting game.')
		return
	}

	if (wakeUpChoiceOptions.includes(wakeUpChoice)) {
		if (wakeUpChoice === 'BRUSH TEETH') {
			brushTeeth()
		} else if (wakeUpChoice === 'EAT') {
			eat()
		} else if (wakeUpChoice === 'GO TO GARDEN') {
			gardenPlace()
		} else if (wakeUpChoice === 'GO TO WORK') {
			workPlace()
		}
	} else {
		console.log('Invalid choice. Please choose from the provided options.')
	}
}

function brushTeeth() {
	prompt('You have now brushed your teeth')
}

function eat() {
	if (isAtHouse) {
		const chosenFood = prompt(
			'Please select a food:\n BANANA\n APPLE\n OMELETTE\n WATER'
		)
	} else {
		const chosenFood = prompt(
			'Please select a food:\n COFFEE\n TEA\n WATER\n BANANA\n APPLE\n SANDWITCH'
		)
	}
}

function gardenPlace() {
	// Implementation for the gardenPlace function
}

function workPlace() {
	// Implementation for the workPlace function
}
