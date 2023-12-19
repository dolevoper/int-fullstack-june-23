const listContainer = document.getElementById("list-container");
const todoInput = document.getElementById("todo-input")
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todo-list");

const jsonFilePath = "../class-036-18-12-2023/todos.json"

async function fetchTodos() {
    try {
        const response = await fetch(jsonFilePath);
        const todos = await response.json();
        return todos;
    } catch (error) {
        console.error("Error fetching JSON:", error);
        throw error;
    }
}

function renderTodos(todos) {
    todoList.innerHTML = "";
    todos.forEach((todo) => {
        const todoHTML = `<li class="flexed">
        <button class="clearBtn"></button>
        ${todo.text}
        <button class="clearBtn">🗑️</button>
      </li> `;
        todoList.innerHTML += todoHTML;
    });
}

// addBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (todoInput.value.length === 0) {
//         alert("Must provide input!")
//         throw new Error("no input found")
//     } else {
//         const todoHTML = `<li class="flexed">
//             <button class="clearBtn"></button>
//             ${todoInput.value}
//             <button class="clearBtn">🗑️</button>
//         </li> `
//         todoList.innerHTML += todoHTML
//         const randomID = Math.floor((Math.random() * 10000000) + 10000);

//         const newTodo = { "id": randomID, "text": `${todoInput.value}`, "isDone": false }

//         console.log(newTodo)

//         todoInput.value = ""
//     }
// })

addBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
        const todos = await fetchTodos();
        console.log(todos);

        if (todoInput.value.length === 0) {
            alert("Must provide input!")
            throw new Error("no input found")
        } else {
            const todoHTML = `<li class="flexed">
                <button class="clearBtn"></button>
                ${todoInput.value}
                <button class="clearBtn">🗑️</button>
            </li> `
            todoList.innerHTML += todoHTML
            const randomID = Math.floor((Math.random() * 10000000) + 10000);

            const newTodo = { "id": randomID, "text": `${todoInput.value}`, "isDone": false }

            console.log(newTodo)

            todoInput.value = ""
        }

    } catch (error) {
        alert("Error fetching todos. Please try again.");
    }
});


