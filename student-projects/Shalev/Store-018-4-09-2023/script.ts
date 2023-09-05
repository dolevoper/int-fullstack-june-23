const playButton = document.querySelector<HTMLButtonElement>(
	'.button-container__btn'
)

playButton.addEventListener('click', (e) => {
	playGame()
})

function playGame() {
	const userRole = prompt(
		'Would you like to play as a buyer or manager?\n Type in "buyer" or "manager" to choose'
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
		const milk = {
			name: 'milk',
			price: 3.99,
			available: true,
		}
		const apple = {
			name: 'apple',
			price: 7.99,
			available: true,
		}
		const banana = {
			name: 'banana',
			price: 5.99,
			available: false,
		}
		const wantedItem = prompt(
			'Buyer it is! Which item would you like to buy?\n [milk] [apple] [banana] (type name to select)'
		)

		switch (wantedItem) {
			case 'milk':
				if (milk.available) {
					const confirmPurchase = alert(
						'The milk is available and you will be charged $' +
							milk.price +
							' for it'
					)
				} else {
					alert('Milk not available. Exiting game')
				}

			case 'apple':
				if (apple.available) {
					const confirmPurchase = alert(
						'The apple is available and you will be charged $' +
							apple.price +
							' for it'
					)
				} else {
					alert('apple not available. Exiting game')
				}

			case 'banana':
				if (banana.available) {
					const confirmPurchase = alert(
						'The apple is available and you will be charged $' +
							banana.price +
							' for it'
					)
				} else {
					alert('banana not available. Exiting game')
				}
			case null:
				alert(
					'You have selected a product that is not in our store currently. Exiting game'
				)
			case undefined:
				alert(
					'You have selected a product that is not in our store currently. Exiting game'
				)
			default:
				alert(
					'You have selected a product that is not in our store currently. Exiting game'
				)
		}
	}

	function playAsManager() {
		alert('Manager selected. Proceeding with game as Manager')
	}
}

playGame()
