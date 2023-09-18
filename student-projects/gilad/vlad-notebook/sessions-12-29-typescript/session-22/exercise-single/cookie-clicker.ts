const COOKIE_STORAGE_KEY = "COOKIE";
let cookieCount = 0;

const cookieButtonView = document.querySelector(
	".cookie__clicker"
) as HTMLButtonElement;

const cookieTextView = document.querySelector(
	".cookie__counter"
) as HTMLHeadingElement;

function initializeCookieClicker() {
	cookieCount = getCookieCountFromStorage();
	console.log("loaded cookies: ");
	console.log(cookieCount);

	setCookieCounter(cookieCount);

	setOnCookieClickedListener();
	setOnScreenExitListener();
}

function setOnCookieClickedListener() {
	cookieButtonView.addEventListener("click", (event) => {
		cookieCount++;
		setCookieCounter(cookieCount);
	});
}

function setOnScreenExitListener() {
	window.addEventListener("beforeunload", (event) => {
		saveData(COOKIE_STORAGE_KEY, cookieCount.toString());
	});
}

function setCookieCounter(cookies: number) {
	cookieTextView.innerText = `Cookies: ${cookies}`;
}

function getCookieCountFromStorage(): number {
	const storedCounter = getData(COOKIE_STORAGE_KEY);
	return Number(storedCounter);
}

function saveData(key: string, value: string) {
	localStorage.setItem(key, value);
}

function getData(key: string): String | null {
	return localStorage.getItem(key);
}

initializeCookieClicker();
