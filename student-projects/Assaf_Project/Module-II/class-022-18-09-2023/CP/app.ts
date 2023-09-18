console.clear();

function getData(key: string): number {
  const storedData = localStorage.getItem(key);
  return storedData ? Number(storedData) : 0;
} 

let count = getData("count");

window.addEventListener("click", addToCount);

function addToCount() {
  count++;
  console.clear();
  console.log("You have clicked " + count + " times");
  saveCountCounter();
}

function saveCountCounter() {
  localStorage.setItem("count", JSON.stringify(count));
}