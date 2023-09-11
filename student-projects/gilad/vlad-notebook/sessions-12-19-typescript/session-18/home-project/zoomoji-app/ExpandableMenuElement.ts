import { List } from "./List.js";
import { MenuButtonElement } from "./MenuButtonElement.js";
import { UIObject } from "./UIManager.js";

export class ExpandableMenuElement extends HTMLElement implements UIObject {
	private bemName = "expanding-menu";
	private bemPerfix = this.bemName + "__";

	private buttonsContainer!: HTMLUListElement;
	private buttonsList!: List<MenuButtonElement>;

	private mainButton!: MenuButtonElement;

	constructor() {
		super();

		this.initUI();
	}

	private initUI() {
		this.initButtonsContainer();
		this.initButtonsList();
		this.initMainButton();
		this.initMain();
	}

	private initButtonsContainer() {
		this.buttonsContainer = document.createElement("ul");
		this.buttonsContainer.classList.add(this.bemPerfix + "expandable-items");
	}

	private initButtonsList() {
		this.buttonsList = new List<MenuButtonElement>();

		this.addButton(new MenuButtonElement("animals", MenuButtonElement.SMALL));
		this.addButton(new MenuButtonElement("cages", MenuButtonElement.SMALL));
		this.addButton(new MenuButtonElement("food", MenuButtonElement.SMALL));
	}

	private initMainButton() {
		this.mainButton = new MenuButtonElement("main", MenuButtonElement.BIG);
		this.mainButton.classList.add(this.bemPerfix + "main-button");
	}

	// 	<div class="expanding-menu__main-button ui-button js-menu-button-main">
	// 	<div class="ui-button__icon"></div>
	// </div>

	private initMain() {
		this.classList.add(this.bemName);
		this.buttonsList.forEach((button) => {
			this.buttonsContainer.append(button);
		});

		this.append(this.buttonsContainer);
		this.append(this.mainButton);
	}
	private addButton(button: MenuButtonElement) {
		this.buttonsList.add(button);
		this.append(button);
	}
	private show() {
		this.hidden = true;
	}

	private hide() {
		this.hidden = false;
	}

	updateUI(): void {
		throw new Error("Method not implemented.");
	}
}

window.customElements.define("expandable-menu-element", ExpandableMenuElement);

// <div class="expanding-menu__expandable-items js-expandable-buttons" hidden>

//     <div class="ui-button ui-button--small js-menu-button-cages">
//         <div class="ui-button__icon ui-button__icon--cages"></div>
//     </div>

//     <div class="ui-button ui-button--small js-menu-button-food">
//         <div class="ui-button__icon ui-button__icon--food"></div>
//     </div>

// </div>
