function playGame() {
	const balloon1 = document.querySelector<HTMLDivElement>(
		'.balloons-container__balloon1'
	)
	const balloon2 = document.querySelector<HTMLDivElement>(
		'.balloons-container__balloon2'
	)
	const balloon3 = document.querySelector<HTMLDivElement>(
		'.balloons-container__balloon3'
	)

	let ammountOfHiddenBalloons = 0

	balloon1?.addEventListener('click', function hideBalloons() {
		balloon1.classList.add('hidden')
		ammountOfHiddenBalloons += 1
		checkBalloons()
		balloon1.removeEventListener('click', hideBalloons)
	})
	balloon2?.addEventListener('click', function hideBalloons() {
		balloon2.classList.add('hidden')
		ammountOfHiddenBalloons += 1
		checkBalloons()
		balloon2.removeEventListener('click', hideBalloons)
	})
	balloon3?.addEventListener('click', function hideBalloons() {
		balloon3.classList.add('hidden')
		ammountOfHiddenBalloons += 1
		checkBalloons()
		balloon3.removeEventListener('click', hideBalloons)
	})

	function checkBalloons() {
		if (ammountOfHiddenBalloons >= 3) {
			removeAllHiddens()
			playGame()
		}
	}

	function removeAllHiddens() {
		balloon1?.classList.remove('hidden')
		balloon2?.classList.remove('hidden')
		balloon3?.classList.remove('hidden')
	}
	checkBalloons()

	function checkHiddenBalloons() {
		if (
			balloon1?.className.includes('hidden') === false &&
			balloon2?.className.includes('hidden') === false &&
			balloon3?.className.includes('hidden') === false
		) {
			balloon1.classList.remove('hidden')
			balloon2.classList.remove('hidden')
			balloon3.classList.remove('hidden')
		}
	}
}

playGame()
