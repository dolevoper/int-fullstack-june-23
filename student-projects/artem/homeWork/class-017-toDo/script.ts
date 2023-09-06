let taskList = [];

function mainMenu() {
  if (taskList.length === 0) {
    if (localStorage.getItem("toDos") !== null) {
      const taskListFromLocalStorage: string[] = JSON.parse(
        localStorage.getItem("toDos")
      );

      let restoredTaskList: string[] = taskListFromLocalStorage.map(
        (it, index) => `\n ${index + 1}: ${it}`
      );

      taskList = [].concat(restoredTaskList);
    }
  }

  const userInput: string = prompt(
    `to add new task -- please enter 'add',\nto delete previously added task -- please enter "delete",\nto edit previously added task -- plese enter "edit", \nto clear list of tasks -- please enter "clear", \nto view the list of tasks -- please enter 'view'. \nMake your choise.`
  )
    ?.trim()
    .toLowerCase();

  switch (userInput) {
    case "add":
      console.log("add");
      addToList(userInput);
      break;

    case "view":
      console.log("view");
      viewList();
      break;

    case "clear":
      console.log("clear");
      clearTaskList();
      break;

    case "delete":
      console.log("delete");
      deleteTask();
      break;

    case "edit":
      console.log("edit");
      editTask();
      break;

    default:
      mainMenu();
  }
}

function addToList(addedInput: string) {
  const taskToDo = prompt(`Enter the task you want to add:`)
    ?.trim()
    .toLowerCase();

  //   localStorage.setItem(`${taskList.length + 1}`, `${taskToDo}`);

  taskList.push(`\n ${taskList.length + 1}: ${taskToDo}`);

  let partsToInsertArr: string[] = taskList.map((it) => it.split(":").pop());

  localStorage.clear();

  localStorage.setItem("toDos", JSON.stringify(partsToInsertArr));

  console.log(taskList);
  mainMenu();
}

function viewList() {
  alert(taskList);
  mainMenu();
}

function clearTaskList() {
  taskList = [];
  localStorage.clear();
  mainMenu();
}

function deleteTask() {
  const itemToDelete: number = Number(
    prompt("What is the number of the task that you want to delete?")
  );

  if (
    itemToDelete < 1 ||
    itemToDelete > taskList.length ||
    isNaN(itemToDelete)
  ) {
    deleteTask();
  }

  taskList.splice(itemToDelete - 1, 1);

  let partsToInsertArr: string[] = taskList.map((it) => it.split(":").pop());

  let newTaskList: string[] = partsToInsertArr.map(
    (it, index) => `\n ${index + 1}: ${it}`
  );

  taskList = [].concat(newTaskList);

  localStorage.clear();

  localStorage.setItem("toDos", JSON.stringify(partsToInsertArr));

  mainMenu();
}

function editTask() {
  const itemToEdit: number = Number(
    prompt("What is the number of the task that you want to edit?")
  );

  if (itemToEdit < 1 || itemToEdit > taskList.length || isNaN(itemToEdit)) {
    editTask();
  }

  const newContentOfItem: string = prompt(
    "Please enter change the content of the task",
    `${taskList[itemToEdit - 1].split(":").pop()}`
  );

  taskList.splice(itemToEdit - 1, 1, `\n ${itemToEdit}: ${newContentOfItem}`);

  let partsToInsertArr: string[] = taskList.map((it) => it.split(":").pop());

  localStorage.clear();

  localStorage.setItem("toDos", JSON.stringify(partsToInsertArr));

  mainMenu();
}

console.log(taskList);

mainMenu();
