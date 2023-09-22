// Class project
// 1. Add new field to car: status. Can be "normal", "free", "discount", "banned". In the form, "free" should be the default.
// 2. Show the cars list and allow to edit car status
// 3. Add a new field "discountRate" - when status is "discount" this should have the discount rate
// (Choose 2 or 3, or do both if you finish the first quickly)

type LicenseType = "A" | "B" | "C";

type Car = {
    registrationNumber: string;
    brand: string;
    type?: string;
    color: string;
    licenseType: LicenseType;
    status: string;
    discountRate: string;
};

type CarArray = Car[];

const cars: CarArray = [];

const addCarForm = document.querySelector("form[name='add-new-car']") as HTMLFormElement | null;
if (!addCarForm) {
    console.error("Couldn't find add car form.");
} else {
    addCarForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);

        cars.splice(0); // איפוס המערך

        cars.push({
            registrationNumber: getRequiredString(formData, "registrationNumber"),
            brand: getRequiredString(formData, "brand"),
            type: getString(formData, "type"),
            color: getRequiredString(formData, "color"),
            licenseType: parseLicenseType(getRequiredString(formData, "licenseType")),
            status: getRequiredString(formData, "status"),
            discountRate: calcRate(getRequiredString(formData, "discountRate"), getRequiredString(formData, "status")),
        });

        console.log(cars);

        const carObj = document.querySelector(".carStatus") as HTMLDivElement;
        const carList = cars[0].registrationNumber + "<br>" + cars[0].brand + "<br>" + cars[0].type + "<br>" + cars[0].color + "<br>" + cars[0].licenseType + "<br>" + cars[0].status + "<br>" + cars[0].discountRate;
        carObj.innerHTML = carList;

    });
}

function getString(formData: FormData, key: string) {
    const value = formData.get(key);

    if (value == null) {
        throw new Error(`Field ${key} doesn't exist!`);
    }

    if (typeof value !== "string") {
        throw new Error(`Value of field ${key} is not a string!`);
    }

    if (!value) {
        return undefined;
    }

    return value;
}

function getRequiredString(formData: FormData, key: string) {
    const value = getString(formData, key);
    //alert(value);
    if (!value) {
        throw new Error(`Value for ${key} is required!`);
    }

    return value;
}

function parseLicenseType(value: string): LicenseType {
    if (value !== "A" && value !== "B" && value !== "C") {
        throw new Error(`Invalid license type: ${value}`);
    }

    return value;
}

function calcRate(myValue: string, myStatus: string) {

    let rate = 0;
    if (myStatus === "Discount") {
        rate = 50 * Number(myValue) / 100;
        return String(rate + "%");
    } else {
        return myValue;
    }

}