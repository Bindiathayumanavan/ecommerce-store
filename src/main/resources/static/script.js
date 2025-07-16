let cart = [];

window.onload = () => {
  fetch("/api/products")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("product-list");
      data.forEach(product => {
        const card = document.createElement("div");
        card.className = "product";
        card.innerHTML = `
          <img src="${product.imageUrl}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p>₹${product.price}</p>
          <button onclick='addToCart("${product.name}", ${product.price})'>Add to Cart</button>
        `;
        container.appendChild(card);
      });
    });
};

function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
  });
}

function checkout() {
  if (cart.length === 0) {
    alert("🛒 Your cart is empty!");
    return;
  }

  alert("✅ Order placed successfully!\nThank you for shopping with us.");
  cart = [];
  renderCart();
}
