import { UIObject } from "./UIManager";

export class MenuButtonElement extends HTMLElement implements UIObject {
	private icon!: HTMLDivElement;

	private bemName = "ui-button";
	private bemPerfix = this.bemName + "__";
	private pointerPerfix = "js-menu-button-";

	static VERY_SMALL = "very-small";
	static SMALL = "small";
	static MEDIUM = "medium";
	static BIG = "big";

	private name: string;
	private size: string;
	private pressed: boolean;

	private onClickedListeners!: Function[];
	private onPressedListeners!: Function[];
	private onNotPressedListeners!: Function[];

	constructor(name: string, size: string) {
		super();
		this.name = name;
		this.size = size;
		this.pressed = false;

		this.initUI();
	}

	public getName(): string {
		return this.name;
	}

	public getSize(): string {
		return this.size;
	}

	public isPressed() {
		return this.pressed;
	}

	public setPressed(isPressed: boolean) {
		this.pressed = isPressed;
	}

	private initUI() {
		this.initIcon();
		this.initMain();
		this.initPressedEventListener();
	}

	private initIcon() {
		this.icon = document.createElement("div");
		this.icon.classList.add(this.bemPerfix + "icon");
		this.icon.classList.add(this.bemPerfix + "icon--" + this.getName());
	}

	private initMain() {
		this.classList.add(this.bemName);
		this.classList.add(this.bemName + "--" + this.getSize());

		this.append(this.icon);
	}

	private initPressedEventListener() {
		this.onClickedListeners = [];
		this.onPressedListeners = [];
		this.onNotPressedListeners = [];
		console.log(this.getName() + " pressed events inited ");
		this.addEventListener("click", () => {
			this.setPressed(!this.isPressed());

			this.onClicked();

			if (this.isPressed()) this.onPressed();
			else this.onNotPressed();
		});
	}

	private onClicked() {
		this.onClickedListeners.forEach((callback) => {
			callback(this);
		});
	}

	private onPressed() {
		this.onPressedListeners.forEach((callback) => {
			callback(this);
		});
	}

	private onNotPressed() {
		this.onNotPressedListeners.forEach((callback) => {
			callback(this);
		});
	}

	public addOnClickListener(listener: Function) {
		this.onClickedListeners.push(listener);
	}

	public addOnPressedListener(listener: Function) {
		this.onPressedListeners.push(listener);
	}

	public addOnNotPressedListener(listener: Function) {
		this.onNotPressedListeners.push(listener);
	}

	updateUI(): void {
		throw new Error("Method not implemented.");
	}
}
window.customElements.define("menu-button-element", MenuButtonElement);

//     <div class="ui-button ui-button--small js-menu-button-animals">
//         <div class="ui-button__icon ui-button__icon--animals "></div>
//     </div>
