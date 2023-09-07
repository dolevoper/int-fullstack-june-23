alert("Superheroes list!");

const heroes = [
	"Aquaman",
	"Asterix",
	"The Atom",
	"Batgirl",
	"Batman",
	"Batwoman",
	"Black Canary",
	"Black Panther",
];
function getRandomHero() {
	const randomHero = Math.floor(Math.random() * heroes.length);

	return heroes[randomHero];
}

const herosList = document.querySelector(
	".superheroes_list"
) as HTMLUListElement;

function createHero() {
	const heroItem = document.createElement("li");
	heroItem.innerText = getRandomHero();

	const heroImage = document.createElement("img") as HTMLImageElement;
	heroImage.src = "hero.png";
	heroImage.setAttribute("width", "32px");
	heroImage.setAttribute("height", "32px");
	heroItem.append(heroImage);

	herosList.append(heroItem);
}

function populateHeros(amount: number) {
	for (let i = 0; i < amount; i++) {
		createHero();
	}
}

populateHeros(5);
