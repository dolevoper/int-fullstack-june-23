function arcApp() {
  const menuPromptText = `Welcome to the Arc app!
This app will help you, "Noah", arrange your animals.
  
  What would you like to do?
      1. Show all animals
      2. Show occupied rooms
      3. Show free rooms
      4. Show animals in room by room number
      5. Add animal to room
      6. Show problems`;

  let userInput = prompt(menuPromptText);

  while (userInput !== null) {
    handleUserInput(userInput);
    userInput = prompt(menuPromptText);
  }
}

function addAnimalToRoom() {
  const availableAnimalList = animals.filter((animal) => !animal.isInRoom);
  const animalNamesList = availableAnimalList.map((animal) => animal.name);
  const animalChoice = simplePrompt(
    "Choose an animal to add to a room:\n" + animalNamesList.join(", ")
  );

  const selectedAnimal = availableAnimalList.find(
    (animal) => animal.name.toLowerCase() === animalChoice
  );

  if (!selectedAnimal) {
    alert("Invalid animal choice or animal is already in a room.");
    return;
  }

  const availableRoomList = availableRooms;
  const roomNamesList = availableRoomList.map((room) => room.name);
  const roomChoice = simplePrompt(
    "Choose a room (by room number) to add the animal to:\n" +
      roomNamesList.join(", ")
  );

  const roomNumber = parseInt(roomChoice);

  if (isNaN(roomNumber) || roomNumber < 101 || roomNumber > 110) {
    alert("Invalid room number.");
    return;
  }

  // Find the correct room from the 'rooms' array
  const selectedRoom = rooms.find((room) => room.name === `Room ${roomNumber}`);

  if (!selectedRoom) {
    alert("Invalid room choice or room is already occupied.");
    return;
  }

  console.log("Selected Animal:", selectedAnimal);
  console.log("Selected Room:", selectedRoom);

  selectedRoom.contains.push(selectedAnimal);
  selectedAnimal.isInRoom = true;

  alert(`${selectedAnimal.name} has been added to ${selectedRoom.name}.`);
  console.log("Updated Selected Room:", selectedRoom);
}

function simplePrompt(message: string) {
  let userInput = prompt(message)?.trim()?.toLowerCase();
  return userInput;
}

function handleUserInput(userInput: string) {
  switch (userInput.trim()) {
    case "1":
      alert("Animals list:\n" + animalNames.join(", "));
      break;
    case "2":
      occupiedRooms.length > 0
        ? alert(
            "Occupied rooms:\n" +
              occupiedRooms.map((room) => room.name).join(", ")
          )
        : alert("There are no occupied rooms.");
      break;
    case "3":
      availableRooms.length > 0
        ? alert(
            "Available rooms:\n" +
              availableRooms.map((room) => room.name).join(", ")
          )
        : alert("All rooms are occupied.");
      break;
    case "4":
      pairUp();
      break;
    case "5":
      addAnimalToRoom();
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
    isInRoom: false,
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
    isInRoom: false,
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
    isInRoom: false,
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
    isInRoom: false,
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
    isInRoom: false,
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
    isInRoom: false,
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
    isInRoom: false,
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
    isInRoom: false,
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
    isInRoom: false,
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
    isInRoom: false,
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
    isInRoom: false,
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
    isInRoom: false,
  },
  {
    name: "Wolf",
    class: "Mammalia",
    order: "Carnivora",
    family: "Canidae",
    habitats: ["Terrestrial"],
    isHerbivore: false,
    isSexual: true,
    isTerritorial: true,
    isInRoom: false,
  },
  {
    name: "Camel",
    class: "Mammalia",
    order: "Artiodactyla",
    family: "Camelidae",
    habitats: ["Terrestrial"],
    isHerbivore: true,
    isSexual: true,
    isTerritorial: false,
    isInRoom: false,
  },
  {
    name: "Tarantula",
    class: "Arachnida",
    order: "Araneae",
    family: "Theraphosidae",
    habitats: ["Terrestrial"],
    isHerbivore: false,
    isSexual: true,
    isTerritorial: true,
    isInRoom: false,
  },
  {
    name: "Fire ant",
    class: "Insecta",
    order: "Hymenoptera",
    family: "Formicidae",
    habitats: ["Terrestrial, Burrowing, Arboreal"],
    isHerbivore: true,
    isSexual: false,
    isTerritorial: true,
    isInRoom: false,
  },
  {
    name: "Komodo Dragon",
    class: "Reptilia",
    order: "Squamata",
    family: "Varanidae",
    habitats: ["Terrestrial"],
    isHerbivore: false,
    isSexual: false,
    isTerritorial: true,
    isInRoom: false,
  },
  {
    name: "Brahminy Blind Snake",
    class: "Reptilia",
    order: "Squamata",
    family: "Typhlopidae",
    habitats: ["Burrowing"],
    isHerbivore: false,
    isSexual: false,
    isTerritorial: true,
    isInRoom: false,
  },
  {
    name: "Sheep",
    class: "Mammalia",
    order: "Artiodactyla",
    family: "Bovidae",
    habitats: ["Terrestrial"],
    isHerbivore: true,
    isSexual: true,
    isTerritorial: false,
    isInRoom: false,
  },
  {
    name: "Cow",
    class: "Mammalia",
    order: "Artiodactyla",
    family: "Bovidae",
    habitats: ["Terrestrial"],
    isHerbivore: true,
    isSexual: true,
    isTerritorial: false,
    isInRoom: false,
  },
];

const animalNames = animals.map((animal) => Object.values(animal)[0]);

const rooms = [
  {
    name: "Room 101",
    isConflicted: false,
    contains: [],
  },
  {
    name: "Room 102",
    isConflicted: false,
    contains: [],
  },
  {
    name: "Room 103",
    isConflicted: false,
    contains: [],
  },
  {
    name: "Room 104",
    isConflicted: false,
    contains: [],
  },
  {
    name: "Room 105",
    isConflicted: false,
    contains: [],
  },
  {
    name: "Room 106",
    isConflicted: false,
    contains: [],
  },
  {
    name: "Room 107",
    isConflicted: false,
    contains: [],
  },
  {
    name: "Room 108",
    isConflicted: false,
    contains: [],
  },
  {
    name: "Room 109",
    isConflicted: false,
    contains: [],
  },
  {
    name: "Room 110",
    isConflicted: false,
    contains: [],
  },
];

const availableRooms = rooms.filter((room) => room.contains.length === 0);
const occupiedRooms = rooms.filter((room) => room.contains.length > 0);


arcApp();
