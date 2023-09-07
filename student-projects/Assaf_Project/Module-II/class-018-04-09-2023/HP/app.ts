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
      alert("Animals list:\n" + animalNames.join(", "));
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

const animals = [
  {
    name: "Lion",
    class: "Mammalia",
    order: "Carnivora",
    family: "Felidae",
    habitats: ["Terrestrial"],
    isHerbivore: false,
    isSexual: true,
    isTerritorial: true,
  },
  {
    name: "Horse",
    class: "Mammalia",
    order: "Perissodactyla",
    family: "Equidae",
    habitats: ["Terrestrial"],
    isHerbivore: true,
    isSexual: true,
    isTerritorial: false,
  },
  {
    name: "Boar",
    class: "Mammalia",
    order: "Artiodactyla",
    family: "Suidae",
    habitats: ["Terrestrial"],
    isHerbivore: true,
    isSexual: true,
    isTerritorial: true,
  },
  {
    name: "Prairie Dog",
    class: "Mammalia",
    order: "Rodentia",
    family: "Sciuridae",
    habitats: ["Terrestrial, Burrowing"],
    isHerbivore: true,
    isSexual: true,
    isTerritorial: false,
  },
  {
    name: "Badger",
    class: "Mammalia",
    order: "Carnivora",
    family: "Mephitidae",
    habitats: ["Terrestrial, Burrowing"],
    isHerbivore: false,
    isSexual: true,
    isTerritorial: true,
  },
  {
    name: "Three-Toed Sloth",
    class: "Mammalia",
    order: "Pilosa",
    family: "Bradypodidae",
    habitats: ["Arboreal"],
    isHerbivore: true,
    isSexual: true,
    isTerritorial: false,
  },
  {
    name: "Koala",
    class: "Mammalia",
    order: "Diprotodontia",
    family: "Phascolarctidae",
    habitats: ["Arboreal"],
    isHerbivore: true,
    isSexual: true,
    isTerritorial: false,
  },
  {
    name: "Green Tree Python",
    class: "Reptilia",
    order: "Squamata",
    family: "Pythonidae",
    habitats: ["Arboreal, Terrestrial"],
    isHerbivore: false,
    isSexual: true,
    isTerritorial: true,
  },
  {
    name: "Bat",
    class: "Mammalia",
    order: "Chiroptera",
    family: "Chiropteridae",
    habitats: ["Aerial"],
    isHerbivore: true,
    isSexual: true,
    isTerritorial: false,
  },
  {
    name: "Eagle",
    class: "Aves",
    order: "Accipitriformes",
    family: "Accipitridae",
    habitats: ["Aerial"],
    isHerbivore: false,
    isSexual: true,
    isTerritorial: true,
  },
  {
    name: "Dove",
    class: "Aves",
    order: "Columbiformes",
    family: "Columbidae",
    habitats: ["Aerial"],
    isHerbivore: true,
    isSexual: true,
    isTerritorial: false,
  },
  {
    name: "Rose-Ringed Parakeet",
    class: "Aves",
    order: "Psittaciformes",
    family: "Psittaculidae",
    habitats: ["Aerial"],
    isHerbivore: true,
    isSexual: true,
    isTerritorial: false,
  },
];

const animalNames = animals.map((animal) => Object.values(animal)[0]);
const availableRooms = [
  {
    name: "Aquatic room",
    isAquatic: true,
    isOccupied: false,
    isConflicted: false,
    contains: [],
  },
];

arcApp();
