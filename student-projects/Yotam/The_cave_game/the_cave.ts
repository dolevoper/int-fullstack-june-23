type location_list = 'outside' | 'inside the entrance' | 'the strange room' | 'the inner cave' | 'quit';
/* add the room names to the text? */

type user_action = 0 | 1 | 2 | 3 | null;

interface item_data {
    name: string;
    isFound: boolean;
}
/* make the names const strings */
/* make constructor functions: doIHave(item), foundIt(item) */
 
let items: item_data[] = [];
let myLocation: location_list = 'outside';
let userInput: user_action = 1;

items.push({ name: "Torch", isFound: false });
items.push({ name: "Key", isFound: false });
items.push({ name: "Shovel", isFound: false });
items.push({ name: "Rope", isFound: false });
items.push({ name: "lastitem", isFound: false });
/* add the item names to the text */

function main_loop() {

    switch (myLocation) {

        case 'outside':
            if (true === items[3].isFound) {
                alert('You are going back outside and see a bird flying and sitting up on the tree. Finally you get it! You use the rope to climb up on a tree and find the treasure! Congratulations, you have won the game');
            } else {
                userInput = prompt('You are standing outside the cave, next to a large tree. The warm sun is out, as if to emphasize the darkness of the cave. What would you like to do? 1- Go inside; 2- Search around;') as user_action;
                switch (userInput) {
                    case 1:
                        myLocation = 'inside the entrance';
                        break;

                    case 2:
                        if (true === items[0].isFound) {
                            items[0].isFound = true;
                            alert('You find a dead branch near the tree, break it and light it up. You now have a torch!');
                        } else {
                            alert('You find nothing new.');
                        }
                        break;

                    case 0:
                        myLocation = 'quit';
                        break;
                }
            }
            break;

        case 'inside the entrance':
            if ((true === items[0].isFound) && (false === items[1].isFound)) {
                userInput = prompt('You go inside the cave and you see a strange gray door in the wall; You cannot open it, perhaps you can find a key? Using the torch, you can see that the cave goes deeper inside. What would you like to do? 1- Go back outside; 2- Go further inside;') as user_action;
                switch (userInput) {
                    case 1:
                        myLocation = 'outside';
                        break;

                    case 2:
                        myLocation = 'the inner cave';
                        break;

                    case 0:
                        myLocation = 'quit';
                        break;
                }
            } else {
                if ((true === items[0].isFound) && (true === items[1].isFound)) {
                    userInput = prompt('You are standing near the exit, once again. What would you like to do? 1-Go outside; 2- Open the door and go inside the room; 3- Go further inside the cave;') as user_action;
                    switch (userInput) {
                        case 1:
                            myLocation = 'outside';
                            break;

                        case 2:
                            myLocation = 'the strange room';
                            break;

                        case 3:
                            myLocation = 'the inner cave';
                            break;

                        case 0:
                            myLocation = 'quit';
                            break;
                    }
                } else {
                    alert('You are standing in the cave; you cannot go too deep without a source of light and you cannot open the door. There is no choice but to go outside;');
                    switch (userInput) {
                        case 1:
                            myLocation = 'outside';
                            break;

                        case 0:
                            myLocation = 'quit';
                            break;
                    }
                }
            }
            break;

        case 'the strange room':
            if (false === items[1].isFound) {
                alert('You enter the room and find a shovel! You pick it up and notice a writing on the floor beneath it, written in mud, it says "Move the black rock and dig right underneath it!" There is nothing more here, so you go out');
                myLocation = 'inside the entrance';
                items[2].isFound = true;
            } else {
                alert('There is nothing here, besides the strange writing. It says "Move the black rock and dig right underneath it". You leave the room.');
                myLocation = 'inside the entrance';
            }
            break;

        case 'the inner cave':
            if (false === items[1].isFound) {
                alert('You go inside, seeing something small ahead, twinkling as the flame of the torch flickers; you go near it and see a small brass key, lying on a strange black rock, and you pick it. You go back towards the cave entrance.');
                items[1].isFound = true;
                myLocation = 'outside';
            } else if (true === items[2].isFound) {
                alert('You move the black rock and notice that it has a writing on the bottom side; it says "You will see the treasure only when seeing everything from above!". You start digging and quickly find a long rope buried under the ground; You take it and go back');
                items[3].isFound = true;
                myLocation = 'the inner cave';
            } else {
                alert('Nothing new in the depths of the cave. You read the writing on the rock again: "You will see the treasure only when seeing everything from above!". What does it mean? Anyway, you go back.');
                myLocation = 'inside the entrance';
            }
            break;

        case 'quit':
            alert("You quit the game. Thanks for playing!");
            break;
    }
}

while (0 < userInput) {
    main_loop();
}