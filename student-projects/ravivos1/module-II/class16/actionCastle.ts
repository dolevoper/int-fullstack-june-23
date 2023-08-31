let hasBikes = false;
let hasSquirtle = false;
let hasBulbasaur = false;
let hasDiglett = false;
let hasPewterBadge = false;
let hasCerulinBadge = false;
let hasVarmilionBadge = false;
let hasSeladonBadge = false;
let hasSafroonBadge = false;
let hasFushiaBadge = false;
let hasCinnebarBadge = false;
let hasVaridianBadge = false;
alert ("Welcome to Pokemon Master!\n You will now begin your quest to become the Pokemon Master, good luck!")
house();

function house() {
    const userInput = simplePrompt(`You are inside your house at your hometown, Pallet. ${!hasSquirtle ? "You watch TV and hear the profesor say he is giving pokemons to new trainers today at his lab. " : ""}A door leads outside.`);

    switch (userInput) {
        case undefined:
            return;
        case "out":
            pallet();
            break;
        case "watch tv":
            alert("You keep watching TV.");
            house();
            break;
        default:
            announceUnknownInput(userInput);
            house();
    }
}

function pallet() {
    const userInput = simplePrompt(`You’re at your hometown, Pallet town.
There is a house here.
There is a lab here.
There is a path to the north.`);

    switch (userInput) {
        case undefined:
            return;
        case "house":
            house();
            break;
        case "lab":
            lab();
            break;
        case "north":
            if (hasSquirtle) {
                pewter();
            }
            else {
                alert ("You cannot go there without a pokemon!")
                pallet()
            }
            break;
        default:
            announceUnknownInput(userInput);
            pallet();
    }
}

function lab() {
    const userInput = simplePrompt(`You are inside the lab. Profesor Oak greets you${!hasSquirtle ? " and ask if you want to take pokemon." : "."} You can go out to Pallet town.`);

    switch (userInput) {
        case undefined:
            return;
        case "take pokemon" :
            if (!hasSquirtle) {
                hasSquirtle = true;
                alert("Squirtle, a water type pokemon, added to inventory.");
                lab();
            }
            else {
                alert ("you already took a pokemon!")
                lab();
            }
            break
        case "greet" :
            alert ("Profesor Oak greets you back! You are a very nice person.")
            lab();
            break
        case "out" :
            pallet();
            break
        default:
            announceUnknownInput(userInput);
            lab();
    }
 }

function pewter() {
    const userInput = simplePrompt(`You’re inside Pewter town, the city of rocks! There is some beautiful rocks outside.
There is a GYM here.
There is a forest to the north.
In your right you can go to Cerulin town.
There is a path to the south.`); 
    switch (userInput) {
        case undefined:
            return;
        case "gym" :
            pewterGym();
            break
        case "north" :
            forest();
            break
        case "right":
            cerulin();
            break
        case "south":
            pallet();
            break
        case "admire rocks":
            alert ("Wow! what a beautiful rocks!")
            pewter();
            break
        default:
            announceUnknownInput(userInput);
            pewter();            
    }
}

function pewterGym () {
    const userInput = simplePrompt(`You entered to Pewter GYM. Brock the GYM leader greets you. ${!hasPewterBadge ? "Would you like to fight Brock and earn the Pewter GYM badge?" : ""}\nYou can go out to Pewter town.`);
    switch (userInput) {
        case undefined:
            return;
        case "out":
            pewter();
            break
        case "fight":
            if (!hasPewterBadge) {
                const userInput = simplePrompt(`Which pokemon will you choose?`);
                if (userInput === `squirtle`) {
                    hasPewterBadge = true;
                    alert ("You won Brock! Pewter GYM badge added to inventory. You are going back to the GYM")
                    pewterGym ();
                }
                else {
                    alert ("You loose or you chose a pokemon you don't have yet. You can try again, You are going back to the GYM")
                    pewterGym ();
                }
            }
            else {
                alert ("You already won Brock.");
                pewterGym ();
            }
            break
            case "greet" :
                alert ("Brock greets you back! You are a very nice person.")
                pewterGym();
                break
            case "out" :
                pewter();
                break
            default:
                announceUnknownInput(userInput);
                pewterGym();
    }
}

function forest() {
    const userInput = simplePrompt(`You are in the forest. There's a lot of trees and weeds.${!hasBulbasaur ? " in one of the weeds you see a Bulbasaur hiding there. " : ""}You can go south to Pewter town.`);
    switch (userInput) {
        case undefined:
            return;
        case "south" :
            pewter();
            break
        case "admire trees":
            alert ("Wow, what a tall trees!")
            forest();
            break
        case "catch bulbasaur":
            if (!hasBulbasaur) {
                const userInput = simplePrompt(`You are trying to catch a bulbasaur, you must answer the question to catch him!\nThe question is : What is the final evolution of Bulbasaur?`);
                if (userInput === `venosaur`) {
                    hasBulbasaur = true;
                    alert ("Your answer was correct! You successfully caught Bulbasaur! Bulbasaur, a grass typr pokemon, added to your inventory")
                    forest();
                }
                else if (userInput !== undefined) {
                    wrongAnswer(userInput);
                    forest();
                }
                else {
                    return
                }
            }
            else {
                alert ("You alreasy caught a Bulbasaur")
                forest ();
            }
            break
        default:
            announceUnknownInput(userInput);
            forest();    
    }
}

