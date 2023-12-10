import { readFileSync, writeFileSync } from "fs";
import * as readline from "node:readline";
import { randomUUID } from "crypto";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

const fileData = readFileSync("./users.txt", "utf-8");
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
        console.log("read >>>");
        break;
      case "create":
        rl.question("What is your first name? ", (firstNameAnswer) => {
          rl.question("What is your last name? ", (lastNameAnswer) => {
            rl.question("What is your phone number? ", (phoneNumberAnswer) => {
              const newUser: User = {
                id: randomUUID(),
                firstName: firstNameAnswer.trim().toLowerCase(),
                lastName: lastNameAnswer.trim().toLowerCase(),
                phoneNumber: phoneNumberAnswer.trim(),
              };
              fileContents.push(newUser);
              writeFileSync(
                "./users.txt",
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
        console.log("delete >>>");
        break;
    }
  }
);
