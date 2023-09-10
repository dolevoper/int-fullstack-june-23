import { Food, foodList } from "./AnimalDiet.js";
import {
	AnimalType,
	Gender,
	animalTypes,
	gorilla,
	penguin,
} from "./AnimalType.js";
import { Biome } from "./Cage.js";
import { List } from "./List.js";
import { AnimalElement, getAnimalImageByType } from "./AnimalElement.js";
import { Animal } from "./Animal.js";

export class UIManager {
	constructor() {}

	initMainUI() {}
}

function getMenuButton(): HTMLElement {
	console.log("Getting main menu button...");
	return document.querySelector(".js-menu-button-main") as HTMLElement;
}

function getMenuAnimalsButton(): HTMLElement {
	return document.querySelector(".js-menu-button-animals") as HTMLElement;
}

function getMenuCagesButton(): HTMLElement {
	return document.querySelector(".js-menu-button-cages") as HTMLElement;
}

function getMenuFoodButton(): HTMLElement {
	return document.querySelector(".js-menu-button-food") as HTMLElement;
}

function getMenu(): HTMLElement {
	return document.querySelector(".js-menu") as HTMLElement;
}

function getMenuList(menuList: HTMLElement): HTMLUListElement {
	return menuList.querySelector(".js-menu-list") as HTMLUListElement;
}

function createMenuListItem(
	title: string,
	imgUrl: string,
	infoIcon?: string
): HTMLElement {
	const elementAnimalItem = document.createElement("li");
	elementAnimalItem.classList.add("ui-menu__item");
	elementAnimalItem.classList.add("js-menu-list-item");

	const card_perfix = "object-card";

	const elementCard = document.createElement("div") as HTMLDivElement;
	elementCard.classList.add(card_perfix);

	const elementCardInfo = document.createElement("div") as HTMLDivElement;
	elementCardInfo.classList.add(card_perfix + "__info");

	const elementCardTitle = document.createElement("h3") as HTMLHeadElement;
	elementCardTitle.classList.add(card_perfix + "__title");
	elementCardTitle.innerText = title;

	const elementCardImage = document.createElement("img") as HTMLImageElement;
	elementCardImage.classList.add(card_perfix + "__img");
	elementCardImage.src = imgUrl;

	elementCardInfo.append(elementCardTitle);

	if (infoIcon) {
		const elementCardInfoIcon = document.createElement("div") as HTMLDivElement;
		elementCardInfoIcon.classList.add(card_perfix + "__info-icon");
		elementCardInfoIcon.classList.add(card_perfix + "__info-icon--" + infoIcon);
		elementCardInfo.append(elementCardInfoIcon);
	}

	elementCard.append(elementCardInfo);
	elementCard.append(elementCardImage);

	elementAnimalItem.append(elementCard);

	return elementAnimalItem;
}

function createMenuListItemAnimal(type: AnimalType): HTMLElement {
	const title = type.getName();
	const dietName = type.getDiet().getName().toLowerCase();
	const imageURL = getAnimalImageByType(type);

	return createMenuListItem(title, imageURL, dietName);
}

function createMenuListItemCage(biome: Biome): HTMLElement {
	const title = Biome[biome];
	const imageURL = getImageByBiomeType(biome);

	return createMenuListItem(title, imageURL);
}

function createMenuListItemFood(food: Food): HTMLElement {
	const title = food.name;
	const imageURL = getImageByFoodType(food);
	const dietName = food.getAnimalDiet().getName().toLowerCase();
	return createMenuListItem(title, imageURL, dietName);
}

function getImageByBiomeType(biome: Biome) {
	const biomeName = Biome[biome];
	return `./assets/cage/cage-${biomeName}.svg`;
}
function getImageByFoodType(food: Food) {
	const foodName = food.name.toLowerCase();
	return `./assets/food/${foodName}.svg`;
}

function initExpandableMenu(
	animalsList: List<HTMLElement>,
	biomesList: List<HTMLElement>,
	foodList: List<HTMLElement>
) {
	const menuMainButton = getMenuButton();

	const menuAnimalsButton = getMenuAnimalsButton();
	const menuCagesButton = getMenuCagesButton();
	const menuFoodButton = getMenuFoodButton();

	const menu = getMenu();
	const menuList = getMenuList(menu);
	menu.hidden = true;

	const expandableButtons = document.querySelector(
		".js-expandable-buttons"
	) as HTMLElement;
	expandableButtons.hidden = true;

	menuAnimalsButton.addEventListener("click", (e) => {
		menuList.innerHTML = "";
		animalsList.forEach((animal) => {
			menuList.appendChild(animal);
		});
		menu.hidden = false;
	});

	menuCagesButton.addEventListener("click", (e) => {
		menuList.innerHTML = "";
		biomesList.forEach((biome) => {
			menuList.appendChild(biome);
		});
		menu.hidden = false;
	});

	menuFoodButton.addEventListener("click", (e) => {
		menuList.innerHTML = "";
		foodList.forEach((food) => {
			menuList.appendChild(food);
		});
		menu.hidden = false;
	});

	menuMainButton.addEventListener("click", (e) => {
		menu.hidden = true;
		expandableButtons.hidden = !expandableButtons.hidden;
	});

	window
		.matchMedia("(orientation: portrait)")
		.addEventListener("change", function (e) {
			menu.hidden = true;
			expandableButtons.hidden = true;
		});
}

