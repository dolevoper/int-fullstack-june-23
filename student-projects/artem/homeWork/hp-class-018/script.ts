const numberOfObjects: number = 10;

const picturesOwnersArray = [
  "Image by wal_172619 from Pixabay",
  "Image by wal_172619 from Pixabay",
  "Image by hartono subagio from Pixabay",
  "Image by Peter Anta from Pixabay",
  "Image by Stefan Schweihofer from Pixabay",
  "Image by Markus Kammermann from Pixabay",
  "Image by Fabien - Pixabay Ambassador from Pixabay",
  "Image by mayos950 from Pixabay",
  "Image by SaMiKo2017 from Pixabay",
  "Image by beasternchen from Pixabay",
];

const objectsArray: [object] = [];

for (let i = 1; i <= numberOfObjects; i += 1) {
  console.log(i);

  let key: string = `${i}`;

  let entry: string = `entry${i}`;

  objectsArray.push({ key: entry });
}

// console.log(objectsArray);

// console.log(objectsArray[0]);

objectsArray.map((it, index) => {
  let li = document.createElement("li");
  li.classList.add(`class${index}`);
  li.setAttribute("id", `id_${index}`);

  const elementToAppend = document.querySelector(".arrays");
  // console.log(elementToAppend);
  elementToAppend?.appendChild(li);

  li.textContent = `${index + 1}: ${JSON.stringify(it)}`;

  const imageElement = document.createElement("img");
  li.appendChild(imageElement);

  imageElement.src = `${index}.jpg`;

  // const ownerTag = document.createElement('tag');

  // const content:string = picturesOwnersArray[index];

  // const ownerContent = document.createTextNode(`${content}`);

  // ownerTag.appendChild(ownerContent);
  // li.appendChild(ownerTag);

  const ownerTag = document.createElement("tag");

  ownerTag.style.position = "relative";
  ownerTag.style.marginBottom = "2em";
  ownerTag.style.marginTop = "-2em";
  ownerTag.style.color = "white";

  ownerTag.textContent = `${picturesOwnersArray[index]}`;

  li.appendChild(ownerTag);

  li.style.display = "flex";
  li.style.flexDirection = "column";
});

document.body.style.listStyle = "none";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "space-around";
document.body.style.alignItems = "center";

// console.log(elementToChangeStyle);
