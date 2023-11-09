export type Item =
    | "espresso"
    | "milk";

// export type Items = Item[];
export type Items = Record<Item, number>;

export function empty(): Items {
    return {
        "espresso": 0,
        "milk": 0,
    };
}

export function fromArray(items: Item[]): Items {
    const itemsRecord: Items = {
        "espresso": 0,
        "milk": 0
    };
    items.forEach(item => {
        itemsRecord[item] = getItemCountInArray(items, item);
    });
    console.log(itemsRecord)
    return itemsRecord;
}

export function addItem(items: Items, itemToAdd: Item) {
    items[itemToAdd] += 1;
}

export function getItemCount(items: Items, itemToCount: Item) {
    return items.filter((item) => item === itemToCount).length;
}

function getItemCountInArray(items: Item[], itemToCount: Item) {
    return items.filter((item) => item === itemToCount).length;
}