import { UIObject } from "./UIManager";

export class CardElement extends HTMLElement implements UIObject {
	private bemName = "object-card";
	private bemPerfix = this.bemName + "__";

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

	private initCard() {
		this.card = document.createElement("div");
		this.card.classList.add(this.bemName);
		this.card.append(this.infoContainer);
		this.card.append(this.displayImage);
	}

	private initMain() {
		this.classList.add(this.parentBemPerfix + "item");
		this.append(this.card);
	}

	private initInfo() {
		this.infoContainer = document.createElement("div") as HTMLDivElement;
		this.infoContainer.classList.add(this.bemPerfix + "info");

		this.infoTitle = document.createElement("h3") as HTMLHeadingElement;
		this.infoTitle.classList.add(this.bemPerfix + "title");
		this.infoTitle.innerText = this.name;
		this.infoContainer.append(this.infoTitle);

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

	updateUI(): void {
		throw new Error("Method not implemented.");
	}
}
window.customElements.define("card-element", CardElement);
