export default class DisplayProducts {
  constructor(products) {
    this.productsContainer = document.getElementById("productsContainer");
    this.messagebox = document.getElementById("messageBox");
    this.message = document.getElementById("message");
    this.products = products;
  }

  showProducts() {
    this.cleanHTML();
    this.products.forEach((product) => {
      const productToInsert = document.createElement("div");
      productToInsert.classList.add("itemLine");
      productToInsert.innerHTML = `
        <p class="productName"><b>Product Name:</b><span>${product.product}</span></p>
        <p><b>Precio:</b><span>${product.price}</span></p>
        <p><b>Año:</b><span>${product.year}</span></p>
        <button id="${product.id}" class="btnDelete">Delete</button>
      `;

      this.productsContainer.appendChild(productToInsert);
    });
  }

  cleanHTML() {
    while (this.productsContainer.firstChild) {
      this.productsContainer.removeChild(this.productsContainer.firstChild);
    }
  }

  showMessage(message, color) {
    this.message.classList.add("message");
    this.message.textContent = `${message}`;
    this.messagebox.classList.add(color);

    setTimeout(() => {
      this.cleanMessage(color);
    }, 1500);
  }

  cleanMessage(color) {
    this.messagebox.classList.remove(color);
    this.message.textContent = "";
  }
}
