import { register } from "../../node_modules/ts-node/dist/index";

interface HTMLFormControlsCollection {
  [namedControl: string]: HTMLElement | null;
}

interface SubmitEvent {
  target: HTMLFormElement;
}

class InvalidUsernameError extends Error {}
class InvalidEmailError extends Error {}
class InvalidPasswordError extends Error {}

type User = {
  userName: string;
  userEmail: string;
  userPassword: string;
  passwordConfirmation: string;
};

type UserArray = User[];

const users: UserArray = [];

/*

1 way

*/

const addUserFromForm = document.querySelector("form[name='add-new-user']");
if (!addUserFromForm) {
  console.error("Could't find and add user.");
} else {
  addUserFromForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const userDataFromForm1 = new FormData(e.target as HTMLFormElement);

    const userName = userDataFromForm1.get("userName");

    console.log("userName", userName);

    const userEmail = userDataFromForm1.get("userEmail");

    console.log("userEmail", userEmail);

    const userPassword = userDataFromForm1.get("userPassword");

    console.log("userPassword", userPassword);

    const passwordConfirmation = userDataFromForm1.get("passwordComfirmation");

    console.log("passwordConfirmation", passwordConfirmation);

    try {
      register(userName, userEmail, userPassword, passwordConfirmation);
    } catch (error) {
      if (
        !(
          error instanceof InvalidEmailError ||
          error instanceof InvalidUsernameError ||
          error instanceof InvalidPasswordError
        )
      ) {
        throw error;
      }

      alert(error.message);
    }
  });
}

/*

regular way


*/

// const addUserFormId = document.getElementById("add-user");

// console.log(addUserFormId);

// function onSubmit(e) {
//   e.preventDefault();

//   const userDataFromForm = new FormData(addUserFormId);

//   const userName = userDataFromForm.get("userName");

//   console.log("userName", userName);

//   const userEmail = userDataFromForm.get("email");

//   console.log("userEmail", userEmail);

//   const userPassword = userDataFromForm.get("userPassword");

//   console.log("userPassword", userPassword);

//   const passwordConfirmation = userDataFromForm.get("passwordComfirmation");

//   console.log("passwordConfirmation", passwordConfirmation);

//   users.push({
//     userName,
//     userEmail,
//     userPassword,
//     passwordConfirmation,
//   });

//   console.log(users);
// }

// addUserFormId?.addEventListener("submit", onSubmit);

/*


simplest way


*/

// const userDataForm = document.getElementById("add-user");
// console.log(userDataForm);

// function onSubmit(e) {
//   e.preventDefault();
//   console.log("bingo");

//   const userName = document.getElementById("user-name").value;

//   console.log("userName", userName);

//   const userEmail = document.getElementById("email").value;

//   const userPassword = document.getElementById("user-password").value;

//   const passwordConfirmation =
//     document.getElementById("confirm-password").value;

//   users.push({
//     userName,
//     userEmail,
//     userPassword,
//     passwordConfirmation,
//   });
//   console.log(users);
// }

// userDataForm?.addEventListener("submit", onSubmit);

function register(
  userName: string,
  userEmail: string,
  userPassword: string,
  passwordConfirmation: string
) {
  // if (users.some((user) => user.userName === userName)) {
  //   throw new InvalidUsernameError(`Username ${userName} already taken`);
  // }

  if (localStorage.getItem(`${userName}`) !== null) {
    throw new InvalidUsernameError(`Username ${userName} already taken`);
  }

  if (!userEmail.includes("@")) {
    throw new InvalidEmailError(`Invalid email: ${userEmail}`);
  }

  if (userPassword !== passwordConfirmation) {
    throw new InvalidPasswordError(
      `Password: ${userPassword} is not the same is confirmPassword: ${passwordConfirmation}`
    );
  }

  const regexToCheckPassword: RegExp =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

  console.log(userPassword.match(regexToCheckPassword));

  if (!userPassword.match(regexToCheckPassword)) {
    throw new InvalidPasswordError(
      "Password must contain: min 6 and max 64 characters, min 1 lowercase character, min 1 uppercase character, min 1 number"
    );
  }

  localStorage.setItem(
    `${userName}`,
    JSON.stringify({
      userName,
      userEmail,
      userPassword,
      passwordConfirmation,
    })
  );

  // users.push({
  //   userName,
  //   userEmail,
  //   userPassword,
  //   passwordConfirmation,
  // });
  // console.log(users);
}
