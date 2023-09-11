import { UIObject } from "./UIManager";

export class GameObjectCardElement extends HTMLElement implements UIObject {
	private bemName = "object-card";
	private bemPerfix = GameObjectCardElement + "__";

	private parentBemPerfix: string;
	private name: string;
	private infoIconURL: string | undefined;
	private dispalyImageURL: string;

	private card!: HTMLDivElement;
	private infoContainer!: HTMLDivElement;
	private infoTitle!: HTMLHeadingElement;
	private infoIcon: HTMLDivElement | undefined;
	private displayImage!: HTMLImageElement;

	constructor(
		parentBemPerfix: string,
		title: string,
		dispalyImageURL: string,
		infoIconURL?: string
	) {
		super();

		this.parentBemPerfix = parentBemPerfix;
		this.name = title;
		this.infoIconURL = infoIconURL ? infoIconURL : undefined;
		this.dispalyImageURL = dispalyImageURL;

		this.initUI();
	}

	private initUI() {
		this.initInfo();
		this.initDisplayImage();
		this.initCard();
		this.initMain();
	}

	private initInfo() {
		this.infoContainer = document.createElement("div") as HTMLDivElement;
		this.infoContainer.classList.add(this.bemPerfix + "info");

		this.infoTitle = document.createElement("h3") as HTMLHeadingElement;
		this.infoTitle.classList.add(this.bemPerfix + "title");
		this.infoTitle.innerText = this.name;

		if (this.infoIconURL) {
			this.infoIcon = document.createElement("div") as HTMLDivElement;
			this.infoIcon.classList.add(this.bemPerfix + "info-icon");
			this.infoIcon.classList.add(
				this.bemPerfix + "info-icon--" + this.infoIconURL
			);
			this.infoContainer.append(this.infoIcon);
		}
	}

	private initDisplayImage() {
		this.displayImage = document.createElement("img") as HTMLImageElement;
		this.displayImage.classList.add(this.bemPerfix + "img");
		this.displayImage.src = this.dispalyImageURL;
	}

	private initCard() {
		this.card = document.createElement("div") as HTMLDivElement;
		this.card.classList.add(this.bemPerfix);

		this.append(this.infoContainer);
		this.append(this.displayImage);
	}

	private initMain() {
		this.classList.add(this.parentBemPerfix + "item");
		this.append(this.card);
	}

	updateUI(): void {
		throw new Error("Method not implemented.");
	}
}
window.customElements.define("gameobject-card-element", GameObjectCardElement);

// function createMenuListItem(
// 	title: string,
// 	imgUrl: string,
// 	infoIcon?: string
// ): HTMLElement {
// 	// const elementAnimalItem = document.createElement("li");
// 	// elementAnimalItem.classList.add("ui-menu__item");
// 	// elementAnimalItem.classList.add("js-menu-list-item");

// 	const card_perfix = "object-card";

// 	const elementCard = document.createElement("div") as HTMLDivElement;
// 	elementCard.classList.add(card_perfix);

// 	const elementCardInfo = document.createElement("div") as HTMLDivElement;
// 	elementCardInfo.classList.add(card_perfix + "__info");

// 	const elementCardTitle = document.createElement("h3") as HTMLHeadElement;
// 	elementCardTitle.classList.add(card_perfix + "__title");
// 	elementCardTitle.innerText = title;

// 	const elementCardImage = document.createElement("img") as HTMLImageElement;
// 	elementCardImage.classList.add(card_perfix + "__img");
// 	elementCardImage.src = imgUrl;

// 	elementCardInfo.append(elementCardTitle);

// 	if (infoIcon) {
// 		const elementCardInfoIcon = document.createElement("div") as HTMLDivElement;
// 		elementCardInfoIcon.classList.add(card_perfix + "__info-icon");
// 		elementCardInfoIcon.classList.add(card_perfix + "__info-icon--" + infoIcon);
// 		elementCardInfo.append(elementCardInfoIcon);
// 	}

// 	elementCard.append(elementCardInfo);
// 	elementCard.append(elementCardImage);

// 	elementAnimalItem.append(elementCard);

// 	return elementAnimalItem;
// }
