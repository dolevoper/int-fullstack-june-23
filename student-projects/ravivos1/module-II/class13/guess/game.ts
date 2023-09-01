const dif = prompt("Welcome to Guess The Number game!\nPlease choose difficulty\n1. Easy (1-10)\n2. Hard (1-100)\n3. Impossible (1-1000)");
if (dif === null || dif === "") {
    alert("You didn't select a difficulty, please refresh the page and choose difficulty.");
}
else {
    const lowdif = dif.toLowerCase();
    if (lowdif==="easy" || lowdif==="1" || lowdif === "1.easy" || lowdif === "1. easy") {
        const usernum = Number( prompt("You chose the easy difficulty\nPlease select a number between 1-10"));
        if (usernum === null) {
            alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
        }
        else if (usernum > 10 || usernum < 1 || isNaN(usernum)) {
                alert("You entered an invalid text, please enter a valid number between 1-10");
            }
        else {
            const comnum = Number (Math.floor(Math.random() *10 + 1));
            if (usernum === comnum) {
                alert ("Congratulations! You won the game\nThe number was " + comnum);
            }
            else if (usernum > comnum) {
                const usernum = Number( prompt("Your guess was higher than the number the computer chose.\n Please try again.\nEnter a number between 1-10"));
                if (usernum === comnum) {
                    alert ("Congratulations! You won the game at your second chance\nThe number was " + comnum);
                }
                else if (usernum > 10 || usernum < 1 || isNaN(usernum)) {
                    alert("You entered an invalid text, please enter a valid number between 1-10");
                }
                else if (usernum > comnum) {
                    const usernum = Number( prompt("Your guess was higher than the number the computer chose.\n Please try again, last guess, choose carefully!\nEnter a number between 1-10"));
                    if (usernum === comnum) {
                        alert ("Congratulations! You won the game at your last chance\nThe number was " + comnum);
                    }
                    else if (usernum > 10 || usernum < 1 || isNaN(usernum)) {
                        alert("You entered an invalid text, please enter a valid number between 1-10");
                    }
                    else if (usernum === null) {
                        alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
                    }
                    else {
                        alert ("You didn't guessed the number, the number was " + comnum)
                    }
                }
                else if (usernum < comnum) {
                    const usernum = Number( prompt("Your guess was lower than the number the computer chose.\n Please try again, last guess, choose carefully!\nEnter a number between 1-10"));
                    if (usernum === comnum) {
                        alert ("Congratulations! You won the game at your last chance\nThe number was " + comnum);
                    }
                    else if (usernum > 10 || usernum < 1 || isNaN(usernum)) {
                        alert("You entered an invalid text, please enter a valid number between 1-10");
                    }
                    else if (usernum === null) {
                        alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
                    }
                    else {
                        alert ("You didn't guessed the number, the number was " + comnum)
                    }
                }
                else if (usernum===null) {
                    alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
                }
            }
            else if (usernum < comnum) {
                const usernum = Number( prompt("Your guess was lower than the number the computer chose.\n Please try again.\nEnter a number between 1-10"));
                if (usernum === comnum) {
                    alert ("Congratulations! You won the game at your second chance\nThe number was " + comnum);
                }
                else if (usernum > 10 || usernum < 1 || isNaN(usernum)) {
                    alert("You entered an invalid text, please enter a valid number between 1-10");
                }
                else if (usernum > comnum) {
                    const usernum = Number( prompt("Your guess was higher than the number the computer chose.\n Please try again, last guess, choose carefully!\nEnter a number between 1-10"));
                    if (usernum === comnum) {
                        alert ("Congratulations! You won the game at your last chance\nThe number was " + comnum);
                    }
                    else if (usernum > 10 || usernum < 1 || isNaN(usernum)) {
                        alert("You entered an invalid text, please enter a valid number between 1-10");
                    }
                    else if (usernum === null) {
                        alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
                    }
                    else {
                        alert ("You didn't guessed the number, the number was " + comnum)
                    }
                }
                else if (usernum < comnum) {
                    const usernum = Number( prompt("Your guess was lower than the number the computer chose.\n Please try again, last guess, choose carefully!\nEnter a number between 1-10"));
                    if (usernum === comnum) {
                        alert ("Congratulations! You won the game at your last chance\nThe number was " + comnum);
                    }
                    else if (usernum > 10 || usernum < 1 || isNaN(usernum)) {
                        alert("You entered an invalid text, please enter a valid number between 1-10");
                    }
                    else if (usernum === null) {
                        alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
                    }
                    else {
                        alert ("You didn't guessed the number, the number was " + comnum)
                    }
                }
                else if (usernum===null) {
                    alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
                }
            }
            else if (usernum===null) {
                alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
            }
            }
        }
        else if (lowdif==="hard" || lowdif==="2" || lowdif === "2.hard" || lowdif === "2. hard") {
            const usernum = Number( prompt("You chose the hard difficulty\nPlease select a number between 1-100"));
            if (usernum === null) {
                alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
            }
            else if (usernum > 100 || usernum < 1 || isNaN(usernum)) {
                    alert("You entered an invalid text, please enter a valid number between 1-100");
                }
            else {
                const comnum = Number (Math.floor(Math.random() *100 + 1));
                if (usernum === comnum) {
                    alert ("Congratulations! You won the game\nThe number was " + comnum);
                }
                else if (usernum > comnum) {
                    const usernum = Number( prompt("Your guess was higher than the number the computer chose.\n Please try again.\nEnter a number between 1-100"));
                    if (usernum === comnum) {
                        alert ("Congratulations! You won the game at your second chance\nThe number was " + comnum);
                    }
                    else if (usernum > 100 || usernum < 1 || isNaN(usernum)) {
                        alert("You entered an invalid text, please enter a valid number between 1-100");
                    }
                    else if (usernum > comnum) {
                        const usernum = Number( prompt("Your guess was higher than the number the computer chose.\n Please try again, last guess, choose carefully!\nEnter a number between 1-100"));
                        if (usernum === comnum) {
                            alert ("Congratulations! You won the game at your last chance\nThe number was " + comnum);
                        }
                        else if (usernum > 100 || usernum < 1 || isNaN(usernum)) {
                            alert("You entered an invalid text, please enter a valid number between 1-100");
                        }
                        else if (usernum === null) {
                            alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
                        }
                        else {
                            alert ("You didn't guessed the number, the number was " + comnum)
                        }
                    }
                    else if (usernum < comnum) {
                        const usernum = Number( prompt("Your guess was lower than the number the computer chose.\n Please try again, last guess, choose carefully!\nEnter a number between 1-100"));
                        if (usernum === comnum) {
                            alert ("Congratulations! You won the game at your last chance\nThe number was " + comnum);
                        }
                        else if (usernum > 100 || usernum < 1 || isNaN(usernum)) {
                            alert("You entered an invalid text, please enter a valid number between 1-100");
                        }
                        else if (usernum === null) {
                            alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
                        }
                        else {
                            alert ("You didn't guessed the number, the number was " + comnum)
                        }
                    }
                    else if (usernum===null) {
                        alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
                    }
                }
                else if (usernum < comnum) {
                    const usernum = Number( prompt("Your guess was lower than the number the computer chose.\n Please try again.\nEnter a number between 1-100"));
                    if (usernum === comnum) {
                        alert ("Congratulations! You won the game at your second chance\nThe number was " + comnum);
                    }
                    else if (usernum > 100 || usernum < 1 || isNaN(usernum)) {
                        alert("You entered an invalid text, please enter a valid number between 1-100");
                    }
                    else if (usernum > comnum) {
                        const usernum = Number( prompt("Your guess was higher than the number the computer chose.\n Please try again, last guess, choose carefully!\nEnter a number between 1-100"));
                        if (usernum === comnum) {
                            alert ("Congratulations! You won the game at your last chance\nThe number was " + comnum);
                        }
                        else if (usernum > 100 || usernum < 1 || isNaN(usernum)) {
                            alert("You entered an invalid text, please enter a valid number between 1-100");
                        }
                        else if (usernum === null) {
                            alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
                        }
                        else {
                            alert ("You didn't guessed the number, the number was " + comnum)
                        }
                    }
                    else if (usernum < comnum) {
                        const usernum = Number( prompt("Your guess was lower than the number the computer chose.\n Please try again, last guess, choose carefully!\nEnter a number between 1-100"));
                        if (usernum === comnum) {
                            alert ("Congratulations! You won the game at your last chance\nThe number was " + comnum);
                        }
                        else if (usernum > 100 || usernum < 1 || isNaN(usernum)) {
                            alert("You entered an invalid text, please enter a valid number between 1-100");
                        }
                        else if (usernum === null) {
                            alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
                        }
                        else {
                            alert ("You didn't guessed the number, the number was " + comnum)
                        }
                    }
                    else if (usernum===null) {
                        alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
                    }
                }
                else if (usernum===null) {
                    alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
                }
                }
            }
            else if (lowdif==="impossible" || lowdif==="3" || lowdif === "3.impossible" || lowdif === "3. impossible") {
                const usernum = Number( prompt("You chose the impossible difficulty\nPlease select a number between 1-1000"));
                if (usernum === null) {
                    alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
                }
                else if (usernum > 1000 || usernum < 1 || isNaN(usernum)) {
                        alert("You entered an invalid text, please enter a valid number between 1-100");
                    }
                else {
                    const comnum = Number (Math.floor(Math.random() *1000 + 1));
                    if (usernum === comnum) {
                        alert ("Congratulations! You won the game\nThe number was " + comnum);
                    }
                    else if (usernum > comnum) {
                        const usernum = Number( prompt("Your guess was higher than the number the computer chose.\n Please try again.\nEnter a number between 1-1000"));
                        if (usernum === comnum) {
                            alert ("Congratulations! You won the game at your second chance\nThe number was " + comnum);
                        }
                        else if (usernum > 1000 || usernum < 1 || isNaN(usernum)) {
                            alert("You entered an invalid text, please enter a valid number between 1-1000");
                        }
                        else if (usernum > comnum) {
                            const usernum = Number( prompt("Your guess was higher than the number the computer chose.\n Please try again, last guess, choose carefully!\nEnter a number between 1-1000"));
                            if (usernum === comnum) {
                                alert ("Congratulations! You won the game at your last chance\nThe number was " + comnum);
                            }
                            else if (usernum > 1000 || usernum < 1 || isNaN(usernum)) {
                                alert("You entered an invalid text, please enter a valid number between 1-1000");
                            }
                            else if (usernum === null) {
                                alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
                            }
                            else {
                                alert ("You didn't guessed the number, the number was " + comnum)
                            }
                        }
                        else if (usernum < comnum) {
                            const usernum = Number( prompt("Your guess was lower than the number the computer chose.\n Please try again, last guess, choose carefully!\nEnter a number between 1-1000"));
                            if (usernum === comnum) {
                                alert ("Congratulations! You won the game at your last chance\nThe number was " + comnum);
                            }
                            else if (usernum > 1000 || usernum < 1 || isNaN(usernum)) {
                                alert("You entered an invalid text, please enter a valid number between 1-1000");
                            }
                            else if (usernum === null) {
                                alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
                            }
                            else {
                                alert ("You didn't guessed the number, the number was " + comnum)
                            }
                        }
                        else if (usernum===null) {
                            alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
                        }
                    }
                    else if (usernum < comnum) {
                        const usernum = Number( prompt("Your guess was lower than the number the computer chose.\n Please try again.\nEnter a number between 1-1000"));
                        if (usernum === comnum) {
                            alert ("Congratulations! You won the game at your second chance\nThe number was " + comnum);
                        }
                        else if (usernum > 1000 || usernum < 1 || isNaN(usernum)) {
                            alert("You entered an invalid text, please enter a valid number between 1-1000");
                        }
                        else if (usernum > comnum) {
                            const usernum = Number( prompt("Your guess was higher than the number the computer chose.\n Please try again, last guess, choose carefully!\nEnter a number between 1-1000"));
                            if (usernum === comnum) {
                                alert ("Congratulations! You won the game at your last chance\nThe number was " + comnum);
                            }
                            else if (usernum > 1000 || usernum < 1 || isNaN(usernum)) {
                                alert("You entered an invalid text, please enter a valid number between 1-1000");
                            }
                            else if (usernum === null) {
                                alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
                            }
                            else {
                                alert ("You didn't guessed the number, the number was " + comnum)
                            }
                        }
                        else if (usernum < comnum) {
                            const usernum = Number( prompt("Your guess was lower than the number the computer chose.\n Please try again, last guess, choose carefully!\nEnter a number between 1-1000"));
                            if (usernum === comnum) {
                                alert ("Congratulations! You won the game at your last chance\nThe number was " + comnum);
                            }
                            else if (usernum > 1000 || usernum < 1 || isNaN(usernum)) {
                                alert("You entered an invalid text, please enter a valid number between 1-1000");
                            }
                            else if (usernum === null) {
                                alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
                            }
                            else {
                                alert ("You didn't guessed the number, the number was " + comnum)
                            }
                        }
                        else if (usernum===null) {
                            alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
                        }
                    }
                    else if (usernum===null) {
                        alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
                    }
                    }
                }
    }
    
  alert("Please refresh the page and choose difficulty to play again.");