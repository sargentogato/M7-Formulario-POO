const form = document.forms[0];
const btn = document.getElementById("submit");
const { product, price, year } = form;
let productsAdded = [];

class Product {
  constructor(product, price, year) {
    this.product = product.value;
    this.price = price.value;
    this.year = year.value;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newProduct = new Product(product, price, year);

  productsAdded = [...productsAdded, newProduct];
  console.log(productsAdded);
});
