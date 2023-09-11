import { List } from "./List.js";
import { MenuButtonElement } from "./MenuButtonElement.js";
import { UIObject } from "./UIManager.js";

export class ExpandableMenuElement extends HTMLElement implements UIObject {
	private bemName = "expanding-menu";
	private bemPerfix = this.bemName + "__";

	private buttonsContainer!: HTMLUListElement;
	private buttonsList!: List<MenuButtonElement>;

	private mainButton!: MenuButtonElement;

	private onShowObjectsMenuListener!: Function;
	private onHideObjectsMenuListener!: Function;

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
		this.hideMenu();
	}

	private initMainButton() {
		this.mainButton = new MenuButtonElement("main", MenuButtonElement.BIG);
		this.mainButton.classList.add(this.bemPerfix + "main-button");
	}

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

	private isHidden() {
		return this.buttonsContainer.style.display === "none" ? true : false;
	}

	private isShown() {
		return !this.isHidden();
	}

	public setOnShowObjectsMenuListener(context: any, listener: Function) {
		this.buttonsList.forEach((button) => {
			button.addOnPressedListener(() => {
				listener(context, button);
			});
		});
	}

	public setOnHideObjectsMenuListener(context: any, listener: Function) {
		this.onHideObjectsMenuListener = listener;

		this.buttonsList.forEach((button) => {
			button.addOnNotPressedListener(() => {
				listener(context, button);
			});
		});

		this.mainButton.addOnNotPressedListener(() => {
			listener(context, this.mainButton.getName());
		});
	}

	public setOnMainButtonPressed(context: any, listener: Function) {
		this.mainButton.addOnPressedListener(() => {
			listener(context);
		});
	}
	public setOnMainButtonNotPressed(context: any, listener: Function) {
		this.mainButton.addOnNotPressedListener(() => {
			listener(context);
		});
	}

	public expandMenu() {
		this.buttonsContainer.style.display = "flex";
	}

	public hideMenu() {
		this.buttonsContainer.style.display = "none";
	}

	public setButtonsUnpressedExcept(exceptButton: MenuButtonElement) {
		this.buttonsList.forEach((button) => {
			if (button !== exceptButton) button.setPressed(false);
		});
	}
	updateUI(): void {
		throw new Error("Method not implemented.");
	}
}

window.customElements.define("expandable-menu-element", ExpandableMenuElement);
