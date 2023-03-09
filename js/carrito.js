const botonesAgregar = document.querySelectorAll(".botoncarrito");

botonesAgregar.forEach((botonAgregar) => {
  botonAgregar.addEventListener("click", (event) => {
    // Obtener el ID del botón
    const idBoton = event.target.id;

    // Obtener el ID del producto desde el ID del botón
    const idProducto = idBoton.substring(idBoton.indexOf("-") + 1);

    // Buscar el producto correspondiente en el array "productos"
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    const producto = productos.find((p) => p.id === idProducto);

    if (producto) {
      // Crear el nuevo array "carrito" si no existe, o agregar el producto al final del mismo
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito.push(producto);

      // Guardar el nuevo array "carrito" en el LocalStorage
      localStorage.setItem("carrito", JSON.stringify(carrito));

      // Mostrar mensaje de confirmación
      alert("El producto ha sido agregado al carrito.");
    }
  });
});

botonesAgregar.forEach((botonAgregar) => {
  botonAgregar.addEventListener("click", (event) => {
    // Obtener el ID del botón
    const idBoton = event.target.id;

    // Obtener el ID del producto desde el ID del botón
    const idProducto = idBoton.substring(idBoton.indexOf("-") + 1);

    // Buscar el producto correspondiente en el array "productos"
    const productosIngreso =
      JSON.parse(localStorage.getItem("productosIngreso")) || [];
    const producto = productosIngreso.find((p) => p.id === idProducto);

    if (producto) {
      // Crear el nuevo array "carrito" si no existe, o agregar el producto al final del mismo
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito.push(producto);

      // Guardar el nuevo array "carrito" en el LocalStorage
      localStorage.setItem("carrito", JSON.stringify(carrito));

      // Mostrar mensaje de confirmación
      alert("El producto ha sido agregado al carrito.");
    }
  });
});

// Retrieve items from local storage
const items = JSON.parse(localStorage.getItem("carrito")) || [];

// Get the table body element
const tableBody = document.querySelector("#cartTable, tbody");

// Create a row for each item and append it to the table body
// Create a row for each item and append it to the table body
items.forEach((item) => {
  const row = document.createElement("tr");

  // Create columns for each item detail
  const idColumn = document.createElement("td");
  idColumn.textContent = item.id;

  const nameColumn = document.createElement("td");
  nameColumn.textContent = item.titulo;

  const priceColumn = document.createElement("td");
  priceColumn.textContent = item.precio;

  const subtotalColumn = item.precio;

  const quantityColumn = document.createElement("td");
  quantityColumn.textContent = 1;

  subtotalColumn.textContent = item.price;

  // Create delete button column
  const deleteBtnColumn = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Eliminar";
  deleteBtn.classList.add("btn", "btn-danger");
  deleteBtn.addEventListener("click", () => {
    if (confirm("¿Estás seguro de que quieres eliminar este producto?")) {
      // Find the index of the item in the array
      const index = items.indexOf(item);

      // Remove the item from the items array
      if (index > -1) {
        items.splice(index, 1);
      }

      // Update the local storage
      localStorage.setItem("carrito", JSON.stringify(items));

      // Remove the row from the table
      row.remove();
      window.location.href = "./carrito.html";
    }
  });

  deleteBtnColumn.appendChild(deleteBtn);

  // Append the columns to the row
  row.appendChild(idColumn);
  row.appendChild(nameColumn);
  row.appendChild(priceColumn);
  row.appendChild(quantityColumn);
  row.appendChild(deleteBtnColumn);

  // Append the row to the table body
  tableBody.appendChild(row);
});

const cart = JSON.parse(localStorage.getItem("carrito"));
let total = 0;

cart.forEach((item) => {
  total += parseInt(item.precio);
});

// Actualiza el contenido del elemento HTML con el total del carrito
document.getElementById("itemTotal").textContent = `Total $${total}`;

// botonEliminar.addEventListener("click", eliminarProducto());

// function eliminarProducto(id) {
// 	const productosFiltrados = carrito.filter((item) => item.id !== id);
// 	const json = JSON.stringify(productosFiltrados);
// 	localStorage.setItem("carrito", json);
// 	carrito = productosFiltrados;
