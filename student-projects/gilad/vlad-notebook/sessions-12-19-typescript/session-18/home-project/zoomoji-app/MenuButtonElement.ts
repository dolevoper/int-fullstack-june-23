import { UIObject } from "./UIManager";

export class MenuButtonElement extends HTMLElement implements UIObject {
	private icon!: HTMLDivElement;

	private bemName = "ui-button";
	private bemPerfix = this.bemName + "__";
	private pointerPerfix = "js-menu-button-";

	private VERY_SMALL = "very-small";
	private SMALL = "small";
	private MEDIUM = "medium";
	private BIG = "";

	private name: string;
	private size: string;

	constructor(name: string, size: string) {
		super();
		this.name = name;
		this.size = size;

		this.initUI();
	}

	public getName(): string {
		return this.name;
	}

	public getSize(): string {
		return this.size;
	}

	private initUI() {
		this.initIcon();
		this.initMain();
	}

	private initIcon() {
		this.icon = document.createElement("div");
		this.icon.classList.add(this.bemPerfix + "icon");
		this.icon.classList.add(this.bemPerfix + "icon--" + this.getName());
	}

	private initMain() {
		this.classList.add(this.bemName);
		console.log(this.bemName + "--" + this.getSize());
		let size = this.getSize();
		size = size === this.BIG ? size : "--" + size;
		this.classList.add(this.bemName + size);

		this.append(this.icon);
	}

	updateUI(): void {
		throw new Error("Method not implemented.");
	}
}
window.customElements.define("menu-button-element", MenuButtonElement);

//     <div class="ui-button ui-button--small js-menu-button-animals">
//         <div class="ui-button__icon ui-button__icon--animals "></div>
//     </div>
