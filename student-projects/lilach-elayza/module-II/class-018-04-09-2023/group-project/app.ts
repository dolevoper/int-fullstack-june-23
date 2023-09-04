const people = [
  {
    name: "Lidor",
    phone: "053-45158244",
    age: 20,
  },
];

function app() {
  const promptText = `Welcome to quotes app!

What would you like to do?
    1. Add a person`;

  let userInput = prompt(promptText);

  while (userInput !== null) {
    handleUserInput(userInput);
    userInput = prompt(promptText);
  }
  alert (`${people[1].name}`);
}

function handleUserInput(userInput: string) {
  switch (userInput.trim()) {
    case "1":
      addPerson();
      break;

    default:
      alert("Please choose an option from the menu using their numbers.");
  }
}

function addPerson () {
  const userInput = String(prompt("Please enter a name"));
  const userInput2 = String(prompt("Please enter phone number"));
  const userInput3 = Number(prompt("Please enter age"));
  people.push({name: userInput, phone: userInput2, age: userInput3});
}

app();