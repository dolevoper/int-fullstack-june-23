let score = 0;
let inventoryItems = ["a lamp"];
let hasLamp = true;
let hasFishingPole = false;
let hasRose = false;
let hasFish = false;
let hasBranch = false;
let hasKey = false;
let hasCandle = false;
let hasCrown = false;
let isTrollBlocking = true;
let isGuardConscious = true;
let isGuardWearingKey = false;
let isWearingCrown = false;

courtyard();

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
    case "examine pole":
      if (!hasFishingPole) {
        alert("You see a simple fishing pole.");
      }
      cottage();
      break;
    case "take fishing pole":
    case "take pole":
      if (!hasFishingPole) {
        hasFishingPole = true;
        inventoryItems.push("\na fishing pole");
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
        inventoryItems.push("\na rose");
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
          inventoryItems.push("\na fish");
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
    `You are walking along a winding path that leads south and east.
There is a tall tree here.`
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
    `You are at the top of a tall tree.\n${
      !hasBranch ? "There is a stout dead *branch* here. " : ""
    }From your perch you can see the tower of Action Castle.`
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
    case "examine dead branch":
    case "examine branch":
      if (!hasBranch) {
        alert("You think it would make a good club.");
      }
      tallTree();
      break;
    case "take branch":
    case "take dead branch":
    case "break branch":
    case "break dead branch":
      if (!hasBranch) {
        hasBranch = true;
        inventoryItems.push("\na branch");
        score += 5;
        alert("Branch added to inventory.");
        tallTree();
        break;
      }
    case "jump":
    case "jump down":
      alert("Forgeting you are mortal, you jump down from the tree.");
      alert("...");
      alert("You fall and break every bone in your body!");
      deathAnnouncment();
      return;
    default:
      announceUnknownInput(userInput);
      tallTree();
  }
}

function drawBridge() {
  const userInput = simplePrompt(
    `You come to the drawbridge of Action Castle.
There is a path that leads west and a bridge that leads east ${
      isTrollBlocking ? "\nThere is a mean troll guarding the bridge. " : ""
    }`
  );
  switch (userInput) {
    case undefined:
      return;
    case "west":
      windingPath();
      break;
    case "examine troll":
    case "examine mean troll":
      alert(
        "The troll has a warty green hide and a foul stench.\nHe looks hungry."
      );
      drawBridge();
      break;
    case "cross":
    case "cross bridge":
    case "east":
    case "go east":
      if (isTrollBlocking) {
        alert("The troll blocks your path.");
        drawBridge();
        break;
      } else courtyard();
      break;
    case "give fish":
    case "give fish to troll":
      if (hasFish && isTrollBlocking) {
        hasFish = false;
        removeItemFromInventory("a fish");
        isTrollBlocking = false;
        score += 10;
        alert(
          `You take the fish out of your bag and show it to the troll.
  He looks at you, releases a grunt and takes the fish out of your hands.
  He sniffs the fish and runs away with it...`
        );
        alert("The bridge is now clear.");
        drawBridge();
        break;
      }
    case "hit troll":
    case "hit troll with branch":
    case "club troll":
      if (hasBranch && isTrollBlocking) {
        alert("You hit the troll with the branch you found.");
        alert("The branch breaks.\nThe troll berely felt your weak attempt");
        alert("The troll laughs as he rips your limbs apart from your body!");
        deathAnnouncment();
        return;
      } else if (!hasBranch && isTrollBlocking) {
        alert("You try to punch the troll.");
        alert("The hand breaks.\nThe troll berely felt your weak attempt");
        alert("The troll laughs as he rips your limbs apart from your body!");
        deathAnnouncment();
        return;
      }
    default:
      announceUnknownInput(userInput);
      drawBridge();
  }
}

function courtyard() {
  const userInput = simplePrompt(
    `You are in the courtyard of Action Castle.\n${
      isWearingCrown
        ? `The guard drops to his knee and bows deeply.
"Your public awaits you in the throne room."
He opens the door behind him for you.`
        : isGuardConscious
        ? "A castle guard stands watch to the east and there is a door behind him."
        : "The guard lays unconscious next to a door to the east."
    }
Stairs lead up into the tower and down into the darkness.`
  );
  switch (userInput) {
    case undefined:
      return;
    case "west":
      drawBridge();
      break;
    case "up":
    case "go up":
    case "go up the stairs":
      towerStairs();
      break;
    case "down":
    case "go down":
    case "go down the stairs":
      dungeonStairs();
      break;
    case "east":
    case "go east":
      if (isWearingCrown) {
        greatFeastingHall();
        break;
      } else if (isGuardConscious) {
        alert(`The guard is blocking your way.\n"Only royalty may enter!"`);
        courtyard();
        break;
      }
      greatFeastingHall();
      break;
    case "examine guard":
      if (isWearingCrown) {
        alert("The guard is bowing to you with respect.");
        courtyard();
        break;
      }
      alert(
        `${
          isGuardConscious
            ? `The guard wears chainmail armor but no helmet.`
            : "The guard lays unconscious."
        }\n${isGuardWearingKey ? "A key hangs from his belt." : ""}`
      );
      courtyard();
      break;
    default:
      announceUnknownInput(userInput);
      courtyard();
  }
}

function towerStairs() {}

function dungeonStairs() {}

function tower() {}

function dungeon() {}

function greatFeastingHall() {
  alert("hey");
}

function throneRoom() {}

function simplePrompt(message: string) {
  let userInput = prompt(message)?.trim()?.toLowerCase();

  while (
    (hasFishingPole && userInput === "examine pole") ||
    userInput === "examine fishing pole"
  ) {
    alert("Usually people use fishing poles to catch fish...");
    userInput = prompt(message)?.trim()?.toLowerCase();
  }
  while (hasFish && userInput === "eat fish") {
    alert("You can't eat the fish! It's raw!");
    userInput = prompt(message)?.trim()?.toLowerCase();
  }
  while (hasRose && userInput === "smell rose") {
    alert("The rose scent is spreading in your inventory...");
    userInput = prompt(message)?.trim()?.toLowerCase();
  }
  while (
    (hasBranch && userInput === "examine branch") ||
    userInput === "examine dead branch"
  ) {
    alert("I wouldn't want to get hit with this!");
    userInput = prompt(message)?.trim()?.toLowerCase();
  }
  while (userInput === "inventory") {
    alert("You take a look in your inventory and see:\n" + inventoryItems);
    userInput = prompt(message)?.trim()?.toLowerCase();
  }
  while (userInput === "score") {
    // delete after checking if all adds up
    alert(score);
    userInput = prompt(message)?.trim()?.toLowerCase();
  }
  return userInput;
}

function announceUnknownInput(input: string) {
  alert(`Sorry, you can't "${input}"`);
}

function removeItemFromInventory(item: string) {
  const index = inventoryItems.indexOf(item);
  if (index > -1) {
    inventoryItems.splice(index, 1);
  }
}

function deathAnnouncment() {
  alert("You are dead!");
  alert("GAME OVER!!!");
  alert("You're score is:\n" + score + "/100");
}

// stub (API - application programmable interface)
// features/incremental implementation
