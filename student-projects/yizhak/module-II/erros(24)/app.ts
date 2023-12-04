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


class InvalidUsernameError extends Error { }
class InvalidEmailError extends Error { }
class InvalidpasswordError extends Error { }

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

    if (users.some((user) => user.password.length > 20)){
        throw new InvalidpasswordError(`password need to be shorter then 20 charcters!`)
    }
    if (!email.includes("@")) {
        throw new InvalidEmailError(`Invalid email: ${email}`);
    }

    users.push({
        username,
        email,
        password
    });
}

try {
    register("omer", "omer@gmail", "121212111212121211212121212121", "");
    //register("omer", "omer@gmail", "", "");
    //register("omer2", "omergmail", "", "");
} catch (error) {
    if (!(error instanceof InvalidEmailError || error instanceof InvalidUsernameError)) {
        throw error;
    }

    alert(error.message);
}
