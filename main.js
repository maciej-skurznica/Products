import listOfItems from "./assets/data/items.js";
const productsTable = document.querySelector(".section-grid");
const searchBar = document.querySelector(".aside-filter-form input");

// display products on the page by looping through the list of products
// and create a new product card for each product
// then append the new product card to the products table
const displayProducts = (list) => {
  // clear the products table before adding any new products
  productsTable.innerHTML = "";
  list.forEach(({ id, name, price }) => {
    // create a new product card
    const productCard = document.createElement("div");
    productCard.classList.add("grid-item");
    productCard.innerHTML = `
      <div class="item">
        <img class="item-image" src="./assets/images/Rectangle ${id}.png" alt="item ${name} image" />
        <img class="item-arrow" src="./assets/images/arrow.png" alt="small arrow" />
      </div>
      <h3 class="grid-item-title">${name}</h3>
      <p class="grid-item-price">£${price}</p>
    `;

    // append the new product card to the products table
    productsTable.appendChild(productCard);
  });
};

// call the displayProducts function and display all products on page load
displayProducts(listOfItems);

// filter the products based on the search input
searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredProducts = listOfItems.filter(({ name }) =>
    name.toLowerCase().includes(searchString)
  );
  displayProducts(filteredProducts);
});
