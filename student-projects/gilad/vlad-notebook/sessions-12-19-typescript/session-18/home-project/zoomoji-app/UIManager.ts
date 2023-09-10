import { AnimalType, animalTypes } from "./AnimalType.js";
import { Biome } from "./Cage.js";
import { List } from "./List.js";

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
	const imageURL = getImageByAnimalType(type);

	return createMenuListItem(title, imageURL, dietName);
}

function createMenuListItemCage(biome: Biome): HTMLElement {
	const title = Biome[biome];
	const imageURL = getImageByBiomeType(biome);

	return createMenuListItem(title, imageURL);
}

function getImageByAnimalType(type: AnimalType) {
	const animalName = type.getName().toLowerCase();
	return `./assets/animals/${animalName}.svg`;
}
function getImageByBiomeType(biome: Biome) {
	const biomeName = Biome[biome];
	return `./assets/cage/cage-${biomeName}.svg`;
}

function initExpandableMenu(
	animalsList: List<HTMLElement>,
	biomesList: List<HTMLElement>
) {
	const menuMainButton = getMenuButton();

	const menuAnimalsButton = getMenuAnimalsButton();
	const menuCagesButton = getMenuCagesButton();

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

initExpandableMenu(animalsMenuItems, biomesMenuItems);
