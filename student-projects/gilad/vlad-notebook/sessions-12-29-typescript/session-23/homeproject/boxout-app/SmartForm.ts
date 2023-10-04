import { Validator } from "./Validator.js";

type InputType = string | number | boolean;

export class SmartForm {

    private inputs!: ValidatableInput<InputType>[];

    constructor(private form: HTMLFormElement) {


        this.initInputs();
        this.initOnSubmit();
    }

    initInputs() {
        this.inputs = [];
        const inputElements = this.form.querySelectorAll("input")

        inputElements.forEach( inputElement => {
            console.log(inputElement);
            const smartInput = createSmartInput(inputElement);
            this.inputs.push(smartInput)
        });

    }
    initOnSubmit() {
        this.form.addEventListener("submit", (submitEvent) => {

            submitEvent.preventDefault();

            const formData = new FormData(this.form);

            this.inputs.forEach(input => {
                input.validate()
            })

            console.log(formData);
        })

    }

    getInput(name: string): ValidatableInput<InputType> | undefined {
        const foundInput: ValidatableInput<InputType> | undefined =  this.inputs.find((input) => {
            return input.getName() === name;
        });

        return foundInput;
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
        if(value) 
            validator.setValue(value);

        this.validators.push(validator);
    }

    validate() {
        const currentValue = this.element.value;
        console.log(currentValue)

    }

    protected activateValidators(currentValue: T) {
        this.validators.forEach((validator) => {
            validator.validate(this, currentValue);
        })
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

    validate(): void {
        const currentValue = this.element.checked;
        this.activateValidators(currentValue);
    }

    getValue(): boolean {
        return this.element.checked;
    }
}

class NumberInput extends ValidatableInput<number> {

    constructor(element: HTMLInputElement) {
        super(element);
    }

    validate(): void {
        const currentValue = this.element.valueAsNumber;
        this.activateValidators(currentValue);

    }

}

class TextInput extends ValidatableInput<string> {

    constructor(element: HTMLInputElement) {
        super(element);
    }

    validate(): void {
        const currentValue = this.element.value;
        this.activateValidators(currentValue);

    }

}

function createSmartInput(element: HTMLInputElement): ValidatableInput<InputType> {
    const type = element.type;

    if(type === "number" || type === "range")
        return new NumberInput(element);
    if(type === "checkbox" || type === "radio")
        return new BooleanInput(element);
    
    return new TextInput(element);
    
}