import { Gender, alpaca, gorilla } from "./AnimalType.js";

import { AnimalElement, getAnimalImageByType } from "./AnimalElement.js";
import { Animal } from "./Animal.js";

import { GameMenuElement } from "./GameMenuElement.js";
import { CardElement } from "./CardElement.js";

export class UIManager {
	constructor() {}

	initMainUI() {
		this.initGameMenu();
	}

	private initGameMenu() {
		const wrapper = document.querySelector(".wrapper") as HTMLDivElement;
		const gameMenu = new GameMenuElement();

		wrapper.append(gameMenu);
	}
}

export interface UIObject {
	updateUI(): void;
}

const zoo = document.querySelector(".zoo") as HTMLElement;

function setScreenListeners() {
	window
		.matchMedia("(orientation: portrait)")
		.addEventListener("change", function (e) {
			updateZooBounds();
		});

	window.addEventListener("resize", function (e) {
		updateZooBounds();
	});
}

const animalElement = new AnimalElement(
	new Animal(0, "Vlad", Gender.Male, gorilla)
);

let zooBoundaries = zoo.getBoundingClientRect();
let zooWidth = zooBoundaries.width;
let zooHeight = zooBoundaries.height;
let hitbox = animalElement.getBoundingClientRect();
let xPos = 0;
let yPos = 0;
let xDirection = true;
let yDirection = true;
let degree = 0;

animalElement.animationWalkStart();

function initZoo() {}

zoo.append(animalElement);

animalElement.getAnimal().makeThirsty();
animalElement.getAnimal().makeHungry();
animalElement.updateUI();

function startAnimalAnimation() {
	updateZooBounds();

	setInterval(moveAnimal, 1, 0.5);
}

function updateZooBounds() {
	const boundaries = zoo.getBoundingClientRect();
	if (
		screen.orientation.type === "portrait-primary" ||
		window.innerWidth < window.innerHeight
	) {
		zooWidth = boundaries.height;
		zooHeight = boundaries.width;
	} else {
		zooWidth = boundaries.width;
		zooHeight = boundaries.height;
	}
}

function move(element: HTMLElement, x: number, y: number) {
	element.style.left = `${x}px`;
	element.style.top = `${y}px`;
}

function rotate(element: HTMLElement, degree: number) {
	element.style.rotate = `${degree}deg`;
}

function flip(element: HTMLElement, direction: number) {
	element.style.transform = `scaleX(${direction})`;
}

function flipLeft(element: HTMLElement) {
	flip(element, -1);
}
function flipRight(element: HTMLElement) {
	flip(element, 1);
}
function moveAnimal(speed: number) {
	if (xPos + hitbox.width >= zooWidth) {
		xDirection = false;
		flipRight(animalElement);
	}
	if (xPos <= 0 - zooBoundaries.x) {
		xDirection = true;
		flipLeft(animalElement);
	}

	if (yPos + hitbox.height >= zooHeight) {
		yDirection = false;

		rotate(animalElement, degree);
	}
	if (yPos <= 0 - zooBoundaries.y) {
		yDirection = true;
		rotate(animalElement, degree);
	}

	if (xDirection) xPos += speed;
	else xPos -= speed;

	if (yDirection) yPos += speed;
	else yPos -= speed;

	move(animalElement as HTMLElement, xPos, yPos);
}

setScreenListeners();
// startAnimalAnimation();
