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

const fileData = readFileSync("./users.json", "utf-8");
const fileContents: User[] = fileData.trim() ? JSON.parse(fileData) : [];

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
        console.log("list >>>");
        break;
      case "read":
        rl.question("Enter user ID to show details: ", (input) => {
          const matchingUser = fileContents.find((user) => user.id === input);

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
              fileContents.push(newUser);
              writeFileSync(
                "./users.json",
                JSON.stringify(fileContents, null, 2)
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
              const matchingUserIndex = fileContents.findIndex((user) => user.id === input);
          
              if (!matchingUserIndex) {
                console.log(`No user found with ID ${input}`);
                rl.close();
              } else {
                const matchingUser = fileContents[matchingUserIndex];
          
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
                      fileContents.splice(matchingUserIndex, 1);
          
                      writeFileSync("./users.json", JSON.stringify(fileContents, null, 2));
          
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
