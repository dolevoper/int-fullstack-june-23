let score = 0;
let inventoryItems = ["Lamp"];
let hasLamp = true;
let hasFishingPole = false;
let hasRose = false;
let hasFish = false;
let hasBranch = false;
let hasKey = false;
let hasCandle = false;
let hasCrown = false;

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
        inventoryItems.push("\nFishing pole");
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
There is a cottage here.`);

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
    case "examine rosebush":
    case "examine bush":
      alert(
        `${
          !hasRose
            ? "You find a single red *rose*. "
            : "This is a very nice bush."
        }`
      );
      gardenPath();
      break;
    case "smell rose":
      if (!hasRose) {
        alert(
          "You lean a little bit closer and see that\nroses really smell like poo-ooo-ooh."
        );
      }
      gardenPath();
      break;
    case "take rose":
    case "get rose":
    case "pick rose":
      if (!hasRose) {
        hasRose = true;
        inventoryItems.push("\nRose");
        score += 5;
        alert("Rose added to inventory.");
        gardenPath();
        break;
      }
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
    case "use pole":
      if (hasFishingPole) {
        if (hasFish) {
          alert("You catch nothing...");
          fishPond();
        } else {
          hasFish = true;
          inventoryItems.push("\nFish");
          score += 5;
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

function windingPath() {
  const userInput = simplePrompt(
    "You are walking along a winding path that leads south and east.\nThere is a tall tree here."
  );
  switch (userInput) {
    case undefined:
      return;
    case "south":
      gardenPath();
      break;
    case "east":
      drawBridge();
      break;
    case "up":
    case "climb":
    case "climb up":
    case "climb tree":
      alert("You climb up the tree.");
      alert("...");
      alert("It takes a long time.");
      tallTree();
      break;
    default:
      announceUnknownInput(userInput);
      windingPath();
  }
}

function tallTree() {
  const userInput = simplePrompt(
    "You are at the top of a tall tree.\nThere is a stout dead *branch* here.\nFrom yout perch you can see the tower of Action Castle."
  );
  switch (userInput) {
    case undefined:
      return;
    case "climb":
    case "climb down":
    case "down":
      alert("You climb down the tree.");
      alert("...");
      alert("It takes a long time.");
      windingPath();
      break;
    default:
      announceUnknownInput(userInput);
      tallTree();
  }
}

function drawBridge() {}

function courtyard() {}

function towerStairs() {}

function dungeonStairs() {}

function tower() {}

function dungeon() {}

function greatFeastingHall() {}

function throneRoom() {}

function simplePrompt(message: string) {
  let userInput = prompt(message)?.trim()?.toLowerCase();

  while (hasFish && userInput === "eat fish") {
    alert("You can't eat the fish! It's raw!");
    userInput = prompt(message)?.trim()?.toLowerCase();
  }
  while (hasRose && userInput === "smell rose") {
    alert("The rose scent is spreading in your inventory...");
    userInput = prompt(message)?.trim()?.toLowerCase();
  }
  while (userInput === "inventory") {
    alert(inventoryItems);
    userInput = prompt(message)?.trim()?.toLowerCase();
  }
  while (userInput === "score") {
    alert(score);
    userInput = prompt(message)?.trim()?.toLowerCase();
  }
  return userInput;
}

function announceUnknownInput(input: string) {
  alert(`Sorry, you can't "${input}"`);
}

// stub (API - application programmable interface)
// features/incremental implementation
