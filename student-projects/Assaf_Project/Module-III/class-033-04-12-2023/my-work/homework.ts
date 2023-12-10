import { existsSync, readFileSync, writeFileSync } from "fs";
import * as readline from "node:readline";
import { randomUUID } from "crypto";
import { userInfo } from "os";

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

const fileData = readFileSync("./users.json", "utf-8");
const users: User[] = fileData.trim() ? JSON.parse(fileData) : [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  `Welcome to the User Management App!
Available operations:
- List - Show a list of all the user ID's
- Read - Given a user ID, show the user's full information
- Create - Create a new user
- Update - Update all the given details for the user with the given ID
- Delete - Given a user ID, delete the user from the system
`,
  (option) => {
    switch (option.toLowerCase().trim()) {
      case "list":
        if (users.length < 0) {
          console.log("There are no users to show...");
        } else {
          console.log("All users ID's:");
          for (let i = 0; i < users.length; i++) {
            console.log(i + 1 + ". " + users[i].id);
          }
        }
        rl.close();
        break;
      case "read":
        rl.question("Enter user ID to show details: ", (input) => {
          const matchingUser = users.find((user) => user.id === input);

          if (!matchingUser) {
            console.log(`No user found with ID ${input}`);
          } else {
            console.log(
              `Matching user's details:\nID: ${matchingUser.id}\nFirst Name: ${
                matchingUser.firstName
              }\nLast Name: ${matchingUser.lastName}\nPhone Number: ${
                matchingUser.phoneNumber || "N/A"
              }`
            );
          }

          rl.close();
        });
        break;
      case "create":
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
              writeFileSync(
                "./users.json",
                JSON.stringify(users, null, 2)
              );
              console.log(
                `New user added!\nName: ${newUser.firstName} ${newUser.lastName}\nPhone number: ${newUser.phoneNumber}\nID: ${newUser.id}`
              );
              rl.close();
            });
          });
        });
        break;
      case "update":
        console.log("update >>>");
        rl.close();
        break;
      case "delete":
        rl.question("Enter user ID to DELETE: ", (input) => {
          const matchingUserIndex = users.findIndex(
            (user) => user.id === input
          );

          if (matchingUserIndex === -1) {
            console.log(`No user found with ID ${input}`);
            rl.close();
          } else {
            const matchingUser = users[matchingUserIndex];

            console.log(
              `Matching user's details:\nFirst Name: ${
                matchingUser.firstName
              }\nLast Name: ${matchingUser.lastName}\nPhone Number: ${
                matchingUser.phoneNumber || "N/A"
              }`
            );

            rl.question("Are you sure you want to DELETE? (y/n) ", (answer) => {
              switch (answer.trim().toLowerCase()) {
                case "yes":
                case "y":
                  users.splice(matchingUserIndex, 1);

                  writeFileSync(
                    "./users.json",
                    JSON.stringify(users, null, 2)
                  );

                  console.log("User has been deleted!");
                  break;
                case "no":
                case "n":
                  console.log("Deletion canceled...");
                  break;
              }
              rl.close();
            });
          }
        });
        break;
      case "stop":
      case "end":
      case "quit":
        console.log("Bye!");
        rl.close();
        break;
      default:
        console.log(option + " is not an option...");
        rl.close();
    }
  }
);

function capitalize(text: string) {
  return text
    .split(" ")
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(" ");
}
