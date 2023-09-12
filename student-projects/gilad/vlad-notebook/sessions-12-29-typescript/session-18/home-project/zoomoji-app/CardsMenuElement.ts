import { Animal } from "./Animal.js";
import { Food, foodList } from "./AnimalDiet.js";
import { AnimalList } from "./AnimalList.js";
import { AnimalType, animalTypes } from "./AnimalType.js";
import { Biome, biomesList } from "./Cage.js";
import { CardElement } from "./CardElement.js";
import { GameObject, GameType } from "./GameObjectInterface.js";
import { List } from "./List.js";
import { UIObject } from "./UIManager.js";

export class CardsMenuElement extends HTMLElement implements UIObject {
	private bemName = "ui-menu";
	private bemPerfix = this.bemName + "__";

	private cardsContainer!: HTMLUListElement;
	private displayedCards!: List<CardElement>;

	private cardsLists!: List<List<CardElement>>;

	constructor() {
		super();

		this.initUI();
	}

	private initUI() {
		this.initCards();
		this.initCardsContainer();
		this.initMain();
	}

	private initCards() {
		this.displayedCards = new List<CardElement>("Current Display Cards");

		this.cardsLists = new List<List<CardElement>>("Cards Storage");
		this.cardsLists.add(
			this.convertGameObjectsToCardList("animals", animalTypes)
		);
		this.cardsLists.add(this.convertGameObjectsToCardList("cages", biomesList));
		this.cardsLists.add(this.convertGameObjectsToCardList("food", foodList));
		this.hideMenu();
	}

	private initCardsContainer() {
		this.cardsContainer = document.createElement("ul") as HTMLUListElement;
		this.cardsContainer.classList.add(this.bemPerfix + "list");
	}

	private initMain() {
		this.classList.add(this.bemName);
		this.append(this.cardsContainer);
	}

	private loadCards(cardListName: string) {
		const displayedCards = this.cardsLists.find((list) => {
			return cardListName === list.getName();
		});

		this.clearCards();
		displayedCards?.forEach((card) => {
			this.addCard(card);
		});
	}

	private clearCards() {
		// this.displayedCards.clearAll();
		this.cardsContainer.replaceChildren();
	}

	private addCard(card: CardElement) {
		this.cardsContainer.append(card);
	}

	private createCard(title: string, imageURL: string, infoIconURL?: string) {
		return new CardElement(this.bemPerfix, title, imageURL, infoIconURL);
	}

	private showMenu(listName: string) {
		this.loadCards(listName);
		this.style.display = "flex";
	}

	private hideMenu() {
		this.style.display = "none";
	}

	convertGameObjectsToCardList(
		listName: string,
		objectsList: GameType[]
	): List<CardElement> {
		const cardList = new List<CardElement>(listName);

		objectsList.forEach((object) => {
			const title = object.getName().toLowerCase();

			const imageURL = getImageByType(object);

			const dietName = object.getDietName().toLowerCase();
			cardList.add(this.createCard(title, imageURL, dietName));
		});

		return cardList;
	}

	updateUI(): void {
		throw new Error("Method not implemented.");
	}
}
window.customElements.define("cards-menu-element", CardsMenuElement);

function getImageByType(object: GameType) {
	return object instanceof AnimalType
		? getImageByAnimalType(object)
		: object instanceof Food
		? getImageByFoodType(object)
		: object instanceof Biome
		? getImageByBiomeType(object)
		: "";
}

function getImageByBiomeType(biome: any) {
	const biomeName = biome.getName().toLowerCase();
	return `./assets/cage/cage-${biomeName}.svg`;
}
function getImageByFoodType(food: Food) {
	const foodName = food.name.toLowerCase();
	return `./assets/food/${foodName}.svg`;
}
function getImageByAnimalType(animal: AnimalType) {
	const animalName = animal.getName().toLowerCase();
	return `./assets/animals/${animalName}.svg`;
}
