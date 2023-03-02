// Traigo los elementos del html
const form = document.getElementById("formProductos");
const inputTitle = document.getElementById("inputTitle");
const inputPrice = document.getElementById("inputPrice");
const inputStock = document.getElementById("inputStock");
const inputImg = document.getElementById("inputImg");
const tarjetaProducto = document.getElementById("cardProducto");
const botonEliminar = document.getElementById("buttonEliminar");

// Traigo los elementos guardados en el local storage
const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));
const localData = JSON.parse(localStorage.getItem("productos"));
const productos = localData || [];

// if (!userAdmin) {
//   window.location.href = "login.html";
// }

// Boton del form para agregar productos
form.onsubmit = (event) => {
  event.preventDefault();
  const producto = {
    id: generarID(),
    titulo: inputTitle.value,
    precio: inputPrice.value,
    stock: inputStock.value,
    imagen: inputImg.value,
  };
  productos.push(producto);
  const json = JSON.stringify(productos);
  localStorage.setItem("productos", json);
  form.reset();
  mostrarProductos();
};

// Funciones

// Generar id aleatorio
function generarID() {
  return "_" + Math.random().toString(36).substring(2, 9);
}

// Generar la card del producto nuevo
function mostrarProductos() {
  const productosMap = productos.map(
    (producto) =>
      `
        <div class="card mx-4 my-3" style="width: 18rem;">
          <img src="${producto.imagen}" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${producto.titulo}</h5>
              <p id="price" class="card-text">$  ${producto.precio}</p>
              <div class="card-footer text-center text-decoration-none">Stock: ${producto.stock}</div>
              <a href="../html/carrito.html" class="btn btn-primary">Agregar al carrito</a>
              <button onclick="eliminarProducto('${producto.id}')" class="btn btn-danger">Eliminar</button>
              <button onclick="editPrice('${producto.id}')" class="btn btn-warning">Editar precio</button>
          </div>
        </div>
        `
  );
  tarjetaProducto.innerHTML = productosMap;
}
mostrarProductos();

// Eliminar producto
function eliminarProducto(id) {
  const productosFiltrados = productos.filter((producto) => producto.id !== id);
  const json = JSON.stringify(productosFiltrados);
  localStorage.setItem("productos", json);
  productos = productosFiltrados;
  mostrarProductos();
}

// Editar precio
function editPrice(id) {
  let productoId = productos.findIndex((producto) => producto.id == id);
  productos[productoId].precio = prompt("Ingrese el nuevo precio");
  const json = JSON.stringify(productos);
  localStorage.setItem("productos", json);

  mostrarProductos();
}
