import { GameObjectCardElement } from "./GameObjectCardElement.js";
import { List } from "./List.js";
import { UIObject } from "./UIManager.js";

export class GameObjectsMenuElement extends HTMLElement implements UIObject {
	private bemName = "ui-menu";
	private bemPerfix = this.bemName + "__";

	private listContainer!: HTMLUListElement;
	private gameObjectsList!: List<GameObjectCardElement>;

	constructor() {
		super();

		this.initUI();
	}

	private initUI() {
		this.initObjectList();
		this.initListContainer();
		this.initMain();
	}

	private initObjectList() {
		this.gameObjectsList = new List<GameObjectCardElement>("Game Object Cards");
		this.hideMenu();
	}

	private initListContainer() {
		this.listContainer = document.createElement("ul") as HTMLUListElement;
		this.listContainer.classList.add(this.bemPerfix + "list");
	}

	private initMain() {
		this.classList.add(this.bemName);
		this.append(this.listContainer);
	}

	public addGameObjectCard(
		title: string,
		imageURL: string,
		infoIconURL?: string
	) {
		const newCard = this.createGameObjectCard(title, imageURL, infoIconURL);

		this.gameObjectsList.add(newCard);
		this.listContainer.append(newCard);
	}

	private createGameObjectCard(
		title: string,
		imageURL: string,
		infoIconURL?: string
	) {
		return new GameObjectCardElement(
			this.bemPerfix,
			title,
			imageURL,
			infoIconURL
		);
	}

	public showMenu() {
		this.style.display = "flex";
	}
	public hideMenu() {
		this.style.display = "none";
	}

	updateUI(): void {
		throw new Error("Method not implemented.");
	}
}
window.customElements.define("gameobject-menu-element", GameObjectsMenuElement);

/*
<div class="ui-menu js-menu" hidden>
			<ul class="ui-menu__list js-menu-list">

			</ul>
	</div>
*/

// function createMenuListItemAnimal(type: AnimalType): HTMLElement {
// 	const title = type.getName();
// 	const dietName = type.getDiet().getName().toLowerCase();
// 	const imageURL = getAnimalImageByType(type);

// 	return createMenuListItem(title, imageURL, dietName);
// }

// function createMenuListItemCage(biome: Biome): HTMLElement {
// 	const title = Biome[biome];
// 	const imageURL = getImageByBiomeType(biome);

// 	return createMenuListItem(title, imageURL);
// }

// function createMenuListItemFood(food: Food): HTMLElement {
// 	const title = food.name;
// 	const imageURL = getImageByFoodType(food);
// 	const dietName = food.getAnimalDiet().getName().toLowerCase();
// 	return createMenuListItem(title, imageURL, dietName);
// }

// function getImageByBiomeType(biome: Biome) {
// 	const biomeName = Biome[biome];
// 	return `./assets/cage/cage-${biomeName}.svg`;
// }
// function getImageByFoodType(food: Food) {
// 	const foodName = food.name.toLowerCase();
// 	return `./assets/food/${foodName}.svg`;
// }

// function initExpandableMenu(
// 	animalsList: List<HTMLElement>,
// 	biomesList: List<HTMLElement>,
// 	foodList: List<HTMLElement>
// ) {
// 	const menuMainButton = getMenuButton();

// 	const menuAnimalsButton = getMenuAnimalsButton();
// 	const menuCagesButton = getMenuCagesButton();
// 	const menuFoodButton = getMenuFoodButton();

// 	const menu = getMenu();
// 	const menuList = getMenuList(menu);
// 	menu.hidden = true;

// 	const expandableButtons = document.querySelector(
// 		".js-expandable-buttons"
// 	) as HTMLElement;
// 	expandableButtons.hidden = true;

// 	menuAnimalsButton.addEventListener("click", (e) => {
// 		menuList.innerHTML = "";
// 		animalsList.forEach((animal) => {
// 			menuList.appendChild(animal);
// 		});
// 		menu.hidden = false;
// 	});

// 	menuCagesButton.addEventListener("click", (e) => {
// 		menuList.innerHTML = "";
// 		biomesList.forEach((biome) => {
// 			menuList.appendChild(biome);
// 		});
// 		menu.hidden = false;
// 	});

// 	menuFoodButton.addEventListener("click", (e) => {
// 		menuList.innerHTML = "";
// 		foodList.forEach((food) => {
// 			menuList.appendChild(food);
// 		});
// 		menu.hidden = false;
// 	});

// 	menuMainButton.addEventListener("click", (e) => {
// 		menu.hidden = true;
// 		expandableButtons.hidden = !expandableButtons.hidden;
// 	});

// 	window
// 		.matchMedia("(orientation: portrait)")
// 		.addEventListener("change", function (e) {
// 			menu.hidden = true;
// 			expandableButtons.hidden = true;
// 		});
// }

// const biomesMenuItems = new List<HTMLElement>("Biomes UI Items");

// biomesMenuItems.add(createMenuListItemCage(Biome.dessert));
// biomesMenuItems.add(createMenuListItemCage(Biome.mudland));
// biomesMenuItems.add(createMenuListItemCage(Biome.tundra));
// biomesMenuItems.add(createMenuListItemCage(Biome.grassland));
// biomesMenuItems.add(createMenuListItemCage(Biome.forest));

// const animalsMenuItems = new List<HTMLElement>("Animals UI Items");
// animalTypes.forEach((type) => {
// 	animalsMenuItems.add(createMenuListItemAnimal(type));
// });

// const foodMenuItems = new List<HTMLElement>("Food UI Items");
// foodList.forEach((food) => {
// 	foodMenuItems.add(createMenuListItemFood(food));
// });

// initExpandableMenu(animalsMenuItems, biomesMenuItems, foodMenuItems);
