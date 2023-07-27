function addToCart() {

    var cartCounterElement = document.querySelector(".cart-count");
    var count = parseInt(cartCounterElement.textContent);

    
    cartCounterElement.textContent = count + 1;
  }