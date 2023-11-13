export const items = ["espresso", "milk"] as const;

// export type Item = "espresso" | "milk";
export type Item = typeof items[number];

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

export function getItemCount(items: Items, itemToCount: Item) {
    return items.filter((item) => item === itemToCount).length;
}
