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



switch (process.argv[2]?.toLowerCase()) {
  case "list":
    console.log("list >>>");
    break;
  case "read":
    console.log("read >>>")
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
          writeFileSync("./users.txt", JSON.stringify(fileContents, null, 2));
          console.log(`
            New user added:
            Name: ${newUser.firstName} ${newUser.lastName}
            Phone number: ${newUser.phoneNumber}
            ID: ${newUser.id}`);
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
