import listOfItems from "./assets/data/items.js";

const productsTable = document.querySelector(".section-grid");
const searchBar = document.querySelector(".aside-filter-form input");
const nameButton = document.querySelector(".sort-by-name");
const priceButton = document.querySelector(".sort-by-price");
const sortedByText = document.querySelector("section h4 span");

let searchString = "";
let sortByName = true;
let sortByPrice = null;

// sort the list of products by name (ascending) on page load
listOfItems.sort((a, b) => a.name.localeCompare(b.name));
// version without mutation of the original array
// const sortedList = [...listOfItems].sort((a, b) => a.name.localeCompare(b.name));

// filter the products based on the search input
searchBar.addEventListener("keyup", (e) => {
  searchString = e.target.value.toLowerCase();
  displayProducts(listOfItems);
});

// manage sortByName option
nameButton.addEventListener("click", () => {
  // set correct sortByName value
  if (sortByName === null) {
    sortByName = true;
  } else {
    sortByName = !sortByName;
  }
  // reset sortByPrice
  sortByPrice = null;
  priceButton.classList.remove("active");
  priceButton.classList.remove("ascending");
  // sort the list of products, manage classes and sortedByText element
  if (sortByName) {
    nameButton.classList.add("active");
    nameButton.classList.add("ascending");
    sortedByText.innerText = "name (ascending)";
    listOfItems.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    nameButton.classList.remove("ascending");
    sortedByText.innerText = "name (descending)";
    listOfItems.sort((a, b) => b.name.localeCompare(a.name));
  }
  displayProducts(listOfItems);
});

// manage sortByPrice option
priceButton.addEventListener("click", () => {
  // set correct sortByPrice value
  if (sortByPrice === null) {
    sortByPrice = true;
  } else {
    sortByPrice = !sortByPrice;
  }
  // reset sortByName
  sortByName = null;
  nameButton.classList.remove("active");
  nameButton.classList.remove("ascending");
  // sort the list of products, manage classes and sortedByText element
  if (sortByPrice) {
    priceButton.classList.add("active");
    priceButton.classList.add("ascending");
    sortedByText.innerText = "price (ascending)";
    listOfItems.sort((a, b) => a.price - b.price);
  } else {
    priceButton.classList.remove("ascending");
    sortedByText.innerText = "price (descending)";
    listOfItems.sort((a, b) => b.price - a.price);
  }
  displayProducts(listOfItems);
});

// display products on the page by looping through the list of products,
// create a new product card for each product
// then append the new product card to the products table
const displayProducts = (list) => {
  // clear the products table before adding any new products
  productsTable.innerHTML = "";

  // filter the list of products based on the search input
  // if the search input is empty, display all products
  const filteredList = searchString.length
    ? list.filter(({ name }) => name.toLowerCase().includes(searchString))
    : list;

  filteredList.forEach(({ id, name, price }) => {
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

// call the displayProducts function and display products on page load
displayProducts(listOfItems);
