let amount = prompt("How many grades would you like to enter?");
while(true) {
    if(amount === null || amount === "0") {
        alert("Goodbye 😜");
        throw "";
    }
    if(isNaN(Number(amount)) || Number(amount) < 0 || Number(amount) % 1 > 0 || amount === "") {
        amount = prompt("Please enter a whole positive number only");
        continue;
    }
    break;
}

let sum = 0;

for (let i = 0; i < Number(amount);) {
    let grade = prompt("Please enter grade number " + (i+1));
    if(grade === null) {
        alert("Goodbye 😜");
        throw "";
    }
    if(isNaN(Number(grade)) || Number(grade) < 0 || Number(grade) % 1 > 0 || grade === "") {
        alert("The grade can only be a whole positive number");
        continue;
    }
    i++;
    sum += Number(grade);
}
alert(sum / Number(amount));