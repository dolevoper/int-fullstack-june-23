// Class project
// 1. Add new field to car: status. Can be "normal", "free", "discount", "banned". In the form, "free" should be the default.
// 2. Show the cars list and allow to edit car status
// 3. Add a new field "discountRate" - when status is "discount" this should have the discount rate
// (Choose 2 or 3, or do both if you finish the first quickly)

type LicenseType = "A" | "B" | "C";
type status = "normal" | "free" | "discount" | "banned";
// let DiscountRate: string

type Car = {
    registrationNumber: string;
    brand: string;
    type?: string;
    color: string;
    licenseType: LicenseType;
    status: status;
<<<<<<< HEAD
    DiscountRate: string;
=======
    // DiscountRate?: string;
>>>>>>> shai/class-14-home-work

};

type CarArray = Car[];

const cars: CarArray = [];

const addCarForm = document.querySelector("form[name='add-new-car']") as HTMLFormElement | null;
if (!addCarForm) {
    console.error("Couldn't find add car form.");
<<<<<<< HEAD
} 
else {
=======
} else {
>>>>>>> shai/class-14-home-work
    addCarForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);

        cars.push({
            registrationNumber: getRequiredString(formData, "registrationNumber"),
            brand: getRequiredString(formData, "brand"),
            type: getString(formData, "type"),
            color: getRequiredString(formData, "color"),
            licenseType: parseLicenseType(getRequiredString(formData, "licenseType")),
            status: parseStatus(getRequiredString(formData, "status")),
<<<<<<< HEAD
            DiscountRate: getString(formData, "DiscountRate"),
=======
            // DiscountRate: getString(formData, "DiscountRate"),
>>>>>>> shai/class-14-home-work
        });

        console.log(cars);
        // console.log(DiscountRate);
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
function parseStatus(value: string): status {
    if (value !== "normal" && value !== "free" && value !== "discount" && value !== "banned") {
        throw new Error(`Invalid status type: ${value}`);
    }
    return value;
}
