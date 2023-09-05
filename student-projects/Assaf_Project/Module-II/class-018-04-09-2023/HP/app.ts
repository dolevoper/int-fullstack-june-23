function arcApp() {
  const menuPromptText = `Welcome to the Arc app!
This app will help you, "Noah", arrange your animals.
  
  What would you like to do?
      1. Show all animals
      2. Show occupied rooms
      3. Show available rooms
      4. Pair up animals
      5. Pair up pairs
      6. Show problems`;

  let userInput = prompt(menuPromptText);

  while (userInput !== null) {
    handleUserInput(userInput);
    userInput = prompt(menuPromptText);
  }
}

function handleUserInput(userInput: string) {
    switch (userInput.trim()) {
      case "1":
        alert("Animals list: " + animalNames.join(", "));
        arcApp();
        break;
      case "2":
        alert(occupiedRooms);
        arcApp();
        break;
      case "3":
        alert(availableRooms);
        arcApp();
        break;
      case "4":
        pairUp();
        break;
      case "5":
        pairCouples();
        break;
      case "6":
        conflicts();
        break;
      default:
        alert("Please choose an option from the menu using their numbers.");
    }
  }


const lions = {class: "Mammalia", order: "Carnivora", family: "Felidae", isTerrestrial: true, isHerbivore: false, isSexual: true, isTerritorial: true }

const animals = [lions, ]
const animalNames = animals.map(animal => Object.values(animal)[0]);
const availableRooms = [
    {
name: "Aquatic room",
isAquatic: true,
isOccupied: false,
isConflicted: false, 
contains: []
}
]



arcApp();

const lion = {class: "Mammalia", order: "Carnivora", family: "Felidae", isTerrestrial: true, isHerbivore: false, isSexual: true, isTerritorial: true }
const animals = [lion, bear, pig, ]