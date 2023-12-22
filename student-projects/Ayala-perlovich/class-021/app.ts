
type Task = {
    title: string;
    description: string;
    dueDate: string;
    status: string;
};
const tasks: Task[] = [];

// פונקציה להוספת משימה חדשה לרשימה

function addTaskToList(task: Task) {
    const taskList = document.getElementById("task-list") as HTMLUListElement;
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `<strong>${task.title}</strong> - Due Date: ${task.dueDate}, Status: ${task.status}
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>`;
    taskList.appendChild(taskItem);

    // עריכת משימה
    const editButton = taskItem.querySelector(".edit-btn") as HTMLButtonElement;
    editButton.addEventListener("click", () => editTask(task));

    // מחיקת משימה
    const deleteButton = taskItem.querySelector(".delete-btn") as HTMLButtonElement;
    deleteButton.addEventListener("click", () => {
        deleteTask(task);
        taskList.removeChild(taskItem);
    });
}
function addTask(event: Event) {
    event.preventDefault();
    const titleInput = document.getElementById("title") as HTMLInputElement;
    const descriptionInput = document.getElementById("description") as HTMLTextAreaElement;
    const dueDateInput = document.getElementById("dueDate") as HTMLInputElement;
    const statusSelect = document.getElementById("status") as HTMLSelectElement;

    const title = titleInput.value;
    const description = descriptionInput.value;
    const dueDate = dueDateInput.value;
    const status = statusSelect.value;

    const newTask: Task = { title, description, dueDate, status };
    tasks.push(newTask);

    addTaskToList(newTask);

    titleInput.value = "";
    descriptionInput.value = "";
    dueDateInput.value = "";
    statusSelect.value = "todo";
}



// פונקציה למחיקת משימה מהמערך
function deleteTask(task: Task) {
    const index = tasks.indexOf(task);
    if (index !== -1) {
        tasks.splice(index, 1);
    }
}

// פונקציה לעריכת משימה
function editTask(task: Task) {
    const newTitle = prompt("Edit Task Title:", task.title);
    if (newTitle === null) {
        return; // המשתמש ביטל את העריכה
    }

    const newDescription = prompt("Edit Task Description:", task.description);
    if (newDescription === null) {
        return; 
    }

    const newDueDate = prompt("Edit Due Date (YYYY-MM-DD):", task.dueDate);
    if (newDueDate === null) {
        return; 
    }

    const newStatus = prompt("Edit Status (todo, inprogress, completed):", task.status);
    if (newStatus === null) {
        return; 
    }

    task.title = newTitle;
    task.description = newDescription;
    task.dueDate = newDueDate;
    task.status = newStatus;
    
/// Update the task in the list
    
    const taskList = document.getElementById("task-list") as HTMLUListElement;
    const taskItems = taskList.getElementsByTagName("li");
    for (const taskItem of taskItems) {
        if (taskItem.innerHTML.includes(task.title)) {
            taskItem.innerHTML = `<strong>${task.title}</strong> - Due Date: ${task.dueDate}, Status: ${task.status}
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>`;
        }
    }
}

// Event listener for the form submission
const taskForm = document.getElementById("task-form") as HTMLFormElement;
taskForm.addEventListener("submit", addTask);





