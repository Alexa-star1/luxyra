const products = [
  {
    name: "LUXYRA Street Tee",
    price: 599,
    image: "https://via.placeholder.com/150",
    productId: "PRINTIFY_PRODUCT_ID",
    variantId: "VARIANT_ID"
  }
];

const div = document.getElementById("products");

products.forEach(p => {
  div.innerHTML += `
    <div class="card">
      <img src="${p.image}" width="100%">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick='addToCart(${JSON.stringify(p)})'>Add</button>
    </div>
  `;
});

function addToCart(p){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(p);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}