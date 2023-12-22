export type Item =
    | "espresso"
    | "milk";

// export type Items = Item[];
export type Items = Record<Item, number>;

export function empty(): Items {
    return {} as Items;
}

export function fromArray(items: Item[]): Items {
    const result = {} as Items;
    items.forEach(item => {
        result[item] = (result[item] || 0) + 1;
    });
    return result;
}

export function addItem(items: Items, itemToAdd: Item) {
    items[itemToAdd] = (items[itemToAdd] || 0) + 1;
}

export function hasItem(items: Items, itemToFind: Item) {
    return items[itemToFind] !== undefined;
}

export function everyItem(items: Items, predicate: (value: number, key: Item, obj: Items) => boolean) {
    return Object.entries(items).every(([key, value]) => predicate(value, key as Item, items));
}

export function getItemCount(items: Items, itemToCount: Item) {
    return items[itemToCount] || 0;
}