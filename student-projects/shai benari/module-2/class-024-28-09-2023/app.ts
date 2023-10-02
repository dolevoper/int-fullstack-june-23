interface HTMLFormControlsCollection {
    [namedControl: string]: HTMLElement | null;
}

interface SubmitEvent {
    target: HTMLFormElement;
}

document.forms.namedItem("jsonExpression")?.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const json = formData.get("json");

    if (!json) {
        e.target.elements.result && (e.target.elements.result.textContent = "no value");
        return;
    }

    if (typeof json !== "string") {
        e.target.elements.result && (e.target.elements.result.textContent = "value is not a string");
        return;
    }

    try {
        JSON.parse(json);
        console.log("after parse");
        e.target.elements.result && (e.target.elements.result.textContent = "valid json");
    } catch {
        e.target.elements.result && (e.target.elements.result.textContent = "invalid json");
    }

    console.log("hello");
});

// function div(a: number, b: number) {
//     if (b === 0) {
//         throw "division by 0 is illegal";
//     }

//     return a / b;
// }

// function app() {
//     try {
//         const foo = div(8, 0);

//         return foo + 5;
//     } catch {
//         console.error("something went wrong");
//     }

//     console.log("hello");
// }

// try {
//     app();
// } catch {
//     console.error("something went very wrong!");
// }

class InvalidUsernameError extends Error { }
class InvalidEmailError extends Error { }
class InvalidPasswordError extends Error { }

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
    if(password !== confirmPassword ){
        throw new InvalidPasswordError(`confirmPassword dose not much password`)
    }

    users.push({
        username,
        email,
        password
    });
}

try {
    register("omer", "omer@gmail", "", "");
    register("omer", "omer@gmail", "", "");
    register("omer2", "omergmail", "", "");
    register("omer", "omer@gmail", "aaa", "aab");
} catch (error) {
    if (!(error instanceof InvalidEmailError || error instanceof InvalidUsernameError)) {
        throw error;
    }

    alert(error.message);
}
try {
  
    register("omer", "omer@gmail", "aaa", "aab");
} catch (error) {
    if ((error instanceof InvalidEmailError )) {
        throw error;
    }

    alert(error.message);
}