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
  discount?: string;
};
type CarArray = Car[];
const cars: CarArray = [];
const addCarForm = document.querySelector("form[name='add-new-car']") as HTMLFormElement | null;
let carList = document.getElementById("car-list") as HTMLElement;

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
      discount: getOptionalString(formData, "discount"),
    });

    refreshCarList();

    const editableStatus = document.querySelectorAll(".editable");
    editableStatus.forEach((status: HTMLElement) => {
      status.addEventListener("keypress", function (e: KeyboardEvent) {
        if (e.key === "Enter") {
          const index = parseInt(status.parentElement!.parentElement!.dataset.index || "");

          if (!isNaN(index)) {
            const newStatus = status.innerText;
            cars[index].status = parseStatus(newStatus);

            if (newStatus === "discount") {
              const discountSpan = status.parentElement!.parentElement!.querySelector(".listedDiscount") as HTMLElement;
              discountSpan.setAttribute("contenteditable", "true");
              discountSpan.focus();

              discountSpan.addEventListener("keypress", (e: KeyboardEvent) => {
                if (e.key === "Enter") {
                  const newIndex = parseInt(discountSpan.parentElement!.parentElement!.dataset.index || "");
                  if (!isNaN(newIndex)) {
                    const newRate = discountSpan.innerText;
                    cars[newIndex].discount = validateRate(newRate);
                  }
                  discountSpan.blur();
                  refreshCarList();
                }
              });
            } else {
              const discountSpan = status.parentElement!.parentElement!.querySelector(".listedDiscount") as HTMLElement;
              discountSpan.removeAttribute("contenteditable");
              cars[index].discount = undefined;
              refreshCarList();
            }
          }
          status.blur();
        }
      });
    });
    document.body.appendChild(carList);
  });
}

const statusField = document.getElementById("status") as HTMLSelectElement;
statusField.addEventListener("change", function () {
  const selectedStatus = statusField.value;
  if (selectedStatus === "discount") {
    const discountRateHTML = `
            <label for="discount">Discount Rate (%)</label>
            <input type="numeric" id="discount" name="discount" pattern="\d+" minlength="1" maxlength="2" />
        `;
    const discountRate = document.createElement("div");
    discountRate.className = "form-input";
    discountRate.id = "discountDiv";
    discountRate.innerHTML = discountRateHTML;
    const statusDiv = document.querySelector("#statusDiv") as HTMLDivElement;
    statusDiv.parentElement?.insertBefore(discountRate, statusDiv.nextSibling);
  } else {
    let discountRate = document.querySelector("#discountDiv");
    discountRate?.remove();
  }
});

function refreshCarList() {
    const listHTML = cars.map((car, index) => `
    <div class="car" data-index="${index}">
    <p>Registration #: ${car.registrationNumber}</p>
    <p>Brand: ${car.brand}</p>
    <p>Type: ${car.type}</p>
    <p>Color: ${car.color}</p>
    <p>License Type: ${car.licenseType}</p>
    <p>Status: <span class="editable" contenteditable="true">${car.status}</span></p>
    <p>Discount Rate: <span class="listedDiscount">${car.discount}</span></p>
    </div>
    <br />
    `).join("");
    carList.innerHTML = listHTML;
}

function validateRate(rate: string) {
    if (isNaN(Number(rate)) || Number(rate) < 1 || Number(rate) > 99) {
        throw new Error(`Discount rate must be a number between 1-99!`);
    }

    return rate;
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

function getOptionalString(formData: FormData, key: string) {
  const value = formData.get(key);

  if (value == null) {
    return;
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
  if (value !== "free" && value !== "discount" && value !== "normal" && value !== "banned") {
    throw new Error(`Invalid status: ${value}`);
  }

  return value;
}
