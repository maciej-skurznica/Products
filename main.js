import listOfItems from "./assets/data/items.js";
const productsTable = document.querySelector(".section-grid");

listOfItems.forEach(({ id, name, price }) => {
  // create a new product card
  const productCard = document.createElement("div");
  productCard.classList.add("grid-item");
  productCard.innerHTML = `
    <div class="item">
      <img src="./assets/images/Rectangle ${id}.png" alt="item ${name} image" />
    </div>
    <h3 class="grid-item-title">${name}</h3>
    <p class="grid-item-price">£${price}</p>
  `;

  // append the new product card to the products table
  productsTable && productsTable.appendChild(productCard);
});
