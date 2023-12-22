interface HTMLFormControlsCollection {
    [namedControl: string]: HTMLElement | null;
}

interface SubmitEvent {
    target: HTMLFormElement;
}

const forms = document.querySelector("form[name='registerForm']");
const sumbit = document.getElementById("sumbit");


document.forms.namedItem("registerForm")?.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const username = formData.get("registerName") as string;
    const email = formData.get("registerEmail") as string;
    const password = formData.get("registerPassword") as string;
    const confirmPassword = formData.get("registerConfirmPassword") as string;
    
    register(username, email, password, confirmPassword);
});


class InvalidUsernameError extends Error { }
class InvalidEmailError extends Error { }

type User = {
    username: string,
    email: string,
    password: string,
    
};

const users = [] as User[];



function register(username: string, email: string, password: string, confirmPassword: string) {
    if (users.some((user) => user.username === username)) {
        throw new InvalidUsernameError(`Username ${username} already taken`);
    }

    if (!email.includes("@")) {
        throw new InvalidEmailError(`Invalid email: ${email}`);
    }

    users.push({
        username,
        email,
        password
    });

    refreshUsersList();
}


// asd
// try {
//     register("omer", "omer@gmail", "", "");
//     register("omer", "omer@gmail", "", "");
//     register("omer2", "omergmail", "", "");

// } catch (error) {
//     if (!(error instanceof InvalidEmailError || error instanceof InvalidUsernameError)) {
//         throw error;
//     }

//     alert(error.message);
// }


/*
            <li class="users__user">
                <h5 class="users__username">Mock User</h5>
                <h6 class="users__email">Mock User</h5>
                <button class="users__delete-button">Delete</button>
            </li>
*/

const userListElement = document.querySelector("users__list") as HTMLUListElement;

function createUserElement(user: User): HTMLElement {
    
    const newUserElement = document.createElement("li");
    newUserElement.classList.add("users__user");
    
    const usernameElement = document.createElement("h5");
    usernameElement.classList.add("users__username");
    newUserElement.append(usernameElement);

    const emailElement = document.createElement("h6");
    emailElement.classList.add("users__email");
    newUserElement.append(emailElement);

    return newUserElement;
}


function refreshUsersList() {
    userListElement.replaceChildren(); // deletes all childs

    users.forEach((user) => {
        userListElement.append(createUserElement(user));
    })
}

