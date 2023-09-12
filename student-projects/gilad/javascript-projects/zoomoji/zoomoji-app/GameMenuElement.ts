import { ExpandableMenuElement } from "./ExpandableMenuElement.js";
import { CardsMenuElement } from "./CardsMenuElement.js";
import { MenuButtonElement } from "./MenuButtonElement.js";
import { UIObject } from "./UIManager.js";

export class GameMenuElement extends HTMLElement implements UIObject {
	static bemName = "game-menu";
	// static bemPerfix = GameMenuElement.bemName + "__";

	public expandableMenu!: ExpandableMenuElement;
	private cardsMenu!: CardsMenuElement;

	constructor() {
		super();

		this.initUI();
	}

	private initUI() {
		this.initCardsMenu();
		this.initExpandableMenu();
		this.initMain();
	}

	private initCardsMenu() {
		this.cardsMenu = new CardsMenuElement();
	}

	private initExpandableMenu() {
		this.expandableMenu = new ExpandableMenuElement();
		this.expandableMenu.setOnShowObjectsMenuListener(
			this,
			this.onShowObjectsMenu
		);
		this.expandableMenu.setOnHideObjectsMenuListener(
			this,
			this.onHideObjectsMenu
		);
	}

	private initMain() {
		this.classList.add(GameMenuElement.bemName);
		this.append(this.cardsMenu);
		this.append(this.expandableMenu);
		this.expandableMenu.setOnMainButtonPressed(this, this.onExpandMenuButtons);
		this.expandableMenu.setOnMainButtonNotPressed(this, this.onHideMenuButtons);
	}

	public updateUI() {}

	private onExpandMenuButtons(context: any) {
		context.expandableMenu.expandMenu();
	}

	private onHideMenuButtons(context: any) {
		context.expandableMenu.hideMenu();
	}

	private onShowObjectsMenu(context: any, button: MenuButtonElement) {
		context.expandableMenu.setButtonsUnpressedExcept(button);

		context.cardsMenu.showMenu(button.getName());
	}

	private onHideObjectsMenu(context: any, button: MenuButtonElement) {
		context.cardsMenu.hideMenu();
	}
}

window.customElements.define("gamemenu-element", GameMenuElement);
