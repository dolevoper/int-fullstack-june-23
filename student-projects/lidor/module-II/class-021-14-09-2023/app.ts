type LicenseType = "A" | "B" | "C";
type CarStatus = "free" | "discount" | "banned";

type DiscountRate = "10" | "30" | "50" | "70";

type Car = {
  registrationNumber: string;
  brand: string;
  type?: string;
  color: string;
  licenseType: LicenseType;
  Status: CarStatus;
  Rate: DiscountRate;
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
      Status: getCarStatus(getRequiredString(formData, "carStatus")),
      Rate: getCarRate(getRequiredString(formData, "Rate")),
    });

    console.log(cars);
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

  return value as LicenseType;
}

function getCarStatus(value: string): CarStatus {
  if (value !== "free" && value !== "discount" && value !== "banned") {
    throw new Error(`Invalid status: ${value}`);
  }

  return value as CarStatus;
}

function getCarRate(value: string): DiscountRate {
  if (value !== "10" && value !== "30" && value !== "50" && value !== "70") {
    throw new Error(`Invalid rate: ${value}`);
  }

  return value as DiscountRate;
}

function toggleDiscountRateVisibility() {
  const carStatusSelect = document.getElementById("car-status");
  const discountRate = document.getElementById("discount-rate");

  carStatusSelect!.addEventListener("change", function () {
    if (carStatusSelect!.value === "discount") {
      discountRate!.style.display = "block";
    } else {
      discountRate!.style.display = "none";
    }
  });
}

toggleDiscountRateVisibility();

// Function to update the carousel with car details
function updateCarousel() {
  const carouselInner = document.querySelector(".carousel-inner");
  carouselInner!.innerHTML = `<div><strong>Registration Number:</strong> ${cars[currentIndex].registrationNumber}</div>
     <div><strong>Brand:</strong> ${cars[currentIndex].brand}</div>
   <div><strong>Type:</strong> ${cars[currentIndex].type}</div>
 <div><strong>Color:</strong> ${cars[currentIndex].color}</div>
     <div><strong>License Type:</strong> ${cars[currentIndex].licenseType}</div>
   <div><strong>Status:</strong> ${cars[currentIndex].Status}</div>
     <div><strong>Rate:</strong> ${cars[currentIndex].Rate}%</div>`;
}

// Event listeners for navigation buttons
let currentIndex = 0;

document.querySelector(".carousel-prev")?.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + cars.length) % cars.length;
  updateCarousel();
});

document.querySelector(".carousel-next")?.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cars.length;
  updateCarousel();
});

// Initial update to show the first car
updateCarousel();
