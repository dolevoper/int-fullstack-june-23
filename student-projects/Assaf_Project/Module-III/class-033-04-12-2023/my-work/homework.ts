import { existsSync, readFileSync, writeFileSync } from "fs";
import * as readline from "node:readline";
import { randomUUID } from "crypto";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
};

const filePath = "./users.json";

if (!existsSync(filePath)) {
  writeFileSync(filePath, "");
}

const fileData = readFileSync(filePath, "utf-8");
const users: User[] = fileData.trim() ? JSON.parse(fileData) : [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

app();

function app() {
  rl.question(
    `Welcome to the User Management App!
Available operations:
- List - Show a list of all the user ID's
- Read - Given a user ID, show the user's full information
- Create - Create a new user
- Update - Update all the given details for the user with the given ID
- Delete - Given a user ID, delete the user from the system
- Search - Filter all users with given value
- end - Exterminate the app
`,
    (option) => {
      handleUserSelection(option);
    }
  );
}

function handleUserSelection(option: string) {
  switch (option.toLowerCase().trim()) {
    case "list":
      listUsers();
      break;
    case "read":
      read();
      break;
    case "create":
      createUser();
      break;
    case "update":
      updateUser();
      break;
    case "delete":
      deleteUser();
      break;
    case "search":
      search();
      break;
    case "stop":
    case "end":
    case "quit":
      console.log("Bye!");
      rl.close();
      break;
    default:
      console.log(option + " is not an option...");
      setTimeout(app, 3000);
  }
}

function listUsers() {
  if (users.length < 0) {
    console.log("There are no users to show...");
  } else {
    console.log("All users ID's:");
    for (let i = 0; i < users.length; i++) {
      console.log(i + 1 + ". " + users[i].id);
    }
    setTimeout(app, 3000);
  }
}

function read() {
  rl.question("Enter user ID to show details: ", (input) => {
    const matchingUser = users.find((user) => user.id === input);

    if (!matchingUser) {
      console.log(`No user found with ID ${input}`);
    } else {
      console.log(`Matching user's details:`);
      showUserDetails(matchingUser);
    }

    setTimeout(app, 3000);
  });
}

function createUser() {
  rl.question("What is your first name? ", (firstNameAnswer) => {
    rl.question("What is your last name? ", (lastNameAnswer) => {
      rl.question("What is your phone number? ", (phoneNumberAnswer) => {
        const newUser: User = {
          id: randomUUID(),
          firstName: capitalize(firstNameAnswer.trim().toLowerCase()),
          lastName: capitalize(lastNameAnswer.trim().toLowerCase()),
          phoneNumber: phoneNumberAnswer.trim(),
        };
        users.push(newUser);
        saveUsersInfo();
        const phoneNumberToShow = newUser.phoneNumber
          ? newUser.phoneNumber
          : "N/A";
        console.log(
          `New user added!\nName: ${newUser.firstName} ${newUser.lastName}\nPhone number: ${phoneNumberToShow}\nID: ${newUser.id}`
        );
        setTimeout(app, 3000);
      });
    });
  });
}

function updateUser() {
  rl.question("Enter user ID in order to update: ", (input) => {
    const matchingUser = users.find((user) => user.id === input);

    if (!matchingUser) {
      console.log(`No user found with ID ${input}`);
      setTimeout(updateUser, 3000);
    } else {
      showUserDetails(matchingUser);
      setTimeout(() => updateField(matchingUser), 2000);
    }
  });
}

function updateField(matchingUser: User) {
  rl.question(
    "Which field would you like to update? \n1. First Name\n2. Last Name\n3. Phone Number\n",
    (choice) => {
      switch (choice) {
        case "1":
          rl.question("Please enter first name: ", (input) => {
            matchingUser.firstName = input;
            console.log("First name updated!");
            saveUsersInfo();
            setTimeout(app, 3000);
          });
          break;
        case "2":
          rl.question("Please enter last name: ", (input) => {
            matchingUser.lastName = input;
            console.log("Last name updated!");
            saveUsersInfo();
            setTimeout(app, 3000);
          });
          break;
        case "3":
          rl.question("Please enter phone number: ", (input) => {
            matchingUser.phoneNumber = input;
            console.log("Phone number updated!");
            saveUsersInfo();
            setTimeout(app, 3000);
          });
          break;
        default:
          console.log(`${choice} was not an option...`);
          setTimeout(() => updateField(matchingUser), 3000);
      }
    }
  );
}

function deleteUser() {
  rl.question("Enter user ID to DELETE: ", (input) => {
    const matchingUserIndex = users.findIndex((user) => user.id === input);

    if (matchingUserIndex === -1) {
      console.log(`No user found with ID ${input}`);
      setTimeout(app, 3000);
    } else {
      const matchingUser = users[matchingUserIndex];

      console.log(`Matching user's details:`);
      showUserDetails(matchingUser);

      rl.question("Are you sure you want to DELETE? (y/n) ", (answer) => {
        switch (answer.trim().toLowerCase()) {
          case "yes":
          case "y":
            users.splice(matchingUserIndex, 1);
            saveUsersInfo();
            console.log("User has been deleted!");
            break;
          case "no":
          case "n":
            console.log("Deletion canceled...");
            break;
        }
        setTimeout(app, 3000);
      });
    }
  });
}

function search() {
  rl.question("Enter value to search by: ", (value) => {
    const lowercasedValue = value.toLowerCase();

    const matchingUsers = users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(lowercasedValue) ||
        user.lastName.toLowerCase().includes(lowercasedValue) ||
        user.phoneNumber?.includes(lowercasedValue)
    );

    if (matchingUsers.length === 0) {
      console.log("No users containing the input value...");
    } else {
      console.log("Matching user(s) details:");
      matchingUsers.forEach((matchingUser) => {
        showUserDetails(matchingUser);
      });
    }
    setTimeout(app, 3000);
  });
}

function showUserDetails(matchingUser: User) {
  console.log(
    `ID: ${matchingUser.id}\nFirst Name: ${
      matchingUser.firstName
    }\nLast Name: ${matchingUser.lastName}\nPhone Number: ${
      matchingUser.phoneNumber || "N/A"
    }\n----------------------------------------`
  );
}

function capitalize(text: string) {
  return text
    .split(" ")
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(" ");
}

function saveUsersInfo() {
  writeFileSync(filePath, JSON.stringify(users, null, 1));
}
