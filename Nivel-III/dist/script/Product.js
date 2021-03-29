export default class Product {
  constructor(product, price, year, id) {
    this.product = product.value.toUpperCase();
    this.price = price.value;
    this.year = year.value;
    this.id = id;
  }
}
