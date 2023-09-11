import { ExpandableMenuElement } from "./ExpandableMenuElement.js";
import { GameObjectsMenuElement } from "./GameObjectsMenuElement.js";
import { MenuButtonElement } from "./MenuButtonElement.js";
import { UIObject } from "./UIManager.js";

export class GameMenuElement extends HTMLElement implements UIObject {
	static bemName = "game-menu";
	// static bemPerfix = GameMenuElement.bemName + "__";

	public expandableMenu!: ExpandableMenuElement;
	private gameObjectsMenu!: GameObjectsMenuElement;

	constructor() {
		super();

		this.initUI();
	}

	private initUI() {
		this.initGameObjectsMenu();
		this.initExpandableMenu();
		this.initMain();
	}

	private initGameObjectsMenu() {
		this.gameObjectsMenu = new GameObjectsMenuElement();
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
		this.append(this.gameObjectsMenu);
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
		context.gameObjectsMenu.showMenu();
	}

	private onHideObjectsMenu(context: any, button: MenuButtonElement) {
		context.gameObjectsMenu.hideMenu();
	}
}

window.customElements.define("gamemenu-element", GameMenuElement);

// <div class="expanding-menu">

// <div class="expanding-menu__main-button ui-button js-menu-button-main">
//     <div class="ui-button__icon"></div>
// </div>

// </div>
