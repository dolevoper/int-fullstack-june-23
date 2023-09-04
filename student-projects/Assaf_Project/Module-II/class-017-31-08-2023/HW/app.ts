const toDo = JSON.parse(localStorage.getItem("toDo")) || [];
const numberedList = [];

toDoApp();

function toDoApp() {
  saveToDoToLocalStorage();
  const userInput = simplePrompt(`This is yout "To-Do list" menu:
If you want to show the full list write 1 or "show list".
If you want to add an assignment write 2 or "add".
If you want to remove an assignment write 3 or "remove".
To exit press cancel or "exit".`);
  switch (userInput) {
    case undefined:
    case "exit":
      return;
    case "1":
    case "show list":
    case "show":
      if (toDo.length === 0) {
        alert("Your list is empty.");
      } else {
        numbering();
        alert(numberedList.join(`\n`));
      }
      toDoApp();
      break;
    case "2":
    case "add":
      addItemToList();
      break;
    case "3":
    case "remove":
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
  localStorage.setItem("toDo", JSON.stringify(toDo));
}
