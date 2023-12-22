alert("this is your todo list!");

const todoList = [];

while (true) {
  const openTodo = prompt(`what do you want to do?:

    1-add.
    2-remove.
    3-watch.
    
    #if you wont to end,enter "end".`);

  switch (openTodo) {
    case "add":
      addTask();
      break;

    case "watch":
      showTasts();
      break;

    case "remove":
      deleteTask();
      break;

    case "end":
      alert("Thank you for using the task list!");
      break;

    default:
      alert("pleas enter a value from the manue");
  }

  if (openTodo === "end") {
    break;
  }
}

//the finction i need//

function addTask() {
  const newTask = prompt("what is your new task?");
  todoList.push(newTask);
  alert(`the task "${newTask}" has aded to the list`);
}

function deleteTask() {
  const taskToRemove = prompt(`witch task you wont to remove?
this is your open tasks:
${todoList}`);
  const indexOfRemove = todoList.indexOf(taskToRemove);
  if (indexOfRemove !== null) {
    todoList.splice(indexOfRemove, 1);
    alert(`you deleted the the task ${taskToRemove}`);
  } else {
    alert("the task do not found");
  }
}

function showTasts() {
  alert(`this is your tasks todo:
${todoList}`);
}

