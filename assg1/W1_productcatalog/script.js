
let products = [
  {name: "Headphones", price: "₹7999", info: "Noise-cancelling", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000"},
  {name: "Smartwatch", price: "₹12999", info: "Fitness tracker", img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?fm=jpg&q=60&w=3000"},
  {name: "Mouse", price: "₹2499", info: "Gaming mouse", img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000"},
  {name: "Stand", price: "₹1999", info: "Laptop stand", img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000"},
  {name: "Speaker", price: "₹2999", info: "Bluetooth speaker", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000"},
  {name: "Hub", price: "₹1499", info: "USB-C hub", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000"},
  {name: "Webcam", price: "₹3499", info: "HD webcam", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000"},
  {name: "SSD", price: "₹6999", info: "500GB SSD", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000"},
  {name: "Charger", price: "₹1999", info: "Wireless charger", img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000"},
  {name: "Keyboard", price: "₹4999", info: "Mechanical keyboard", img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000"},
  {name: "Earbuds", price: "₹5999", info: "Noise-cancelling", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000"},

  {name: "Headphones", price: "₹7999", info: "Noise-cancelling", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000"},
  {name: "Smartwatch", price: "₹12999", info: "Fitness tracker", img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?fm=jpg&q=60&w=3000"},
  {name: "Mouse", price: "₹2499", info: "Gaming mouse", img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000"},
  {name: "Stand", price: "₹1999", info: "Laptop stand", img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000"},
  {name: "Speaker", price: "₹2999", info: "Bluetooth speaker", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000"},
  {name: "Hub", price: "₹1499", info: "USB-C hub", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000"},
  {name: "Webcam", price: "₹3499", info: "HD webcam", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000"},
  {name: "SSD", price: "₹6999", info: "500GB SSD", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000"},
  {name: "Charger", price: "₹1999", info: "Wireless charger", img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000"},
  {name: "Keyboard", price: "₹4999", info: "Mechanical keyboard", img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000"},
  {name: "Earbuds", price: "₹5999", info: "Noise-cancelling", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000"}
];

let page = 1;
let perPage = 10;

function showProducts() {
  let start = (page - 1) * perPage;   //0 to 10 for indexing 
  let end = start + perPage;
  let list = products.slice(start, end);

  // Table layout
  let body = document.querySelector("tbody");
  body.innerHTML = "";
  list.forEach(p => {
    body.innerHTML += `
      <tr>
        <td><img src="${p.img}" width="80"></td>
        <td>${p.name}</td>
        <td>${p.price}</td>
        <td>${p.info}</td>
      </tr>
    `;
  });

  // Card layout
  let cards = document.getElementById("cards");
  cards.innerHTML = "";
  list.forEach(p => {
    cards.innerHTML += `
      <div class="card">
        <img src="${p.img}" alt="${p.name}">
        <strong>${p.name}</strong><br>
        <span>${p.price}</span><br>
        <p>${p.info}</p>
      </div>
    `;
  });

  document.getElementById("page").innerText = `Page ${page} of ${Math.ceil(products.length / perPage)}`;

}

function next() {
  if (page * perPage < products.length) {
    page++;
    showProducts();
  }
}

function prev() {
  if (page > 1) {
    page--;
    showProducts();
  }
}

showProducts();
