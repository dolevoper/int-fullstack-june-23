const title = document.querySelector<HTMLHeadingElement>(
	'.title-container__title'
)
const buttonRED = document.querySelector<HTMLButtonElement>(
	'.button-container-red__btn'
)
const buttonWHITE = document.querySelector<HTMLButtonElement>(
	'.button-container-white__btn'
)

buttonRED?.addEventListener('click', (e) => {
	if (title?.className !== 'isRed') {
		title!.style.color = 'red'
		title?.classList.add('isRed')
	} else {
		console.log('ERR.')
	}
})
buttonWHITE?.addEventListener('click', (e) => {
	if (title?.className !== 'isWhite') {
		title!.style.color = 'white'
		title!.classList.add('isWhite')
	} else {
		console.log('ERR.')
	}
})
