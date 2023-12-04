// import { readFileSync, writeFileSync } from "fs";

// const fileContents = readFileSync("./tirgul2/input.txt", "utf-8");
// const output = fileContents
//     .split("\n")
//     .map((line) => `${line.charAt(0).toUpperCase()}${line.slice(1)}`)
//     .join("\n");

// // console.log(output);
// writeFileSync("./tirgul2/output.txt", output);
type User = { name: string; id: number };
const users: User[] = [];

    switch (process.argv[2]) {
        case "add":
            const newUser: User = {
                name: process.argv[3],
                id: users.length + 1, 
            };
            users.push(newUser);
            console.log(`User added: ${newUser.name} #${newUser.id}`);
            break;
        case "read":
            console.log(`Users are: ${JSON.stringify(users)}`);
            break;
        case "delete":
            break;
        case "stop":
            default:
    }
   



// console.log(`Users are: ${JSON.stringify(users)}`);