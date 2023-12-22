import { saveData, getData } from "./Storage.js";

const USER_STORAGE_KEY = "USER";
const DASHBOARD_LINK = "cookie-clicker.html";
const USERNAME_FIELD_KEY = "field-username-input";
const PASSWORD_FIELD_KEY = "field-password-input";

type InputValidation = { key: string; value: string; error: string };
type User = { username: string; password: string };

const user = loadUser();

function initialiseMainForm() {
	const user: User = { username: "", password: "" };

	const mainForm = document.querySelector(
		`form[name="form-user-login"]`
	) as HTMLFormElement;
	const errorsView = document.querySelector(
		".field-errors__list"
	) as HTMLUListElement;
	console.log(mainForm);

	mainForm?.addEventListener("submit", (event) => {
		event.preventDefault();
		errorsView.replaceChildren();

		let hasErrors = false;
		const formData = new FormData(mainForm);
		const validationOutput = validateForm(formData);
		console.log(validationOutput);

		validationOutput.forEach((v) => {
			if (v.error) {
				const errorItemElement = document.createElement("li");
				errorItemElement.classList.add("field-errors__item");
				errorItemElement.innerText = v.error;
				errorsView.append(errorItemElement);
				hasErrors = true;
			} else {
			}
		});

		if (!hasErrors) {
			user.username = validationOutput[0].value;
			user.password = validationOutput[1].value;
			console.log(user);
			saveUser(user);
			goToDasbhoard();
		}
	});
}

function validateForm(data: FormData): InputValidation[] {
	const validations: InputValidation[] = [];

	const username = data.get(USERNAME_FIELD_KEY) as string;
	const usernameValidation = {
		key: USERNAME_FIELD_KEY,
		value: username,
		error: "",
	};
	if (username.length < 4)
		usernameValidation.error = "username must be alteast 4 characters!";
	validations.push(usernameValidation);

	const password = data.get("field-password-input") as string;
	const passwordValidation = {
		key: PASSWORD_FIELD_KEY,
		value: password,
		error: "",
	};

	if (password.length < 6)
		passwordValidation.error = "password must be alteast 6 characters!";
	validations.push(passwordValidation);

	return validations;
}

function saveUser(user: User) {
	const parsedUser = JSON.stringify(user);
	saveData(USER_STORAGE_KEY, parsedUser);
}

function loadUser(): User {
	const fetchedUser = getData(USER_STORAGE_KEY) as string;
	const user = JSON.parse(fetchedUser) as User;
	return user;
}

function goToDasbhoard() {
	window.location.href = DASHBOARD_LINK;
}
if (user) {
	goToDasbhoard();
} else {
	initialiseMainForm();
}
