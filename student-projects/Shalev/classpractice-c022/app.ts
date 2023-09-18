const counter = document.querySelector<HTMLDivElement>('.counter')
const counterText =
	document.querySelector<HTMLParagraphElement>('.counter__text')

// Check if counter data exists in session storage
const savedCounter = sessionStorage.getItem('counterValue')

// Initialize the counter with the saved value or 0 if no value is found
let counterInterval = savedCounter ? parseInt(savedCounter, 10) : 0

// Function to update the counter display and session storage
function updateCounter() {
	counterText!.innerText = counterInterval.toString()
	// Update the value in session storage
	sessionStorage.setItem('counterValue', counterInterval.toString())
}

// Initialize the counter display
updateCounter()

counter?.addEventListener('click', () => {
	counterInterval += 1
	// Update the counter display and session storage
	updateCounter()
})
