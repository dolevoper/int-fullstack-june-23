export class NeedBubbleElement extends HTMLElement {
	private name: string;
	private icon!: HTMLImageElement;

	private bemPerfix: string;
	private pointerPerfix = "js-need-bubble-";

	constructor(name: string, bemPerfix: string) {
		super();
		this.name = name;
		this.bemPerfix = bemPerfix;

		this.initUI();
	}

	getName(): string {
		return this.name;
	}

	private initUI() {
		this.initIcon();
		this.initMain();
	}

	private initIcon() {
		this.icon = document.createElement("img");
		this.icon.classList.add(this.bemPerfix + "__need-icon");
		this.icon.src = getNeedImageByName(this.name);
	}

	private initMain() {
		this.classList.add(this.pointerPerfix + this.getName());
		this.appendChild(this.icon);
	}
}
window.customElements.define("needbubble-element", NeedBubbleElement);

function getNeedImageByName(needName: string) {
	return `./assets/menu/icons/needs/need-${needName}.svg`;
}

// <li class="js-animal-need-bubble-sad">
// <img class="animal__need-icon" src="assets/menu/icons/needs/need-sad.svg"></img>
// </li>
