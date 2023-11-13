export const items = ["espresso", "milk", "ice"] as const;

// export type Item = "espresso" | "milk";
export type Item = typeof items[number];

// export type Items = Item[];
export type Items = Record<Item, number>;

export function empty(): Items {
    return {
        espresso: 0,
        milk: 0,
        ice: 0
    };
}

export function fromArray(items: Item[]): Items {
    const result = empty();

    for (const item of items) {
        addItem(result, item);
    }

    return result;
}

export function addItem(items: Items, itemToAdd: Item): void {
    items[itemToAdd]++;
}

export function getItemCount(items: Items, itemToCount: Item): number {
    return items[itemToCount];
}
