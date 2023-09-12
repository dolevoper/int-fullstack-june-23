import { Animal } from "./Animal.js";
import { AnimalType } from "./AnimalType.js";
import { NeedBubbleListElement } from "./NeedBubbleListElement.js";
import { UIObject } from "./UIManager.js";

export class AnimalElement extends HTMLElement implements UIObject {
	private animal: Animal;
	private nameElement!: HTMLParagraphElement;
	private bodyElement!: HTMLImageElement;

	private needsElement!: NeedBubbleListElement;
	private readonly hungryBubbleName = "hungry";
	private readonly thirstyBubbleName = "thirsty";
	private readonly sadBubbleName = "sad";

	private componentName = "animal";
	private bemPerfix = this.componentName + "__";

	constructor(animal: Animal) {
		super();

		this.animal = animal;

		this.initUI();
	}
	updateUI(): void {
		this.updateNeedsList();
	}

	initUI() {
		this.initNameElement();
		this.initBodyElement();

		this.initNeedsContainerElement();
		this.updateNeedsList();

		this.initMainElement();
	}

	initMainElement() {
		this.classList.add(this.componentName);
		this.append(this.needsElement);
		this.append(this.nameElement);
		this.append(this.bodyElement);
	}

	initNameElement() {
		this.nameElement = document.createElement("p") as HTMLParagraphElement;
		this.nameElement.classList.add(this.bemPerfix + "name");
		this.nameElement.innerText = this.getAnimal().getName();
	}

	initBodyElement() {
		this.bodyElement = document.createElement("img") as HTMLImageElement;
		this.bodyElement.classList.add(this.bemPerfix + "body");
		this.bodyElement.src = getAnimalImageByType(this.getAnimal().getType());
	}

	initNeedsContainerElement() {
		this.needsElement = new NeedBubbleListElement(this.componentName);
		this.needsElement.addNeedBubble(this.hungryBubbleName);
		this.needsElement.addNeedBubble(this.thirstyBubbleName);
		this.needsElement.addNeedBubble(this.sadBubbleName);

		this.needsElement.hideAllBubbles();
	}

	updateNeedsList() {
		const isHungry = this.getAnimal().isHungry();
		const isThirsty = this.getAnimal().isThirsty();
		const isSad = this.getAnimal().isSad();
		this.needsElement.showNeedBubble(this.hungryBubbleName);
		if (isHungry) {
			this.needsElement.showNeedBubble(this.hungryBubbleName);
		} else this.needsElement.hideNeedBubble(this.hungryBubbleName);
		if (isThirsty) {
			this.needsElement.showNeedBubble(this.thirstyBubbleName);
		} else this.needsElement.hideNeedBubble(this.thirstyBubbleName);
		if (isSad) {
			this.needsElement.showNeedBubble(this.sadBubbleName);
		} else this.needsElement.hideNeedBubble(this.sadBubbleName);
	}

	private setAnimationWalking(state: Boolean) {
		if (!state) {
			this.classList.remove(this.componentName + "--walking");
			return;
		}
		if (!this.isAnimationWalking())
			this.classList.add(this.componentName + "--walking");
	}

	isAnimationWalking(): Boolean {
		return this.classList.contains(this.componentName + "--walking");
	}

	animationWalkStart() {
		this.setAnimationWalking(true);
	}

	animationWalkStop() {
		this.setAnimationWalking(false);
	}

	getAnimal(): Animal {
		return this.animal;
	}
}

export function getAnimalImageByType(type: AnimalType) {
	const typeName = type.getName().toLowerCase();
	return `./assets/animals/${typeName}.svg`;
}

window.customElements.define("animal-element", AnimalElement);

/*
ANIMAL HTML:

<div class="animal animal--walking">
    

    <img class="animal__body" src="assets/animals/alpaca.svg" alt="">
</div>
*/
