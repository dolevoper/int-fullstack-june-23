const circleButton = document.querySelector('.circle-container__button')
const leftButton = document.querySelector<HTMLButtonElement>(
	'.circle-container__btn-left'
)
const middleButton = document.querySelector<HTMLButtonElement>(
	'.circle-container__btn-middle'
)
const rightButton = document.querySelector<HTMLButtonElement>(
	'.circle-container__btn-right'
)
const leftCircle = document.querySelector<HTMLDivElement>(
	'.circle-container__toothpaste-circle'
)
const middleCircle = document.querySelector<HTMLDivElement>(
	'.circle-container__potato-chips-circle'
)
const rightCircle = document.querySelector<HTMLDivElement>(
	'.circle-container__popcorn-circle'
)

let greenCircleInterval = 0

function toothpasteGreen() {
	if (greenCircleInterval !== 3) {
		leftCircle!.style.background = 'seagreen'
		leftButton?.removeEventListener('click', toothpasteGreen)
		greenCircleInterval += 1
	} else if (greenCircleInterval === 3) {
		console.log('All Products Assigned! Restarting Game')
	}
}

function potatoChipsGreen() {
	if (greenCircleInterval !== 3) {
		middleCircle!.style.background = 'seagreen'
		middleButton?.removeEventListener('click', potatoChipsGreen)
		greenCircleInterval += 1
	} else if (greenCircleInterval === 3) {
		console.log('All Products Assigned! Restarting Game')
	}
}

function popcornGreen() {
	if (greenCircleInterval !== 3) {
		rightCircle!.style.background = 'seagreen'
		rightButton?.removeEventListener('click', popcornGreen)
		greenCircleInterval += 1
	} else if (greenCircleInterval === 3) {
		console.log('All Products Assigned! Restarting Game')
	}
}

leftButton?.addEventListener('click', toothpasteGreen)
middleButton?.addEventListener('click', potatoChipsGreen)
rightButton?.addEventListener('click', popcornGreen)
