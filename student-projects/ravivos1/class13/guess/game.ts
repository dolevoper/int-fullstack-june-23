const dif = prompt("Please choose difficulty\n1. Easy (1-10)\n2. Hard (1-100)\n3. Impossible (1-1000)");
if (dif === null || dif === "") {
    alert("You didn't select a difficulty, please refresh the page and choose difficulty.");
} else {
    const lowdif = dif.toLowerCase();
    if (lowdif==="easy" || lowdif==="1" || lowdif === "1.easy" || lowdif === "1. easy") {
        const usernum = Number( prompt("You choe the easy difficulty\nPlease select a number between 1-10"));
        if (usernum === null) {
            alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
        }
        else if (usernum > 10 || usernum < 1 || isNaN(usernum)) {
            const usernum = Number( prompt("Please enter a valid number between 1-10"));
            const comnum = Number (Math.floor(Math.random() *10 + 1));
            alert(comnum);
        }
        else {
            const comnum = Number (Math.floor(Math.random() *10 + 1));
            alert(comnum);
        }
    }

    alert("Please refresh the page and choose difficulty to play again.");
}