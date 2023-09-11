const draggableCard = document.getElementById('draggableCard') as HTMLElement

let offsetX: number
let offsetY: number
let isDragging = false

draggableCard.addEventListener('mousedown', (event) => {
	isDragging = true
	offsetX = event.clientX - draggableCard.getBoundingClientRect().left
	offsetY = event.clientY - draggableCard.getBoundingClientRect().top
	draggableCard.style.transition = 'none'
})

document.addEventListener('mousemove', (event) => {
	if (!isDragging) return

	const newX = event.clientX - offsetX
	const newY = event.clientY - offsetY

	draggableCard.style.transform = `translate(${newX}px, ${newY}px) rotate(10deg)`
})

document.addEventListener('mouseup', () => {
	if (isDragging) {
		isDragging = false
		draggableCard.style.transition = 'transform 0.3s ease'
		draggableCard.style.transform = 'none'
	}
})
