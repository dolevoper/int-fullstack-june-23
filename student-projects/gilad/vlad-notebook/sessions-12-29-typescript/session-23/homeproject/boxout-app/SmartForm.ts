import { Validator } from "./Validator.js";

type InputType = string | number | boolean;

export class SmartForm {

    inputs!: ValidatableInput<InputType>[];

    constructor(public form: HTMLFormElement) {
        this.initInputs();
    }

    initInputs() {
        this.inputs = [];
        const inputElements = this.form.querySelectorAll("input")

        inputElements.forEach(inputElement => {
            const smartInput = createSmartInput(inputElement);
            this.inputs.push(smartInput)
        });

    }

    public onSubmit(submitEvent: EventListenerOrEventListenerObject) {
        this.form.addEventListener("submit", submitEvent)
    }

    getInput(name: string): ValidatableInput<InputType> | undefined {
        const foundInput: ValidatableInput<InputType> | undefined = this.inputs.find((input) => {
            return input.getName() === name;
        });

        return foundInput;
    }

    validate(): boolean {
        let allInputsPassed = true;
        this.inputs.forEach(input => {
            const validationResult = input.validate();
            if (!validationResult) allInputsPassed = false;
        })
        return allInputsPassed;
    }
}

export class ValidatableInput<T> {

    public element: HTMLInputElement;

    public validators: Validator<T>[];

    constructor(inputElement: HTMLInputElement) {
        this.element = inputElement;
        this.validators = [];
    }

    addValidator(validator: Validator<T>, value?: T) {
        if (value)
            validator.setValue(value);

        this.validators.push(validator);
    }

    validate(): boolean {
        const currentValue = this.element.value as T;
        const isAllValidationsPassed = this.activateValidators(currentValue);
        return isAllValidationsPassed;
    }

    protected activateValidators(currentValue: T): boolean {

        let isAllValidationsPased = true;
        this.validators.forEach((validator) => {
            const validationResult = validator.validate(this, currentValue);
            if (!validationResult) isAllValidationsPased = false;
        })

        return isAllValidationsPased;
    }

    getValue(): T {
        return this.element.value as T;
    }

    getName(): string {
        return this.element.name;
    }
}

class BooleanInput extends ValidatableInput<boolean> {

    constructor(element: HTMLInputElement) {
        super(element);
    }

    validate(): boolean {
        const currentValue = this.element.checked;
        const isAllValidationsPassed = this.activateValidators(currentValue);
        return isAllValidationsPassed;
    }

    getValue(): boolean {
        return this.element.checked;
    }
}

class NumberInput extends ValidatableInput<number> {

    constructor(element: HTMLInputElement) {
        super(element);
    }

    validate(): boolean {
        const currentValue = this.element.valueAsNumber;
        const isAllValidationsPassed = this.activateValidators(currentValue);
        return isAllValidationsPassed;

    }

}

class TextInput extends ValidatableInput<string> {

    constructor(element: HTMLInputElement) {
        super(element);
    }

    validate(): boolean {
        const currentValue = this.element.value;
        const isAllValidationsPassed = this.activateValidators(currentValue);
        return isAllValidationsPassed;
    }

}

function createSmartInput(element: HTMLInputElement): ValidatableInput<InputType> {
    const type = element.type;

    if (type === "number" || type === "range")
        return new NumberInput(element);
    if (type === "checkbox" || type === "radio")
        return new BooleanInput(element);

    return new TextInput(element);

}