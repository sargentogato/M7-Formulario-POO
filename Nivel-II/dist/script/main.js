import App from "./App.js";

const app = new App();

app.form.addEventListener("submit", (event) => {
  event.preventDefault();

  /*
   * Verifica si los campos no están vacios. Se llama al método isInputEmpty
   * que devuelve un true o false. Es el propio método quien gestiona el mensaje
   * cuando los campos están vacios.
   */
  if (!app.isInputEmpty()) {
    app.formManager();
  }
});

/*
 * Escucha los botones delete de los productos. Aquí accedemos a la propiedad
 * productsContainer de la clase displayer.
 */
app.displayer.productsContainer.addEventListener("click", (event) => {
  event.stopPropagation();
  /*pasamos el id a numero, ya que el valor contra el cual lo comparamos, es un número  */
  const id = parseInt(event.target.id);

  //Llamando al método deleteProducto de la clase App
  app.deleteProduct(id);
});
