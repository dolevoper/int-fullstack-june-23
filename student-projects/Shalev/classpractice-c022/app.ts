const counter = document.querySelector<HTMLDivElement>('.counter')
const counterText =
	document.querySelector<HTMLParagraphElement>('.counter__text')

const savedCounter = sessionStorage.getItem('counterValue')

let counterInterval = savedCounter ? parseInt(savedCounter, 10) : 0

function updateCounter() {
	counterText!.innerText = counterInterval.toString()
	sessionStorage.setItem('counterValue', counterInterval.toString())
}

updateCounter()

counter?.addEventListener('click', () => {
	counterInterval += 1
	updateCounter()
})
