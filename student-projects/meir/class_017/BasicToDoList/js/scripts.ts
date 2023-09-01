/*
    ## Basic to do list

    Write a simple to do list program.  
    Should have the following features:

    1. Add todos
    2. List all todos
    3. Remove todo from the list
    4. Clear list
*/

const toListLoop = 5;
const maxList = 5;
var myListArray: string[] = [];

initListToDo();

function initListToDo() {
    const listToDo = prompt("choose what you want to do:\n1 - Add todos\n2 - Print List all todos\n3 - Remove todo from the list\n4 - Clear list", "");

    const Status = validate(Number(listToDo));

    if (Status === "exit") {
        alert("You pushed on 'Cancel' buttom for exit");
        return;
    }

    if (Status) {
        MyChoice(Number(listToDo));
    } else {
        alert("You need to enter valid number, try again");
        initListToDo();
    }
}

function MyChoice(choosenList: number) {

    switch (choosenList) {
        case 1:
            //alert(11);
            addTodos();
            break;
        case 2:
            //alert(22);
            listAllTodos();
            break;
        case 3:
            //alert(33);
            removeTodoFromTheList();
            break;
        case 4:
            //alert(44);
            clearList();
            break;
        default:
            alert("Please enter number from list 1 - 4, try again");
            initListToDo();
            break;
    }

}

function addTodos() {
    for (let i = 0; i < maxList; i++) {
        const insert = String(prompt("Enter your list, item " + i));
        myListArray.push(insert);
    }

    let myList = JSON.stringify(myListArray);
    localStorage.setItem("myListArray", myList);
}

function listAllTodos() {

    const listArrayLS = localStorage.getItem("myListArray");
    const myList = JSON.parse(listArrayLS);
    alert("The list is:\n" + myList.join('\n'));

}

function removeTodoFromTheList() {
    
    const removeItem = prompt("Enter the item number do you want to remove?", "");

    const Status = validate(Number(removeItem));

    if (Status === "exit") {
        alert("You pushed on 'Cancel' buttom for exit");
        return;
    }

    if (Status) {
        doRemove(Number(removeItem));
    } else {
        alert("You need to enter valid number, try again");
        removeTodoFromTheList();
    }

}

function clearList() {

    const listArrayDeleteLS11 = localStorage.getItem("myListArray");
    const myListDelete = JSON.parse(listArrayDeleteLS11);
    myListDelete.splice(0, myListDelete.length);
    localStorage.setItem("myListArray", myListDelete);
    
}

function doRemove(myRemoveItem: number) {

    const listArrayLS = localStorage.getItem("myListArray");
    const myList = JSON.parse(listArrayLS);
    myList.splice(myRemoveItem, 1);
    localStorage.setItem("myListArray", JSON.stringify(myList));

}

function validate(listToDo: number) {

    if (listToDo === 0) {
        //alert("You pressed on cancel for exit");
        return "exit";
    } else if (isNaN(listToDo)) {
        alert("Not a number");
        return false;
    } else if (listToDo < 0) {
        alert("The number less from 1");
        return false;
    }/*else if(listToDo === ""){
        alert("The input is empty");
        return false;
    }*/else {
        //alert("OK, You Enter valid number");
        return true;
    }

}