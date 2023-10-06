type User = {
    username: string,
    email: string,
    password: string,
};

class InvalidUsernameError extends Error { }
class InvalidEmailError extends Error { }
class NoPasswordMatchError extends Error { }
class shortPasswordError extends Error { }

const users = [] as User[];

function register(username: string, email: string, password: string, confirmPassword: string) {
    if (users.some((user) => user.username === username)) {
        throw new InvalidUsernameError(`Username ${username} already taken`);
    }

    if (!email.includes("@")) {
        throw new InvalidEmailError(`Invalid email: ${email}`);
    }

    if (password !== confirmPassword) {
        throw new NoPasswordMatchError(`Password confirmation doesn't match password.`);
    }

    if (password.length < 8) {
        throw new shortPasswordError(`Password must be over 8 charachters`);
    }

    users.push({
        username,
        email,
        password
    });
}

document.forms.namedItem("login")?.addEventListener("submit", (e) => {
    try {
        login(e.target.elements.username!.value, e.target.elements.password!.value);
    } catch (error) {
        if (!(error instanceof InvalidEmailError || error instanceof InvalidUsernameError || error instanceof NoPasswordMatchError || error instanceof shortPasswordError )) {
            throw error;
        }

        const errorMessage = e.target.querySelector(".form-error");

        if (!errorMessage) {
            alert(error.message);
            return;
        }

        errorMessage.textContent = error.message;
    }
});
