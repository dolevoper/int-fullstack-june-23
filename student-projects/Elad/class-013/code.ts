const game_level = prompt("welcome to gambling of guess the number, pick a levele of the game:\n 1. easy > 1 - 10\n 2. midlle > 1 - 100\n 3. hard > 1 - 1000  ")
// here we start level one //
if (game_level === null || game_level === "") {
    alert("There seems to be a problem, try refreshing the page.")
} else {
    const low_game_level = game_level.toLowerCase();
    if (low_game_level === "1" || low_game_level === "easy") {
        const num_1_level = Number(prompt('pick a number between 1 to 10'));
        if (num_1_level === null || num_1_level > 10 || num_1_level <= 0) {
            alert('You did not choose a number according to the level of the game,or the cell remained empty.\n\ Please refresh the page to start over.');
        } else {
            const comnum1 = Number(Math.floor(Math.random() * 10 + 1));
            if (comnum1 === num_1_level) {
                alert('you win! \n\ the number was ' + comnum1 + " like you gess!");
            } else {
                alert('Take another try, you couldnt guess the number.');
                const num_1_level = Number(prompt('pick a number between 1 to 10'));
            }
            if (comnum1 === num_1_level) {
                alert('you win! \n\ the number was ' + comnum1 + " like you gess!");
            } else {
                alert('Take another attempt, note that this is the last attempt, be focused!');
                const num_1_level = Number(prompt('pick a number between 1 to 10'));
            }
            if (comnum1 === num_1_level) {
                alert('you win! \n\ the number was ' + comnum1 + " like you gess!");
            } else {
                alert('You lost, try again next time! \n\ the number was ' + comnum1);
            }
        }
    }
    // here we start level two //
    if (low_game_level === "2" || low_game_level === "midlle") {
        const num_1_level = Number(prompt('pick a number between 1 to 100'));
        if (num_1_level === null || num_1_level > 100 || num_1_level <= 0) {
            alert('You did not choose a number according to the level of the game,or the cell remained empty.\n\ Please refresh the page to start over.');
        } else {
            const comnum2 = Number(Math.floor(Math.random() * 100 + 1));
            if (comnum2 === num_1_level) {
                alert('you win! \n\ the number was ' + comnum2 + " like you gess!");
            } else {
                alert('you lose! \n\ the number was ' + comnum2);
            }
        }
    }
    // here we start level three //
    if (low_game_level === "3" || low_game_level === "hard") {
        const num_1_level = Number(prompt('pick a number between 1 to 1000'));
        if (num_1_level === null || num_1_level > 1000 || num_1_level <= 0) {
            alert('You did not choose a number according to the level of the game,or the cell remained empty.\n\ Please refresh the page to start over.');
        } else {
            const comnum2 = Number(Math.floor(Math.random() * 1000 + 1));
            if (comnum2 === num_1_level) {
                alert('you win! \n\ the number was ' + comnum2 + " like you gess!");
            } else {
                alert('you lose! \n\ the number was ' + comnum2);
            }

        }
    }
}
