// [ ] Incoming orders
// [ ] Time orders
// [ ] Improve score acording to order supply time
// [ ] Add items and order types
// [ ] Resource management
// [V] Implement coffee machine

type Item =
    | "espresso"
    | "double espresso";

const orders: Item[] = ["espresso", "double espresso"];
const items: Item[] = [];

function useCoffeeMachine() {
    items.push("espresso");

    const itemsList = document.getElementById("items-list");

    if (!itemsList) {
        return;
    }

    const li = document.createElement("li");
    li.textContent = "Espresso";

    itemsList.append(li);
}

document.getElementById("coffee-machine")?.addEventListener("click", useCoffeeMachine);
