const playButton = document.querySelector<HTMLButtonElement>(
	'.button-container__btn'
)

playButton.addEventListener('click', (e) => {
	playGame()
})

function playGame() {
	const userRole = prompt(
		'Would you like to play as a buyer or manager? Type in "buyer" or "manager" to choose'
	)

	checkUserRole()

	function checkUserRole() {
		switch (userRole) {
			case 'buyer':
				playAsBuyer()
				break
			case 'manager':
				playAsManager()
				break
			case null:
				break
			case undefined:
				break
			default:
				break
		}
	}

	function playAsBuyer() {
		alert('Played as Buyer')
	}

	function playAsManager() {
		alert('Played as Manager')
	}
}

playGame()
