const toDoList: string[] = [];
runProgram();

function runProgram() {
    let userAction = prompt("Welcome to your to-do list!\nWhat would you like to do?\n1 - List my todos\n2 - Add todo\n3 - Remove todo\n4 - Clear my todos");
    checkIfCancel(userAction);
    switch (userAction?.toLowerCase()) {
        case '1':
        case 'List my todos'.toLowerCase():
            checkIfEmpty(toDoList);
            let feedback = "";
            for (let index = 0; index < toDoList.length; index++) {
                feedback += (index + 1) + ". " + toDoList[index] + "\n";
            }
            alert(feedback);
            runProgram();

        case '2':
        case 'Add todo'.toLowerCase():
            let newToDo = prompt("Please type what you need to do:");
            checkReturnToMenu(newToDo);
            toDoList.push(newToDo);
            runProgram();

        case '3':
        case 'Remove todo'.toLowerCase():
            checkIfEmpty(toDoList);
            removeTask();

        case '4':
        case 'Clear my todos'.toLowerCase():
            alert("OK, clearing all tasks ");
            toDoList.splice(0, toDoList.length);
            runProgram();
        default:
            alert("Please choose one of the available options");
            runProgram();

    }
}

function checkIfCancel(input: string) {
    if (input === null) {
        alert("Goodbye 👋");
        throw "";
    }
}

function checkReturnToMenu(input: string) {
    if ((input === null) || (input === "")) {
        runProgram();
    }
}

function checkIfEmpty(input: Array<string>) {
    if (input.length === 0) {
        alert("You have no todos 🤩");
        runProgram();
    }
}

function removeTask() {
    let feedback = "This is your to-do list:\n";
    for (let index = 0; index < toDoList.length; index++) {
        feedback += (index + 1) + ". " + toDoList[index] + "\n";
    }
    feedback += "Please type the number of the task you would like to remove:";
    let removeToDo = prompt(feedback);
    checkReturnToMenu(removeToDo);
    checkValidity(removeToDo);
    let indexOfToDo = Number(removeToDo) - 1;
    alert("OK! Removing " + toDoList[indexOfToDo]);
    toDoList.splice(indexOfToDo, 1);
    runProgram();
}

function checkValidity(input) {
    while (isNaN(input) || input % 1 > 0 || Number(input) < 1 || Number(input) > toDoList.length || input === "") {
        alert("Invalid input.\nPlease type the number of the task you would like to remove.")
        removeTask();
    }
    return input;
}