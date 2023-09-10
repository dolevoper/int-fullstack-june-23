import { Animal } from "./Animal.js";
import { AnimalType } from "./AnimalType.js";
import { List } from "./List.js";

export class AnimalElement extends HTMLElement {
	private animal: Animal;
	private nameElement!: HTMLParagraphElement;
	private bodyElement!: HTMLImageElement;

	private needsContainerElement!: HTMLUListElement;
	private needBubblesList!: List<NeedBubbleElement>;
	private readonly hungryBubbleName = "hungry";
	private readonly thirstyBubbleName = "thirsty";
	private readonly sadBubbleName = "sad";

	private componentName = "animal";
	private bemPerfix = this.componentName + "__";
	private needBubblePerfix = "js-animal-need-bubble-";

	constructor(animal: Animal) {
		super();

		this.animal = animal;

		this.initUI();
	}

	initUI() {
		this.initNameElement();
		this.initBodyElement();

		this.initNeedsContainerElement();
		this.initNeedBubbleElements();
		this.updateNeedsList();

		this.initMainElement();
	}

	initMainElement() {
		this.classList.add(this.componentName);
		this.append(this.needsContainerElement);
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
		this.needsContainerElement = document.createElement(
			"ul"
		) as HTMLUListElement;
		this.needsContainerElement.classList.add(this.bemPerfix + "needs");
	}

	initNeedBubbleElements() {
		this.needBubblesList = new List<NeedBubbleElement>();

		this.needBubblesList.add(
			this.createNeedBubbleElement(this.hungryBubbleName)
		);
		this.needBubblesList.add(
			this.createNeedBubbleElement(this.thirstyBubbleName)
		);
		this.needBubblesList.add(this.createNeedBubbleElement(this.sadBubbleName));
	}

	createNeedBubbleElement(needName: string): NeedBubbleElement {
		const bubbleElement = document.createElement("li");
		bubbleElement.classList.add(this.needBubblePerfix + needName);
		const bubbleIcon = document.createElement("img");
		bubbleIcon.classList.add(this.bemPerfix + "need-icon");
		bubbleIcon.src = getNeedImageByName(needName);

		bubbleElement.appendChild(bubbleIcon);

		return new NeedBubbleElement(needName, bubbleElement);
	}

	updateNeedsList() {
		const isHungry = this.getAnimal().isHungry();
		const isThirsty = this.getAnimal().isThirsty();
		const isSad = this.getAnimal().isSad();

		if (isHungry) {
			this.showNeedBubble(this.hungryBubbleName);
		} else this.hideNeedBubble(this.hungryBubbleName);
		if (isThirsty) {
			this.showNeedBubble(this.thirstyBubbleName);
		} else this.hideNeedBubble(this.thirstyBubbleName);
		if (isSad) {
			this.showNeedBubble(this.sadBubbleName);
		} else this.hideNeedBubble(this.sadBubbleName);
	}

	showNeedBubble(needName: string) {
		const needBubble = this.getNeedBubbleElement(needName);
		if (needBubble) this.needsContainerElement.append(needBubble.element);
	}

	hideNeedBubble(needName: string) {
		const needBubble = this.findShownNeedBubbleElement(needName);
		if (needBubble) needBubble.remove();
	}

	findShownNeedBubbleElement(needName: string): HTMLLIElement {
		return this.needsContainerElement.querySelector(
			"." + this.needBubblePerfix + needName
		) as HTMLLIElement;
	}

	getNeedBubbleElement(needName: string): NeedBubbleElement | undefined {
		const needBubble = this.needBubblesList.find(
			(need) => need.name === needName
		);

		return needBubble;
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

window.customElements.define("animal-element", AnimalElement);

class NeedBubbleElement {
	constructor(public name: string, public element: HTMLLIElement) {
		this.name = name;
		this.element = element;
	}
}

export function getAnimalImageByType(type: AnimalType) {
	const typeName = type.getName().toLowerCase();
	return `./assets/animals/${typeName}.svg`;
}

export function getNeedImageByName(needName: string) {
	return `./assets/menu/icons/needs/need-${needName}.svg`;
}

/*
ANIMAL HTML:

<div class="animal animal--walking">
    <ul class="animal__needs">
        <li class="js-animal-need-bubble-sad"><img class="animal__need-icon" src="assets/menu/icons/needs/need-sad.svg"></img></li>
        <li class="js-animal-need-bubble-hungry"><img class="animal__need-icon" src="assets/menu/icons/needs/need-hungry.svg"></img></li>
        <li class="js-animal-need-bubble-water"><img class="animal__need-icon" src="assets/menu/icons/needs/need-water.svg"></img></li>
        <li class="js-animal-need-bubble-clean"><img class="animal__need-icon" src="assets/menu/icons/needs/need-clean.svg"></img></li>
        <li class="js-animal-need-bubble-happy"><img class="animal__need-icon" src="assets/menu/icons/needs/need-happy.svg"></img></li>
    </ul>

    <img class="animal__body" src="assets/animals/alpaca.svg" alt="">
</div>
*/
