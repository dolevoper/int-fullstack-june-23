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

    if (password==="" || password !== confirmPassword || password.length < 8 && confirmPassword.length < 8 || password.length > 15 && confirmPassword.length > 15) {
        throw new InvalidPasswordError(`Invalid password: ${password} or confirm Password`);
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
    register("omer2", "omergmail", "internet21", "Interbet21");
} catch (error) {
    if (!(error instanceof InvalidEmailError || error instanceof InvalidUsernameError || error instanceof InvalidPasswordError)) {
        throw error;
    }



    alert(error.message);
}