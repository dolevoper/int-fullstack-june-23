// const balloon1 = document.querySelector<HTMLDivElement>(
// 	'.balloons-container__b1'
// )
// const balloon2 = document.querySelector<HTMLDivElement>(
// 	'.balloons-container__b2'
// )
// const balloon3 = document.querySelector<HTMLDivElement>(
// 	'.balloons-container__b3'
// )
// const balloon4 = document.querySelector<HTMLDivElement>(
// 	'.balloons-container__b4'
// )
// const balloon5 = document.querySelector<HTMLDivElement>(
// 	'.balloons-container__b5'
// )

// let poppedBalloonsInterval = 0

// balloon1?.addEventListener('click', (e) => {
// 	balloon1.remove
// 	poppedBalloonsInterval += 1
// 	checkPoppedBalloons()
// 	balloon1.removeEventListener('click', (e) => {})
// })
// balloon2?.addEventListener('click', (e) => {
// 	balloon2.style.opacity = '0'
// 	poppedBalloonsInterval += 1
// 	checkPoppedBalloons()
// 	balloon2.removeEventListener('click', (e) => {})
// })
// balloon3?.addEventListener('click', (e) => {
// 	balloon3.style.opacity = '0'
// 	poppedBalloonsInterval += 1
// 	checkPoppedBalloons()
// 	balloon3.removeEventListener('click', (e) => {})
// })
// balloon4?.addEventListener('click', (e) => {
// 	balloon4.style.opacity = '0'
// 	poppedBalloonsInterval += 1
// 	checkPoppedBalloons()
// 	balloon4.removeEventListener('click', (e) => {})
// })
// balloon5?.addEventListener('click', (e) => {
// 	balloon5.style.opacity = '0'
// 	poppedBalloonsInterval += 1
// 	checkPoppedBalloons()
// 	balloon5.removeEventListener('click', (e) => {})
// })

// function checkPoppedBalloons() {
// 	if (poppedBalloonsInterval >= 5) {
// 		setTimeout(() => {
// 			alert('All Balloons Popped!')
// 		}, 100)
// 	}
// }

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
	const balloons = document.querySelectorAll('.balloons-container__balloon')

	// Function to handle balloon click event
	function balloonClickHandler(event: Event) {
		const balloon = event.currentTarget as HTMLElement
		balloon.remove() // Remove the clicked balloon

		// Check if all balloons are removed
		const remainingBalloons = document.querySelectorAll(
			'.balloons-container__balloon'
		)
		if (remainingBalloons.length === 0) {
			setTimeout(() => {
				alert('All balloons popped!')
			}, 100)
		}
	}

	// Add click event listener to each balloon
	balloons.forEach((balloon) => {
		balloon.addEventListener('click', balloonClickHandler)
	})
})
