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
