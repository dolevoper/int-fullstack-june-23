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
    name: "Fire Ant",
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

const animalsFoldBar = document.querySelector(".animals");
const roomsFoldBar = document.querySelector(".rooms");
const conflictsFoldBar = document.querySelector(".conflicts");

const animalMenuButton = document.querySelector(
  ".game-menu__button.--animals-button"
);
const roomsMenuButton = document.querySelector(
  ".game-menu__button.--rooms-button"
);
const conflictsMenuButton = document.querySelector(
  ".game-menu__button.--conflicts-button"
);

animalMenuButton?.addEventListener("click", animalMenuButtonSelected);
roomsMenuButton?.addEventListener("click", roomsMenuButtonSelected);
conflictsMenuButton?.addEventListener("click", conflictsMenuButtonSelected);

function animalMenuButtonSelected() {
  animalMenuButton?.classList.toggle("is-active");
  animalsFoldBar?.classList.toggle("is-active");
  if (roomsMenuButton?.classList.contains("is-active")) {
    roomsMenuButton?.classList.toggle("is-active");
    roomsFoldBar?.classList.toggle("is-active");
  } else if (conflictsMenuButton?.classList.contains("is-active")) {
    conflictsMenuButton?.classList.toggle("is-active");
    conflictsFoldBar?.classList.toggle("is-active");
  }
}

function roomsMenuButtonSelected() {
  roomsMenuButton?.classList.toggle("is-active");
  roomsFoldBar?.classList.toggle("is-active");
  if (animalMenuButton?.classList.contains("is-active")) {
    animalMenuButton?.classList.toggle("is-active");
    animalsFoldBar?.classList.toggle("is-active");
  } else if (conflictsMenuButton?.classList.contains("is-active")) {
    conflictsMenuButton?.classList.toggle("is-active");
    conflictsFoldBar?.classList.toggle("is-active");
  }
}

function conflictsMenuButtonSelected() {
  conflictsMenuButton?.classList.toggle("is-active");
  conflictsFoldBar?.classList.toggle("is-active");
  if (animalMenuButton?.classList.contains("is-active")) {
    animalMenuButton?.classList.toggle("is-active");
    animalsFoldBar?.classList.toggle("is-active");
  } else if (roomsMenuButton?.classList.contains("is-active")) {
    roomsMenuButton?.classList.toggle("is-active");
    roomsFoldBar?.classList.toggle("is-active");
  }
}

const optionsNav = document.querySelector(".options__nav");
const optionsButton = document.querySelector(
  ".game-menu__button--options-button"
);
optionsButton?.addEventListener("click", optionsSelected);

function optionsSelected() {
  optionsButton?.classList.toggle("is-active");
  optionsNav?.classList.toggle("is-active");
}

const sky = document.querySelector(".sky");
const stars = document.querySelectorAll(".star");
const wave = document.querySelector(".wave");

const nightDayToggle = document.querySelector(
  ".options__nav-menu-list-item.--time-of-day"
);
nightDayToggle?.addEventListener("click", timeToggle);

function timeToggle() {
  sky?.classList.toggle("--is-day");
  nightDayToggle?.classList.toggle("--is-day");
  wave?.classList.toggle("--is-day");

  if (nightDayToggle?.classList.contains("--is-day")) {
    (nightDayToggle as HTMLElement).innerText = "Night Time";
  } else {
    (nightDayToggle as HTMLElement).innerText = "Day Time";
  }
}

function toggleStarsDayClass() {
  stars.forEach(function (star) {
    star.classList.toggle("--is-day");
  });
}

if (nightDayToggle) {
  nightDayToggle.addEventListener("click", toggleStarsDayClass);
}
