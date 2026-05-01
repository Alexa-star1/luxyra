const products = [
  {
    name: "LUXYRA Street Tee",
    price: 599,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    name: "LUXYRA Hoodie",
    price: 999,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
  }
];

const div = document.getElementById("products");

if (!div) {
  console.error("Products div not found!");
} else {

  products.forEach(p => {
    div.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart()">Add to Cart</button>
      </div>
    `;
  });

}

function addToCart(){
  alert("Added!");
}
