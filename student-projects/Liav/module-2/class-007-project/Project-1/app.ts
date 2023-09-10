

function addTask() {
    const inputElement = document.getElementById("task") as HTMLInputElement;
    const taskList = document.getElementById("taskList") as HTMLUListElement;

    const listItem = document.createElement("li");
    const deleteButton = document.createElement("button");
    const finishButton = document.createElement("button");
    listItem.textContent = inputElement.value;

    deleteButton.className = "delete-button";
    finishButton.className = "finish-button";
    
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", removeTask);
    
    finishButton.textContent = "Finish";
    finishButton.addEventListener("click", finishTask);

    listItem.appendChild(deleteButton);
    listItem.appendChild(finishButton); 
    taskList.appendChild(listItem);
  
    inputElement.value = "";
}




function removeTask(event) {
    const listItem = event.target.parentElement; 
    const taskList = document.getElementById("taskList") as HTMLUListElement;

    taskList.removeChild(listItem);
}

function finishTask(event){
    const listItem = event.target.parentElement; 
    listItem.classList.toggle("finished"); 
}
