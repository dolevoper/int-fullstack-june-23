const pets = [
    {
        name: "Loki",
        type: "cat",
        gender: "male",
        age: 6,
        color: "dark grey"
    },
    {
        name: "Shima",
        type: "cat",
        gender: "female",
        age: 5,
        color: "black and white"
    },
    {
        name: "Pako",
        type: "cat",
        gender: "male",
        age: 12,
        color: "black and white"
    },
    {
        name: "Gizmo",
        type: "cat",
        gender: "male",
        age: 11,
        color: "dark grey"
    },
    {
        name: "Anna",
        type: "dog",
        gender: "female",
        age: 13,
        color: "brown and white"
    },
    {
        name: "Pepsi",
        type: "dog",
        gender: "male",
        age: 3,
        color: "brown"
    }
];

const petListElement = document.querySelector("main");
const petListHTML = pets.map(pet => `
<div>
    <h2 class = headline>${pet.name}</h2>
    <p><span class = key>Type: <span><span class = value>${pet.type}<span></p>
    <p><span class = key>Gender: <span><span class = value>${pet.gender}<span></p>
    <p><span class = key>Age: <span><span class = value>${pet.age}<span></p>
    <p><span class = key>Color: <span><span class = value>${pet.color}<span></p>
</div>
`).join('');
if (petListElement) {
    petListElement.innerHTML = petListHTML;
}

const keyClass = document.querySelectorAll("p span");

const keys = document.querySelectorAll(".key");
keys.forEach((key: HTMLElement) => {
    key.style.color = "#FF9B82";
    key.style.fontSize = "1.4rem";
});
