const title = document.querySelector<HTMLHeadingElement>(
	'.title-container__title'
)
const button = document.querySelector<HTMLButtonElement>(
	'.button-container__btn'
)

button?.addEventListener('click', (e) => {
	title!.style.color = 'red'
})
