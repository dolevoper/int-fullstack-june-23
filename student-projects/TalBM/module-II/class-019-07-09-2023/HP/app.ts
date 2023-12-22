const cars= [ 
    {company: "mercedes", model: "cle", year: 2023, color: "grey", power: "255", index: 15 },
    {company: "fiat", model: 500, year: 2021, color: "red", power: "177", index: 4 },
    {company: "chevrolet", model: "camero", year: 2022, color: "yellow", power: "455", index: 14 },
    {company: "jeep", model: "wrangler", year: 2023, color: "black", power: "285", index: 15 },
    {company: "aston martin", model: "vantage", year: 2022, color: "white", power: "505", index: 13 }
];

let carOnIndex = 0;

const images = ["images/mercedes.png",
"images/fiat.png",
"images/camero.png",
"images/jeep.png",
"images/martin.png"];

function makeImage() {
   const img = document.createElement('img');
   img.src = images[carOnIndex];
   document.getElementById("content").appendChild(img);
}

function returnCompany (i) {
    return cars[i].company;
}

function returnCarFullName (i) {
    return cars[i].company + " " + cars[i].model;
}

function returnYearWithText (i) {
    return "year: " + cars[i].year;
}

function returnPowerWithText (i) {
    return "horsepower: " + cars[i].power;
}

function returnColorWithText (i) {
    return "color: " + cars[i].color;
}

document.getElementById("carCompany").innerHTML= returnCompany(carOnIndex);
document.getElementById("carFullName").innerHTML= returnCarFullName(carOnIndex);
document.getElementById("carYear").innerHTML= returnYearWithText(carOnIndex);
document.getElementById("carPower").innerHTML= returnPowerWithText(carOnIndex);
document.getElementById("carColor").innerHTML= returnColorWithText(carOnIndex);

function nextCar() {
        carOnIndex += 1;
        carOnIndex = carOnIndex % images.length;
        const img = document.getElementById("content").getElementsByTagName('img')[0];
        img.src = images[carOnIndex];
        document.getElementById("carCompany").innerHTML = returnCompany(carOnIndex);
        document.getElementById("carFullName").innerHTML= returnCarFullName(carOnIndex);
        document.getElementById("carYear").innerHTML= returnYearWithText(carOnIndex);
        document.getElementById("carPower").innerHTML= returnPowerWithText(carOnIndex);
        document.getElementById("carColor").innerHTML= returnColorWithText(carOnIndex);
}

function previousCar() {
        carOnIndex -= 1;
        carOnIndex = (carOnIndex < 0) ? (carOnIndex % images.length) + images.length: carOnIndex % images.length;
        const img = document.getElementById("content").getElementsByTagName('img')[0];
        img.src = images[carOnIndex];
        document.getElementById("carCompany").innerHTML = returnCompany(carOnIndex);
        document.getElementById("carFullName").innerHTML= returnCarFullName(carOnIndex);
        document.getElementById("carYear").innerHTML= returnYearWithText(carOnIndex);
        document.getElementById("carPower").innerHTML= returnPowerWithText(carOnIndex);
        document.getElementById("carColor").innerHTML= returnColorWithText(carOnIndex);
}