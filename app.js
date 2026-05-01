// 🔥 LUXYRA FINAL APP.JS

const products = [
  {
    id: 1,
    name: "LUXYRA Street Tee",
    price: 599,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    id: 2,
    name: "LUXYRA Hoodie",
    price: 999,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
  },
  {
    id: 3,
    name: "Oversized Tee",
    price: 699,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
  },
  {
    id: 4,
    name: "Street Pants",
    price: 1199,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
  }
];

// 🎯 Render Products
const productDiv = document.getElementById("products");

if (productDiv) {
  products.forEach(p => {
    productDiv.innerHTML += `
      <div class="card" onclick="viewProduct(${p.id})">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(event, ${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

// 🛒 Add to Cart
function addToCart(e, id) {
  e.stopPropagation(); // prevent card click

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = products.find(p => p.id === id);

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("✅ Added to Cart");
}

// 👁️ View Product (basic for now)
function viewProduct(id) {
  const product = products.find(p => p.id === id);
  alert("Opening: " + product.name);
  // later we will open product page
}

// 🔄 Load Cart Count (optional future use)
function getCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart.length;
}

console.log("🔥 LUXYRA App Loaded");
