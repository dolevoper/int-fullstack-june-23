let hasLamp = true;
let hasFishingPole = false;
let hasRose = false;
let hasFish = false;
let hasBranch = false;
let hasKey = false;
let hasCandle = false;
let hasCrown = false;
let score = 0;

cottage();

function cottage() {
  const userInput = simplePrompt(
    `You are standing in a small cottage. ${
      !hasFishingPole ? "There is a *fishing pole* here. " : ""
    }A door leads outside.`
  );

  switch (userInput) {
    case undefined:
      return;
    case "out":
    case "leave":
    case "exit":
      gardenPath();
      break;
    case "examine fishing pole":
      alert("You see a simple fishing pole.");
      cottage();
      break;
    case "take fishing pole":
    case "take pole":
      if (!hasFishingPole) {
        hasFishingPole = true;
        score += 5;
        alert("Fishing pole added to inventory.");
        cottage();
        break;
      }
    default:
      announceUnknownInput(userInput);
      cottage();
  }
}

function gardenPath() {
  const userInput =
    simplePrompt(`You're on a lush garden path that leads north and south.
There is a rosebush here.
There is a cottage here.
There is a winding path to the north.
There is a fish pond to the south.`);

  switch (userInput) {
    case undefined:
      return;
    case "enter":
      cottage();
      break;
    case "north":
      windingPath();
      break;
    case "south":
      fishPond();
      break;
    default:
      announceUnknownInput(userInput);
      gardenPath();
  }
}

function fishPond() {
  const userInput = simplePrompt(
    "You are at the edge of a fish pond. A path leads north."
  );

  switch (userInput) {
    case undefined:
      return;
    case "north":
      gardenPath();
      break;
    case "use fishing pole":
      if (hasFishingPole) {
        if (hasFish) {
          alert("You catch nothing...");
          fishPond();
        } else {
          hasFish = true;
          alert("You catch a wriggling *fish*!");
          fishPond();
        }
        break;
      }
    default:
      announceUnknownInput(userInput);
      fishPond();
  }
}

function windingPath() {}

function drawBridge() {}

function courtyard() {}

function towerStairs() {}

function dungeonStairs() {}

function dungeon() {}

function tower() {}

function greatFeastingHall() {}

function throneRoom() {}

function simplePrompt(message: string) {
  let userInput = prompt(message)?.trim()?.toLowerCase();

  while (hasFish && userInput === "eat fish") {
    alert("You can't eat the fish! It's raw!");
    userInput = prompt(message)?.trim()?.toLowerCase();
  }

  return userInput;
}

function announceUnknownInput(input: string) {
  alert(`Sorry, you can't "${input}"`);
}

// stub (API - application programmable interface)
// features/incremental implementation
