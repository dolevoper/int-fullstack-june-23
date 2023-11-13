export type Item = "Espresso" | "Foamed milk";

// export type Items = Item[];
export type Items = Record<Item, number>;

export function empty(): Items {
  return {} as Items;
}

export function fromArray(items: Item[]): Items {
  const result = {} as Items;
  items.forEach((item) => {
    result[item] = (result[item] || 0) + 1;
  });
  return result;
}

export function addItem(items: Items, itemToAdd: Item) {
  items[itemToAdd] = (items[itemToAdd] || 0) + 1;
}

// export function hasItem(items: Items, itemToFind: Item) {
//   return items.includes(itemToFind);
// }

// export function everyItem(
//   items: Items,
//   predicate: (value: "espresso", index: number, array: "espresso"[]) => unknown
// ) {
//   return items.every(predicate);
// }

export function getItemCount(items: Items, itemToCount: Item) {
  return items[itemToCount] || 0;
}

//*************************************************** */
