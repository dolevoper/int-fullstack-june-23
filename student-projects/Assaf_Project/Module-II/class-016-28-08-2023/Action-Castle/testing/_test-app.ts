let inventoryItems = ["a lamp", "a rose", "a fish"];
alert(inventoryItems)
alert("Hello")

function removeItemFromInventory(input: string) {
const index = inventoryItems.indexOf(input);
if (index > -1) { // only splice array when item is found
  inventoryItems.splice(index, 1); // 2nd parameter means remove one item only
}
}

removeItemFromInventory("a bar")
alert(inventoryItems); 