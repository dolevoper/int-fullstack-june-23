// Implementing the map() method:

const names = ["lilach", "ROMAN", "YUvAL", "liMOR", "YAron", "BaRaK"];

function capitalizeFirstLetter(originalArray: Array<string>) {
    const newArray = [...originalArray];
    for (let index = 0; index < newArray.length; index++) {
        newArray[index] = newArray[index].toLowerCase();
        newArray[index] = newArray[index].charAt(0).toUpperCase() + newArray[index].slice(1);
    }
    return newArray;
}