import * as User from "./User.js";
import { Validator, hasSpecialCharacters, isValidEmail, mustBeChecked, mustBeLongerThan, mustContain } from "./Validator.js";
import { SmartForm, ValidatableInput } from "./SmartForm.js"

function skipLoginIfAlreadySignedIn() {

    const loadedUser = User.loadCurrentUser();

    if (!loadedUser)
        return;

    if (loadedUser instanceof User.Admin)
        openAdminDashboard(loadedUser)
    if (loadedUser instanceof User.Client)
        openClientDashboard(loadedUser)
}

function initLoginForm() {

    const loginForm = document.forms.namedItem("login-form") as HTMLFormElement;
    const smartForm = new SmartForm(loginForm);

    const username = smartForm.getInput("login-username") as ValidatableInput<string>;
    username.addValidator(lengthValidation);
    username.addValidator(mustBeValidEmail)

    const password = smartForm.getInput("login-password") as ValidatableInput<string>;
    password.addValidator(specialCharValidation);
    password.addValidator(lengthValidation);
    password.addValidator(mustContainVlad);

    const remember = smartForm.getInput("login-remember") as ValidatableInput<boolean>;
    remember.addValidator(checkedValidation)

    smartForm.onSubmit((event) => {
        event.preventDefault();

        if (smartForm.validate())
            console.log("form passed validations!")
    });
}

function openAdminDashboard(user: User.Admin) {
    console.log("Opening admin dashboard")
}

function openClientDashboard(user: User.Client) {
    console.log("Opening client dashboard")

}

function main() {
    console.log("login page");
    skipLoginIfAlreadySignedIn();

    initLoginForm();
}


const mustBeValidEmail = new Validator(isValidEmail);
mustBeValidEmail.onFailed = (input) => {
    console.log(`FAILED - input ${input.getName()} is not a valid email.`)
};

const lengthValidation = new Validator(mustBeLongerThan, 6);
lengthValidation.onFailed = (input, target, tested) => {
    console.log(`FAILED - input ${input.getName()} is shorter than. ${tested}`)
}

const specialCharValidation = new Validator(hasSpecialCharacters);
specialCharValidation.onFailed = (input) => {
    console.log(`FAILED - input ${input.getName()} has special characters!`)
}


const mustContainVlad = new Validator(mustContain, "Vlad");
mustContainVlad.onFailed = (a, b, c) => {
    console.log(`FAILED - input ${a.getName()} does not contain ${c}`)
}

const checkedValidation = new Validator(mustBeChecked);
checkedValidation.onFailed = (input) => {
    console.log(input.getName() + " must be checked")
}


main();