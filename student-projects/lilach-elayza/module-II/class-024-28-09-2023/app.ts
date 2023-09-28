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
    e.target.elements.result &&
      (e.target.elements.result.textContent = "no value");
    return;
  }

  if (typeof json !== "string") {
    e.target.elements.result &&
      (e.target.elements.result.textContent = "value is not a string");
    return;
  }

  try {
    JSON.parse(json);
    console.log("after parse");
    e.target.elements.result &&
      (e.target.elements.result.textContent = "valid json");
  } catch {
    e.target.elements.result &&
      (e.target.elements.result.textContent = "invalid json");
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

class InvalidUsernameError extends Error {}
class InvalidEmailError extends Error {}
class InvalidPasswordLength extends Error {}
class PasswordsMismatch extends Error {}

type User = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const users = [] as User[];

function register(
  username: string,
  email: string,
  password: string,
  confirmPassword: string
) {
  if (users.some((user) => user.username === username)) {
    throw new InvalidUsernameError(`Username ${username} already taken`);
  }

  if (!email.includes("@")) {
    throw new InvalidEmailError(`Invalid email: ${email}`);
  }

  if (password.length < 8) {
    throw new InvalidPasswordLength(`Password must be at least 8 characters`);
  }

  if (password !== confirmPassword) {
    throw new PasswordsMismatch(`Passwords don't match!`);
  }

  users.push({
    username,
    email,
    password,
    confirmPassword,
  });
}

// try {
//   register("omer", "omer@gmail", "", "");
//   register("omer", "omer@gmail", "", "");
//   register("omer2", "omergmail", "", "");
// } catch (error) {
//   if (
//     !(
//       error instanceof InvalidEmailError ||
//       error instanceof InvalidUsernameError
//     )
//   ) {
//     throw error;
//   }

//   alert(error.message);
// }

try {
  register("lilach", "lilach@gmail.com", "1234567", "1234567");
} catch (error) {
  if (
    !(
      error instanceof InvalidPasswordLength ||
      error instanceof PasswordsMismatch
    )
  ) {
    throw error;
  }

  alert(error.message);
}

const registerForm = document.querySelector("form[name=register-form]") as HTMLFormElement;
if (!registerForm) {
    console.error("Couldn't find add car form.");
} else {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
    });
}