function itemsApp() {
  const userInput = simplePrompt(
    `Items List:\n` + items.join(`\n`) + `${items.Name}${quote.author}`
  );
  `
      
Enter "1" or "add" to add an item.
Enter "2" or "remove" to delete an item.`;
  switch (userInput) {
    case undefined:
    case "exit":
      return;
    case "1":
    case "add":
      addItemToList();
      break;
    case "2":
    case "remove":
    case "delete":
      if (items.length === 0) {
        alert("Your list is empty.");
        itemsApp();
      } else {
        removeItemFromList();
      }
      break;
    default:
      announceUnknownInput(userInput);
      itemsApp();
  }
}

function addItemToList() {
  const userInput = prompt("What item would you like to add to the list?");
  items.push(userInput);
  itemsApp();
}

function removeItemFromList() {
  const index = Number(prompt("Choose item by name to remove.")) - 1;
  if (!name || items.name.length <= 0) {
    items.splice(index, 1);
  } else {
    alert("Invalid line number. No item removed.");
  }
  itemsApp();
}

function simplePrompt(message: string) {
  let userInput = prompt(message)?.trim()?.toLowerCase();
  return userInput;
}

function announceUnknownInput(input: string) {
  alert(`"${input}" is not an option.`);
}

const items = [
  {
    Name: "milk",
    price: "3.5",
    Amount: "100",
    aisle: "4",
  },
  {
    Name: "cheese",
    price: "2.3",
    Amount: "50",
    aisle: "4",
  },
  {
    Name: "Chocolate treat",
    price: "4",
    Amount: "40",
    aisle: "4",
  },
  {
    Name: "Goat Cheese",
    price: "4.7",
    Amount: "25",
    aisle: "4",
  },
  {
    Name: "Red meat",
    price: "8",
    Amount: "250",
    aisle: "1",
  },
  {
    Name: "sausage",
    price: "5",
    Amount: "145",
    aisle: "1",
  },
  {
    Name: "A whole chicken",
    price: "9",
    Amount: "10",
    aisle: "1",
  },
  {
    Name: "tomato",
    price: "1.3",
    Amount: "200",
    aisle: "2",
  },
  {
    Name: "cucumber",
    price: "1.4",
    Amount: "365",
    aisle: "2",
  },
  {
    Name: "Banana",
    price: "2",
    Amount: "123",
    aisle: "2",
  },
  {
    Name: "watermelon",
    price: "3.2",
    Amount: "65",
    aisle: "2",
  },
  {
    Name: "cabbage",
    price: "2.1",
    Amount: "32",
    aisle: "2",
  },
  {
    Name: "disposable cups",
    price: "5.2",
    Amount: "300",
    aisle: "3",
  },
  {
    Name: "Disposable plates",
    price: "5.7",
    Amount: "176",
    aisle: "3",
  },
  {
    Name: "tablespoon",
    price: "1.4",
    Amount: "2765",
    aisle: "3",
  },
  {
    Name: "fork",
    price: "1.1",
    Amount: "2343",
    aisle: "3",
  },
];

itemsApp();
