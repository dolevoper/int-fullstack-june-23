import { ValidatableInput } from "./SmartForm.js";

export type ValidationFunction<T> = (target: T, value?: any) => boolean;
export type OnFailedValidationListener<T> = (input: ValidatableInput<T>, targetValue?: T, testedValue?: T) => void;

export class Validator<T> {


    private _hasBeenTested!: boolean;

    private _isValid!: boolean;

    private validation!: ValidationFunction<T>;
    private comparedValue: any;

    private _onFailedValidation!: OnFailedValidationListener<T>;


    constructor(validation: ValidationFunction<T>, comparedValue?: any) {
        this.validation = validation;
        if (comparedValue)
            this.setValue(comparedValue)
        this.reset();
    }

    public validate(input: ValidatableInput<T>, valueToValidate: T, comparedValue?: any): boolean {
        if (!this.validation) {
            throw new Error("No validation assigned for target: " + valueToValidate)
        }

        this.hasBeenTested = true;

        if (comparedValue) {
            this.isValid = this.validation(valueToValidate, comparedValue)
            if (!this.isValid)
                this.onFailedValidation(input, valueToValidate, comparedValue);

        }
        else {
            this.isValid = this.validation(valueToValidate, this.comparedValue)
            if (!this.isValid)
                this.onFailedValidation(input, valueToValidate, this.comparedValue);
        }

        return this.isValid;
    }

    public setValue(value: any) {
        this.comparedValue = value;
    }

    public reset() {
        this.hasBeenTested = false;
        this.isValid = false;
    }

    private onFailedValidation(input: ValidatableInput<T>, targetValue: T, testedValue?: T) {
        if (this._onFailedValidation)
            this._onFailedValidation(input, targetValue, testedValue);
    }

    public set onFailed(value: OnFailedValidationListener<T>) {
        this._onFailedValidation = value;
    }

    public get isValid(): boolean {
        return this._isValid;
    }

    private set isValid(value: boolean) {
        this._isValid = value;
    }
    public get hasBeenTested(): boolean {
        return this._hasBeenTested;
    }
    private set hasBeenTested(value: boolean) {
        this._hasBeenTested = value;
    }
}

export const isValidEmail = (target: string): boolean => {
    const validEmailParameters = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return validEmailParameters.test(target as string);
}

export const hasSpecialCharacters = (target: string): boolean => {
    const specialCharacters = /[^a-zA-Z0-9\-\/]/;

    return !specialCharacters.test(target as string);
}

export const mustBeLength = (target: string, length: number): boolean => {
    return target.length === length;
}

export const mustBeShorterThan = (target: string, length: number): boolean => {
    return target.length < length;
}

export const mustBeLongerThan = (target: string, length: number): boolean => {
    return target.length > length;
}

export const mustBeChecked = (target: boolean): boolean => {
    return target;
}

export const mustContain = (target: string, text: string): boolean => {
    return target.includes(text);
}

export const mustNotContain = (target: string, text: string): boolean => {
    return !target.includes(text);
}
