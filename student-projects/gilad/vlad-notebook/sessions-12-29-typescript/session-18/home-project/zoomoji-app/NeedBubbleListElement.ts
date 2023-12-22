import { List } from "./List.js";
import { NeedBubbleElement } from "./NeedBubbleElement.js";

export class NeedBubbleListElement extends HTMLElement {
	private needBubbleList: List<NeedBubbleElement>;

	private bemPerfix: string;
	private pointerPerfix = "js-need-bubble-container-";

	constructor(bemPerfix: string) {
		super();
		this.needBubbleList = new List<NeedBubbleElement>("Need Bubble Elements");
		this.bemPerfix = bemPerfix;
		this.initUI();
	}

	private initUI() {
		this.initNeedBubbles();
		this.initMain();
	}

	private initMain() {
		this.classList.add(this.bemPerfix + "__needs");
		this.classList.add(this.pointerPerfix);
	}

	private initNeedBubbles() {
		this.needBubbleList = new List<NeedBubbleElement>();
	}

	public addNeedBubble(name: string) {
		const needBubble = this.createNeedBubble(name);
		this.needBubbleList.add(needBubble);
		this.hideNeedBubble(needBubble.getName());
	}
	private createNeedBubble(name: string): NeedBubbleElement {
		return new NeedBubbleElement(name, this.bemPerfix);
	}

	public showNeedBubble(name: string) {
		const needBubble = this.getNeedBubble(name);
		if (needBubble) this.append(needBubble);
	}
	public hideNeedBubble(name: string) {
		this.getNeedBubble(name)?.remove();
	}

	public getNeedBubble(needName: string): NeedBubbleElement | undefined {
		return this.needBubbleList.findByName(needName);
	}

	public hideAllBubbles() {
		this.replaceChildren();
	}

	public showAllBubbles() {
		this.needBubbleList.forEach((element) => {
			this.showNeedBubble(element.getName());
		});
	}
}
window.customElements.define("needbubble-list", NeedBubbleListElement);

// <ul class="animal__needs">
//         <li class="js-animal-need-bubble-sad"><img class="animal__need-icon" src="assets/menu/icons/needs/need-sad.svg"></img></li>
//         <li class="js-animal-need-bubble-hungry"><img class="animal__need-icon" src="assets/menu/icons/needs/need-hungry.svg"></img></li>
//         <li class="js-animal-need-bubble-water"><img class="animal__need-icon" src="assets/menu/icons/needs/need-water.svg"></img></li>
//         <li class="js-animal-need-bubble-clean"><img class="animal__need-icon" src="assets/menu/icons/needs/need-clean.svg"></img></li>
//         <li class="js-animal-need-bubble-happy"><img class="animal__need-icon" src="assets/menu/icons/needs/need-happy.svg"></img></li>
//     </ul>
