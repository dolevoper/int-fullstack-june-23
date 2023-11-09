export type Item =
    | "espresso"
    | "milk";

export type Items = Item[];
// export type Items = Record<Item, number>;

export function empty(): Items {
    return [];
}

export function fromArray(items: Item[]): Items {
    return items;
}

export function addItem(items: Items, itemToAdd: Item) {
    items.push(itemToAdd);
}

export function hasItem(items: Items, itemToFind: Item) {
    return items.includes(itemToFind);
}

export function everyItem(items: Items, predicate: (value: "espresso", index: number, array: "espresso"[]) => unknown) {
    return items.every(predicate);
}

export function getItemCount(items: Items, itemToCount: Item) {
    return items.filter((item) => item === itemToCount).length;
}

//*************************************************** */