function cerulin() {
    const userInput = simplePrompt(`You are in Cerulin town, the city of water! You see a lot of fountains in the city.
    There is a GYM here.
    There is a cave here.
    In your left, you can go to Pewter town.`);
    switch (userInput) {
        case undefined:
            return;
        case "gym" :
            cerulinGym();
            break
        case "admire fountains":
            alert ("These fountains looks really nice!")
            cerulin ();
            break
        case "enter fountain":
            alert ("You cannot enter the fountains, you'll get wet!")
            cerulin ();
            break
        case "cave":
            cave ();
            break
        case "left":
            pewter();
        default:
            announceUnknownInput(userInput);
            cerulin();
    }
}

function cerulinGym () {
    const userInput = simplePrompt(`You entered to Cerulin GYM. Misty the GYM leader greets you. ${!hasCerulinBadge ? "Would you like to fight Misty and earn the Cerulin GYM badge?" : ""}\nYou can go out to Cerulin town.`);
    switch (userInput) {
        case undefined:
            return;
        case "out":
            cerulin();
            break
        case "fight":
            if (!hasPewterBadge) {
                alert ("You don't have the Pewter badge yet, you must fight and win the Pewter badge before you can fight the Cerulin GYM");
                cerulinGym ();
            }
            else {
                if (!hasCerulinBadge) {
                    const userInput = simplePrompt(`Which pokemon will you choose?`);
                    if (userInput === `bulbasaur` && hasBulbasaur) {
                        hasCerulinBadge = true;
                        alert ("You won Misty! Cerulin GYM badge added to inventory. You are going back to the GYM")
                        cerulinGym ();
                    }
                    else {
                        alert ("You loose or you chose a pokemon you don't have yet. You can try again, You are going back to the GYM")
                        cerulinGym ();
                    }
                }
                else {
                    alert ("You already won Misty.");
                    cerulinGym ();
                }
            }
            break
            case "greet" :
                alert ("Misty greets you back! You are a very nice person.")
                cerulinGym();
                break
            case "out" :
                cerulin();
                break
            default:
                announceUnknownInput(userInput);
                cerulinGym();
    }
}

function cave () {

}

function simplePrompt(message: string) {
    let userInput = prompt(message)?.trim()?.toLowerCase();
    if (userInput === `help`) {
        help (userInput);
    }
    if (userInput === `inventory`) {
        inventory (userInput);
    }

    return userInput;
}

function announceUnknownInput(input: string) {
    alert(`Sorry, you can't "${input}"`);
}

function wrongAnswer (answer: string) {
    alert("Sorry, your answer was incorrect. the pokemon fleed!");
}

function help (help: string) {
    alert(`Help page number 1 from 2 : GYM order :
1. Pewter GYM
2. Cerulin GYM
3. Varmilion GYM
4. Seladon GYM
5. Safroon GYM
6. Fushia GYM
7. Cinnebar GYM
8. Varidian GYM`);
alert(`Help page number 2 from 2 : pokemon types who win other types :
1. Water type wins fire, ground and rock types
2. Fire type wins grass and ice types
3. Grass type wins water and ground type
4. Electric type wins water and flying types
5. Ground type wins electrick and fire types
6. Flying type wins grass and fighting types`);
}

function inventory (help: string) {
    if (!hasBikes) {
        hasBikes = true;
        alert ("There's a note from your mom that said shr put your bike in your inventory, that's great!");
    }
    alert(`Inventory - badges :\n${hasPewterBadge ? "Pewter badge\n" : ""}${hasCerulinBadge ? "Cerulin badge\n" : ""}${hasVarmilionBadge ? "Varmilion badge\n" : ""}${hasSeladonBadge ? "Seladon badge\n" : ""}${hasSafroonBadge ? "Safroon badge\n" : ""}${hasFushiaBadge ? "Fushia badge\n" : ""}${hasCinnebarBadge ? "Cinnebar badge\n" : ""}${hasVaridianBadge ? "Varidian badge\n" : ""}`);
    alert(`inventory - pokemons and other equipment :\n${hasBikes ? "Bikes\n" : ""}${hasSquirtle ? "Squirtle, water type pokemon\n" : ""}${hasBulbasaur ? "Bulbasaur, grass type pokemon\n" : ""}${hasDiglett ? "Diglett, ground type pokemon\n" : ""}`);


}

//${hasBikes ? "Bikes\n" : ""}