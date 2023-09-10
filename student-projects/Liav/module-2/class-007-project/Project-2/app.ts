const addToCartButtons = document.querySelectorAll(".addToCart") as NodeListOf<HTMLButtonElement>;
const cartCount = document.getElementById("cart-count") as HTMLSpanElement;
const cartButton = document.getElementById("cartButton") as HTMLAnchorElement;
const popup = document.getElementById("popup") as HTMLDivElement;
let count = 0;


addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    count++;
    cartCount.textContent = count.toString();
  });
});

cartButton.addEventListener("click", (event) => {
  event.preventDefault();
  popup.classList.toggle("hidden");
});
