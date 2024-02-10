import * as Validators from "./Validator.js";

export const mustBeValidEmail = new Validators.Validator(Validators.isValidEmail);
mustBeValidEmail.onFailed = (input) => {
    console.log(`FAILED - input ${input.getName()} is not a valid email.`)
};

export const lengthValidation = new Validators.Validator(Validators.mustBeLongerThan, 6);
lengthValidation.onFailed = (input, target, tested) => {
    console.log(`FAILED - input ${input.getName()} is shorter than. ${tested}`)
};

export const specialCharValidation = new Validators.Validator(Validators.hasSpecialCharacters);
specialCharValidation.onFailed = (input) => {
    console.log(`FAILED - input ${input.getName()} has special characters!`)
};

export const mustContainVlad = new Validators.Validator(Validators.mustContain, "Vlad");
mustContainVlad.onFailed = (a, b, c) => {
    console.log(`FAILED - input ${a.getName()} does not contain ${c}`)
};

export const checkedValidation = new Validators.Validator(Validators.mustBeChecked);
checkedValidation.onFailed = (input) => {
    console.log(input.getName() + " must be checked")
};
