import { Game } from "./Game.js";
export class NinjaChef extends Game {
	constructor() {
		super();

		this.debugGameStateLogs(true);

		this.start();
	}

	onLoad = () => {
		console.log("NINJA CHEF ON LOAD!");
	};
}
