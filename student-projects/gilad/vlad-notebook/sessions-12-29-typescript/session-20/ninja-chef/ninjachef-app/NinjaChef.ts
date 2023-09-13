import { Game } from "./Game.js";

export class NinjaChef extends Game {
	box!: HTMLElement;
	xPos!: number;
	yPos!: number;

	speed!: HTMLElement;
	xPosDelta!: number;
	delta!: string;

	constructor() {
		super();

		this.debugGameStateLogs(true);

		this.start();
	}

	onLoad = () => {
		let state = false;
		this.box = document.querySelector(".box") as HTMLElement;
		this.speed = document.querySelector(".delta") as HTMLElement;
		this.speed.addEventListener("click", () => {
			if (!state) {
				this.pause();
				state = !state;
				console.log(state);
			} else {
				this.resume();
				state = !state;
				console.log(state);
			}
		});
		this.xPos = Number(this.box.style.left);
		this.yPos = Number(this.box.style.top);

		this.xPosDelta = 0;
	};

	onUpdate = (deltaTime: number) => {
		this.xPos += 0.05 * deltaTime;
		this.yPos += 0.05 * deltaTime;

		this.xPosDelta = deltaTime;
		this.delta = deltaTime.toString();
	};

	onRender = () => {
		this.box.style.left = `${this.xPos}px`;
		this.box.style.top = `${this.yPos}px`;
		this.speed.textContent = `DELTA: ${this.delta} `;
	};

	onPause = () => {
		// console.log("NINJA CHEF ON ON PAUSE!");
	};
}
