document.addEventListener('DOMContentLoaded', () => {
	const infoContainer = document.querySelector('.info-container')

	if (infoContainer) {
		// Create circles and text properties dynamically
		for (let i = 0; i < 3; i++) {
			const circle = document.createElement('div')
			circle.className = 'info-container__info-circle'

			const textProperty = document.createElement('p')
			textProperty.className = 'info-container__info'

			// Define the text content based on the position
			switch (i) {
				case 0:
					textProperty.textContent = 'Name'
					break
				case 1:
					textProperty.textContent = 'Age'
					break
				case 2:
					textProperty.textContent = 'Company'
					break
				default:
					break
			}

			infoContainer.appendChild(circle)
			infoContainer.appendChild(textProperty)
		}
	}
})
