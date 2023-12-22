// [V] Implement coffee machine
// [ ] Deliver orders
//      - Color available orders green
//      - Click on an available order to close it and remove items
// [ ] Recieve score on delivered orders
// [ ] Incoming orders (setInterval, setTimeout)
// [ ] Time orders
// [ ] Improve score acording to order supply time
// [ ] Add items and order types
// [ ] Resource management
// [ ] Compound orders (2 double espresso)

import { Items, fromArray, empty, addItem, getItemCount, items } from "./items.js";

type Order = {
    name: string,
    items: Items
};

const orders: Order[] = [
    { name: "Espresso", items: fromArray(["espresso"]) },
    { name: "Double espresso", items: fromArray(["espresso", "espresso"]) }
];

const inventory: Items = empty();

function useCoffeeMachine() {
    addItem(inventory, "espresso");

    // for (let i = 0; i < orders.length; i++) {
    //      const order = orders[i];
    for (const order of orders) {
        if (orderIsAvailable(order)) {
            markOrderAvailable(order);
        }
    }

    const itemsList = document.getElementById("items-list");

    if (!itemsList) {
        return;
    }

    const li = document.createElement("li");
    li.textContent = "Espresso";

    itemsList.append(li);
}

document
    .getElementById("coffee-machine")
    ?.addEventListener("click", useCoffeeMachine);

function orderIsAvailable(order: Order) {
    return items.every(
        (item) => getItemCount(inventory, item) === getItemCount(order.items, item)
    );
}

function markOrderAvailable(order: Order) {
    console.log("marking available");
}

