type ManufactureOptions = "Fender" | "Gibson" | "MusicMan" | "Ibanez";
type MadeInOptions = "USA" | "Mexico" | "Japan";
type GuitarFormData = {
    manufacture: ManufactureOptions;
    model: string;
    madein: MadeInOptions;
    year: number;
};


let guitarData: GuitarFormData[] = [];

const savedData = localStorage.getItem("guitarData");
if (savedData) {
    guitarData = JSON.parse(savedData);
}

function handleFormSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const guitarObject: GuitarFormData = {
        manufacture: formData.get("manufacturer") as ManufactureOptions,
        model: formData.get("model") as string,
        madein: formData.get("madein") as MadeInOptions,
        year: parseInt(formData.get("year") as string, 10),
    };

  
    guitarData.push(guitarObject);

    localStorage.setItem("guitarData", JSON.stringify(guitarData));
    console.log("Updated Guitar Data:", guitarData);
}


const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", handleFormSubmit);
}

function handleClear(event: Event) {
    localStorage.removeItem("guitarData");
    console.log("Clear the database");
}

const clearButton = document.querySelector("button[type=clear]");
if (clearButton) {
    clearButton.addEventListener("click", handleClear);
}