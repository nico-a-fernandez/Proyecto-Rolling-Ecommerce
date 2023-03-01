const form = document.getElementById("formProductos");
const inputTitle = document.getElementById("inputTitle");
const inputPrice = document.getElementById("inputPrice");
const inputImg = document.getElementById("inputImg");
const tarjetaProducto = document.getElementById("cardProducto");
const botonEliminar = document.getElementById("buttonEliminar");

const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));
const localData = JSON.parse(localStorage.getItem("productos"));
let productos = localData || [];

if (!userAdmin) {
  window.location.href = "login.html";
}

function generarID() {
  return "_" + Math.random().toString(36).substring(2, 9);
}

form.onsubmit = (event) => {
  event.preventDefault();
  const producto = {
    id: generarID(),
    titulo: inputTitle.value,
    precio: inputPrice.value,
    imagen: inputImg.value,
  };
  productos.push(producto);
  const json = JSON.stringify(productos);
  localStorage.setItem("productos", json);
  form.reset();
  mostrarProductos();
};

function mostrarProductos() {
  const productosMap = productos.map(
    (producto) =>
      `
        <div class="card mx-4 my-3" style="width: 18rem;">
          <img src="${producto.imagen}" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${producto.titulo}</h5>
              <p class="card-text">${producto.precio}</p>
              <a href="#" class="btn btn-primary">Agregar al carrito</a>
              <button onclick="eliminarProducto('${producto.id}')" class="btn btn-danger">Eliminar</button>
          </div>
        </div>
        `
  );
  tarjetaProducto.innerHTML = productosMap;
}
mostrarProductos();

function eliminarProducto(id) {
  const productosFiltrados = productos.filter((producto) => producto.id !== id);
  const json = JSON.stringify(productosFiltrados);
  localStorage.setItem("productos", json);
  productos = productosFiltrados;
  mostrarProductos();
}
