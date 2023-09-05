const toDo = JSON.parse(localStorage.getItem("toDoList")) || [];
const numberedList = [];

toDoApp();

function toDoApp() {
  numbering();
  saveToDoToLocalStorage();
  const userInput = simplePrompt(
    `TO-DO:\n` +
      numberedList.join(`\n`) + `

Enter "1" or "add" to add a line.
Enter "2" or "remove" to delete a line.`
  );
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
      if (toDo.length === 0) {
        alert("Your list is empty.");
        toDoApp();
      } else {
        removeItemFromList();
      }
      break;
    default:
      announceUnknownInput(userInput);
      toDoApp();
  }
}

function addItemToList() {
  const userInput = prompt("What would you like to add to the list?");
  toDo.push(userInput);
  toDoApp();
}

function removeItemFromList() {
  const index = Number(prompt("Choose line number to remove.")) - 1;
  if (index > -1 && index < toDo.length) {
    toDo.splice(index, 1);
  } else {
    alert("Invalid line number. No item removed.");
  }
  toDoApp();
}

function simplePrompt(message: string) {
  let userInput = prompt(message)?.trim()?.toLowerCase();
  return userInput;
}

function announceUnknownInput(input: string) {
  alert(`"${input}" is not an option.`);
}

function numbering() {
  numberedList.length = 0;
  for (let i = 0; i < toDo.length; i++) {
    numberedList[i] = i + 1 + ". " + toDo[i];
  }
}

function saveToDoToLocalStorage() {
  localStorage.setItem("toDoList", JSON.stringify(toDo));
}
