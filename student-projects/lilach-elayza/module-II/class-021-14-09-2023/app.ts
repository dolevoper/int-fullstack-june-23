// Class project
// 1. Add new field to car: status. Can be "normal", "free", "discount", "banned". In the form, "free" should be the default.
// 2. Show the cars list and allow to edit car status
// 3. Add a new field "discountRate" - when status is "discount" this should have the discount rate
// (Choose 2 or 3, or do both if you finish the first quickly)

type LicenseType = "A" | "B" | "C";
type status = "free" | "discount" | "normal" | "banned";

type Car = {
  registrationNumber: string;
  brand: string;
  type?: string;
  color: string;
  licenseType: LicenseType;
  status: status;
};

type CarArray = Car[];

const cars: CarArray = [];

const addCarForm = document.querySelector(
  "form[name='add-new-car']"
) as HTMLFormElement | null;
if (!addCarForm) {
  console.error("Couldn't find add car form.");
} else {
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
    });

    let carList = document.getElementById("car-list") as HTMLElement;
    if (!carList) {
      carList = document.createElement("div");
      carList.id = "car-list";
    }
    const listHTML = cars.map((car, index) => `
        <div class="car" data-index="${index}">
            <p>Registration #: ${car.registrationNumber}</p>
            <p>Brand: ${car.brand}</p>
            <p>Type: ${car.type}</p>
            <p>Color: ${car.color}</p>
            <p>License Type: ${car.licenseType}</p>
            <p>Status: <span class="editable" contenteditable="true">${car.status}</span></p>
        </div>`).join("");
    carList.innerHTML = listHTML;

    const editables = document.querySelectorAll(".editable");
    editables.forEach((editable) => {
      editable.addEventListener("blur", function () {
        const index = this.parentElement.parentElement.dataset.index;
        const newStatus = this.innerText;
        cars[index].status = parseStatus(newStatus);
      });
    });
    document.body.appendChild(carList);
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
  if (
    value !== "free" &&
    value !== "discount" &&
    value !== "normal" &&
    value !== "banned"
  ) {
    throw new Error(`Invalid status: ${value}`);
  }

  return value;
}
