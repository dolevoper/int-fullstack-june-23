function initializeClickCount() {
  if (localStorage.getItem("clickCount")) {
    const count = parseInt(localStorage.getItem("clickCount")!);
    document.getElementById("clickCount")!.textContent = count.toString();
  }
}

function updateClickCount() {
  const clickCountElement = document.getElementById("clickCount")!;
  let count = parseInt(clickCountElement.textContent!) + 1;
  clickCountElement.textContent = count.toString();

  localStorage.setItem("clickCount", count.toString());
}

window.addEventListener("load", initializeClickCount);

document
  .getElementById("clickButton")!
  .addEventListener("click", updateClickCount);