const biomesMenuItems = new List<HTMLElement>("Biomes UI Items");

biomesMenuItems.add(createMenuListItemCage(Biome.dessert));
biomesMenuItems.add(createMenuListItemCage(Biome.mudland));
biomesMenuItems.add(createMenuListItemCage(Biome.tundra));
biomesMenuItems.add(createMenuListItemCage(Biome.grassland));
biomesMenuItems.add(createMenuListItemCage(Biome.forest));

const animalsMenuItems = new List<HTMLElement>("Animals UI Items");
animalTypes.forEach((type) => {
	animalsMenuItems.add(createMenuListItemAnimal(type));
});

const foodMenuItems = new List<HTMLElement>("Food UI Items");
foodList.forEach((food) => {
	foodMenuItems.add(createMenuListItemFood(food));
});

initExpandableMenu(animalsMenuItems, biomesMenuItems, foodMenuItems);

// ANIMALS CREATION

const zoo = document.querySelector(".zoo") as HTMLElement;
console.log(zoo);
const animal = new AnimalElement(
	new Animal(0, "Yulia", Gender.Female, penguin)
);
const animalB = new AnimalElement(new Animal(0, "Vlad", Gender.Male, gorilla));
console.log("Adding animal:");
console.log(animal.getAnimal());
console.log(animal.getAnimal().isHungry());

// zoo.append(animal);
zoo.append(animalB);

animal.getAnimal().makeHungry();
animal.getAnimal().makeThirsty();
animal.updateNeedsList();
animalB.updateNeedsList();

// animal.getAnimal().drink();
// animal.getAnimal().eat(foodList[12]);
// animal.getAnimal().makeSad();

animalB.getAnimal().makeThirsty();
animalB.getAnimal().makeHungry();
animalB.animationWalkStart();
animalB.updateNeedsList();

let zooBoundaries = zoo.getBoundingClientRect();
let zooWidth = zooBoundaries.width;
let zooHeight = zooBoundaries.height;

function updateZooBounds(orientation: ScreenOrientation) {
	zooBoundaries = zoo.getBoundingClientRect();

	if (orientation.type === "portrait-primary") {
		zooWidth = zooBoundaries.height;
		zooHeight = zooBoundaries.width;
	} else {
		zooWidth = zooBoundaries.width;
		zooHeight = zooBoundaries.height;
	}
}
window
	.matchMedia("(orientation: portrait)")
	.addEventListener("change", function (e) {});

window.addEventListener("resize", function (e) {
	updateZooBounds(screen.orientation);
});

updateZooBounds(screen.orientation);

console.log(zooBoundaries);
const hitbox = animalB.getBoundingClientRect();

let xPos = 0;
let yPos = 0;
let xDirection = true;
let yDirection = true;

let degree = 0;

// animalB.style.left = `${xPos}`;
// animalB.style.top = `${yPos}`;

function move(element: HTMLElement, x: number, y: number) {
	element.style.left = `${x}px`;
	element.style.top = `${y}px`;
	// element.style.transform = `translate(${x}%)`;
}

function rotate(element: HTMLElement, degree: number) {
	element.style.rotate = `${degree}deg`;
	// element.style.transform = `rotate(${degree}deg)`;
}

function flip(element: HTMLElement, direction: number) {
	element.style.transform = `scaleX(${direction})`;
}

function flipLeft(element: HTMLElement) {
	flip(element, -1);
}
function flipRight(element: HTMLElement) {
	flip(element, 1);
}

function moveAnimal(speed: number) {
	if (xPos + hitbox.width >= zooWidth) {
		xDirection = false;
		flipRight(animalB);
	}
	if (xPos <= 0 - zooBoundaries.x) {
		xDirection = true;
		flipLeft(animalB);
	}

	if (yPos + hitbox.height >= zooHeight) {
		yDirection = false;

		rotate(animalB, degree);
	}
	if (yPos <= 0 - zooBoundaries.y) {
		yDirection = true;
		rotate(animalB, degree);
	}

	if (xDirection) xPos += speed;
	else xPos -= speed;

	if (yDirection) yPos += speed;
	else yPos -= speed;

	move(animalB as HTMLElement, xPos, yPos);
}
setInterval(moveAnimal, 1, 0.5);
// degree = Math.random() * 360;
// rotate(animalB, degree);
