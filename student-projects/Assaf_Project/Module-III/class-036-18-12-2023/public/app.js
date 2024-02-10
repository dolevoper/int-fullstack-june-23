const todoInput = document.getElementById("todo-input")
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todo-list");

const jsonFilePath = "../todos.json";

async function fetchTodos() {
    try {
        const response = await fetch('/getTodos');
        const todos = await response.json();
        return todos;
    } catch (error) {
        console.error("Error fetching JSON:", error);
        throw error;
    }
}

async function loadPage() {
    try {
        const todos = await fetchTodos();
        renderTodos(todos);
    } catch (error) {
        console.error("Error loading todos:", error);
    }
}

window.addEventListener('load', loadPage);

addBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
        const todos = await fetchTodos();

        if (todoInput.value.length === 0) {
            alert("Must provide input!")
        } else {
            const randomID = Math.floor((Math.random() * 10000000) + 10000);
            const newTodo = { "id": randomID, "text": `${todoInput.value}`, "isDone": false }

            todos.push(newTodo)
            renderTodos(todos);

            await fetch('/updateTodos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(todos),
            });

            console.log(todos);

            todoInput.value = ""
        }

    } catch (error) {
        console.log("Error fetching todos. Please try again.");
    }
});

function renderTodos(todos = []) {
    todoList.innerHTML = "";
    todos.forEach((todo) => {
        addTodoContent(todo);
    });
}

function addTodoContent(todo) {
   const toggleBtnIcon = todo.isDone ? `❌` : `✅` ;
   const pClass = todo.isDone ? `class="--done"` : `` ;
    const todoHTML = `<li class="flexed">
            <button class="clearBtn">${toggleBtnIcon}</button>
            <p ${pClass}>${todo.text}</p>
            <button class="clearBtn">🗑️</button>
        </li> `;
    todoList.innerHTML += todoHTML;
}