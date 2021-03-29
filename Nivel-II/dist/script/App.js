import Product from "./Product.js";
import DisplayProducts from "./DisplayProduct.js";

/*
 * La clase App gestiona todo los mensajes, almacena todos los productos y
 * gestiona la creación de los mismos. También verifica si los campos están
 * vacios, si un producto ya existe y el borrado de los productos.
 *
 * La clase App instancia a la clase DisplayeProducts, para poder enviarle la
 * informción que se pintará en el DOM.
 */

export default class App {
  constructor() {
    this.form = document.forms[0];
    const { product, price, year } = this.form;
    this.displayer = new DisplayProducts();
    this.idNumber = 0;
    this.productsAdded = [];
    this.alert = "alert";
    this.success = "success";
    this.emptyInputMessage = "Complete todos los campos porfavor";
    this.alertMessage = "El producto ya existe";
    this.deleteMessage = "Producto borrado con éxito";
    this.successMessage = "Producto registrado correctamente";
  }

  /*
   * Creación de una instancia de la clase Product
   */
  formManager() {
    this.idNumber++;
    const newProduct = new Product(product, price, year, this.idNumber);

    /* Verificación de si el producto existe o no */
    if (this.productExist()) {
      this.displayer.showMessage(this.alertMessage, this.alert);
    } else {
      this.productsAdded = [...this.productsAdded, newProduct];
      this.displayer.products = this.productsAdded;
      this.displayProductAndMessage(this.successMessage, this.success);
      this.form.reset();
    }
  }

  isInputEmpty() {
    let result = false;
    if (product.value === "" || price.value === "" || year.value === "") {
      this.displayer.showMessage(this.emptyInputMessage, this.alert);
      result = true;
    }

    return result;
  }

  productExist() {
    let result = false;
    const productName = product.value.toUpperCase();
    for (const prod of this.productsAdded) {
      if (prod.product === productName) {
        return (result = true);
      }
    }

    return result;
  }

  deleteProduct(idProduct) {
    this.productsAdded = this.productsAdded.filter((product) => product.id !== idProduct);

    this.displayer.products = this.productsAdded;
    this.displayProductAndMessage(this.deleteMessage, this.alert);
  }

  displayProductAndMessage(message, colorMessage) {
    this.displayer.showProducts();
    this.displayer.showMessage(message, colorMessage);
  }
}
