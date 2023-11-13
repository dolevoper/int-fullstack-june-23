// [V] Implement coffee machine
// [ ] Deliver orders
//      - Color available orders green
//      - Click on an available order to close it and remove items
// [ ] Recieve score on delivered orders
// [ ] Incoming orders
// [ ] Time orders
// [ ] Improve score acording to order supply time
// [ ] Add items and order types
// [ ] Resource management
// [ ] Compound orders (2 double espresso)

import { Items, fromArray, empty, addItem, getItemCount } from "./items.js";

type Order = {
    name: string,
    items: Items
};

const orders: Order[] = [
    { name: "Espresso", items: fromArray(["Espresso"]) },
    { name: "Double espresso", items: fromArray(["Espresso", "Espresso"]) },
    { name: "Latte", items: fromArray(["Espresso", "Foamed milk"]) },
    { name: "Espresso on Ice", items: fromArray(["Espresso", "Ice cubes"]) }
];

const items: Items = empty();

function useCoffeeMachine() {
    addItem(items, "Espresso");

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

function useMilkFoamer() {
    addItem(items, "Foamed milk");

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
    li.textContent = "Foamed milk";

    itemsList.append(li);
}
function useIceDispenser() {
    addItem(items, "Ice cubes");

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
    li.textContent = "Ice cubes";

    itemsList.append(li);
}

document
    .getElementById("coffee-machine")
    ?.addEventListener("click", useCoffeeMachine);

document
    .getElementById("milk-foamer")
    ?.addEventListener("click", useMilkFoamer);
document
    .getElementById("ice-dispenser")
    ?.addEventListener("click", useIceDispenser);

function orderIsAvailable(order: Order) {
    // TODO: run dynamically for every item type
    return getItemCount(items, "Espresso") === getItemCount(order.items, "Espresso") &&
        getItemCount(items, "Foamed milk") === getItemCount(order.items, "Foamed milk") &&
        getItemCount(items, "Ice cubes") === getItemCount(order.items, "Ice cubes");
}

function markOrderAvailable(order: Order) {
    console.log("marking available");
}

