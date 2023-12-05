export type Item = | "espresso" | "double espresso" | "milk";

export type Items = Item[];

type Order = {
    name : string,
    items: Items
}

const orders:Order[] = [

    { name: "Espresso", items: fromArray (["espresso"]) } ,
    { name: "Double Espresso", items: fromArray(["espresso" , "espresso"]) }
]
const items: Items = empty();

function empty(): Items { 
    return [];
}

function fromArray(items :Item[]) {
    return items;
}

function addItem(items : Items, itemToAdd : Item) {
    items.push(itemToAdd);
}

function hasItem(items : Items, itemToFind : Item) {
    return items.includes(itemToFind);
}

function everyItem(items: Items, predicate : (value: "espresso", index: number, array: "espresso"[]) => unknown) {
    return items.every(predicate); 
}

function useCoffeeMachine() {

    addItem(items, "espresso");
    const itemsList = document.getElementById("items-list");


    for (const order of orders) {

        markOrderAvailable(order);
    }

    if(!itemsList) {
        return;
    }

    const li = document.createElement("li");
    li.textContent = "Espresso";
    itemsList.append(li); 

    console.log("!");
}



document.getElementById("coffee-machine")?.addEventListener("click", useCoffeeMachine); 
console.log("event listener added");

function orderIsAvailable(order: Order) {
    return everyItem(items, 
        (orderItem) => hasItem(items,orderItem))    
}

function markOrderAvailable(order : Order) {
    // run for each type        
    return getItemCount(items, "espresso") === getItemCount(order.items, "espresso");
}

function getItemCount(items : Items, count : Item) {

    return items.filter((item) => item === count).length;

}

export {
 empty,
 fromArray,
 addItem,
 hasItem,
 everyItem,
 useCoffeeMachine,   
 getItemCount
}