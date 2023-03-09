// Traigo los elementos del html
const form = document.getElementById("formProductos");
const inputTitle = document.getElementById("inputTitle");
const inputPrice = document.getElementById("inputPrice");
const inputStock = document.getElementById("inputStock");
const inputImg = document.getElementById("inputImg");
const tarjetaProducto = document.getElementById("cardProducto");
const tarjetaProducto2 = document.getElementById("cardProducto2");
const botonEliminar = document.getElementById("buttonEliminar");

// Traigo los elementos guardados en el local storage
const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));
const userInvitado = JSON.parse(localStorage.getItem("user"));
const localData = JSON.parse(localStorage.getItem("productos"));
const localData2 = JSON.parse(localStorage.getItem("productosIngreso"));
let productos = localData || [];
let productos2 = localData2 || [];

// Funcion para verificar si esta logueado como admin (verifica el localstorage)
if (!userAdmin) {
  window.location.href = "../html/login.html";
}

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
  alert("Se agrego el producto");
  productos2.push(producto);
  const json = JSON.stringify(productos2);
  localStorage.setItem("productosIngreso", json);
  form.reset();
  mostrarProductos2();
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
              <p id="price" class="card-text">$ ${producto.precio}</p>
              <div class="card-footer text-center text-decoration-none">Stock: ${producto.stock}</div>
              
              <button onclick="eliminarProducto('${producto.id}')" class="btn btn-danger">Eliminar</button>
              
              <button onclick="editarProducto('${producto.id}')" class="btn btn-primary">Editar</button>
          </div>
        </div>
        `
  );
  tarjetaProducto.innerHTML = productosMap;
}

function mostrarProductos2() {
  const productosMap = productos2.map(
    (producto) =>
      `
        <div class="card mx-4 my-3" style="width: 18rem;">
          <img src="${producto.imagen}" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${producto.titulo}</h5>
              <p id="price" class="card-text">$ ${producto.precio}</p>
              <div class="card-footer text-center text-decoration-none">Stock: ${producto.stock}</div>
              
              <button onclick="eliminarProducto2('${producto.id}')" class="btn btn-danger">Eliminar</button>
              
              <button onclick="editarProducto2('${producto.id}')" class="btn btn-primary">Editar</button>
          </div>
        </div>
        `
  );
  tarjetaProducto2.innerHTML = productosMap;
}

// Editar el producto
function editarProducto(id) {
  const modal = document.getElementById("editarProductoModal");
  const form = document.getElementById("editarProductoForm");
  const producto = productos.find((producto) => producto.id === id);
  const tituloInput = form.querySelector("#titulo");
  const precioInput = form.querySelector("#precio");
  const stockInput = form.querySelector("#stock");

  tituloInput.value = producto.titulo;
  precioInput.value = producto.precio;
  stockInput.value = producto.stock;

  form.onsubmit = function (event) {
    event.preventDefault();

    const precioValido = /^\d+(\.\d{1,2})?$/.test(precioInput.value);
    const stockValido = /^\d+$/.test(stockInput.value);

    if (!precioValido) {
      alert("Ingrese un valor numérico válido para el precio.");
      return;
    }

    if (!stockValido) {
      alert("Ingrese un valor numérico válido para el stock.");
      return;
    }

    producto.titulo = tituloInput.value;
    producto.precio = parseFloat(precioInput.value);
    producto.stock = parseInt(stockInput.value);

    // Actualizar el array de productos en el Local Storage
    localStorage.setItem("productos", JSON.stringify(productos));

    mostrarProductos();
    modal.style.display = "none";
  };

  modal.style.display = "block";
  const closeButton = modal.querySelector(".modal-close-button");
  closeButton.onclick = function () {
    modal.style.display = "none";
  };
}

const modal = document.getElementById("editarProductoModal");
const closeButton = modal.querySelector(".modal-close-button");
modal.onclick = function (event) {
  if (event.target == modal || event.target == closeButton) {
    modal.style.display = "none";
  }
};

function editarProducto2(id) {
  const modal = document.getElementById("editarProductoModal");
  const form = document.getElementById("editarProductoForm");
  const producto = productos2.find((producto) => producto.id === id);
  const tituloInput = form.querySelector("#titulo");
  const precioInput = form.querySelector("#precio");
  const stockInput = form.querySelector("#stock");

  tituloInput.value = producto.titulo;
  precioInput.value = producto.precio;
  stockInput.value = producto.stock;

  form.onsubmit = function (event) {
    event.preventDefault();

    const precioValido = /^\d+(\.\d{1,2})?$/.test(precioInput.value);
    const stockValido = /^\d+$/.test(stockInput.value);

    if (!precioValido) {
      alert("Ingrese un valor numérico válido para el precio.");
      return;
    }

    if (!stockValido) {
      alert("Ingrese un valor numérico válido para el stock.");
      return;
    }

    producto.titulo = tituloInput.value;
    producto.precio = parseFloat(precioInput.value);
    producto.stock = parseInt(stockInput.value);

    // Actualizar el array de productos en el Local Storage
    localStorage.setItem("productosIngreso", JSON.stringify(productos2));

    mostrarProductos2();
    modal.style.display = "none";
  };

  modal.style.display = "block";
  const closeButton = modal.querySelector(".modal-close-button");
  closeButton.onclick = function () {
    modal.style.display = "none";
  };
}

mostrarProductos();
mostrarProductos2();

// Generar la card del usuario
const cardUsuario = `
  <div class="card">
    <div class="card-header">
      <h3>${userInvitado.name} ${userInvitado.lastname}</h3>
    </div>
    <div class="card-body">
      <p><strong>Nombre de usuario:</strong> ${userInvitado.username}</p>
      <p><strong>Correo electrónico:</strong> ${userInvitado.email}</p>
      <p><strong>Pass:</strong> ${userInvitado.password}</p>
    </div>
    <button id="buttonTrash" onclick="eliminarUser()" class="btn btn-danger">Eliminar</button>
  </div>
`;

// Insertar la tarjeta del usuario en la página web
document.getElementById("cardUser").innerHTML = cardUsuario;

// Eliminar user

const buttonDelete = document.getElementById("buttonTrash");
buttonDelete.addEventListener("click", function eliminarUser() {
  localStorage.removeItem("user");
});

function eliminarProducto(id) {
  if (confirm("¿Está seguro de eliminar este producto?")) {
    const productosFiltrados = productos.filter(
      (producto) => producto.id !== id
    );
    const json = JSON.stringify(productosFiltrados);
    localStorage.setItem("productosIngreso", json);
    productos = productosFiltrados;
    mostrarProductos();
  }
}

function eliminarProducto2(id) {
  if (confirm("¿Está seguro de eliminar este producto?")) {
    const productosFiltrados = productos2.filter(
      (producto) => producto.id !== id
    );
    const json = JSON.stringify(productosFiltrados);
    localStorage.setItem("productosIngreso", json);
    productos2 = productosFiltrados;
    mostrarProductos2();
  }
}

/*
// Editar precio
function editPrice(id) {
  let productoId = productos.findIndex((producto) => producto.id == id);
  let newPrice;
  do {
    let priceInput = prompt("Ingrese el nuevo precio");
    newPrice = parseInt(priceInput);
    if (isNaN(newPrice)) {
      alert("Ingrese un valor numérico válido");
    }
  } while (isNaN(newPrice));
  productos[productoId].precio = newPrice.toFixed(2);

  const json = JSON.stringify(productos);
  localStorage.setItem("productos", json);

  mostrarProductos();
}

function editPrice2(id) {
  let productoId = productos2.findIndex((producto) => producto.id == id);
  let newPrice;
  do {
    let priceInput = prompt("Ingrese el nuevo precio");
    newPrice = parseInt(priceInput);
    if (isNaN(newPrice)) {
      alert("Ingrese un valor numérico válido");
    }
  } while (isNaN(newPrice));
  productos2[productoId].precio = newPrice.toFixed(2);
  const json = JSON.stringify(productos2);
  localStorage.setItem("productosIngreso", json);

  mostrarProductos2();
}

// Editar Stock
function editStock(id) {
  let productoId = productos.findIndex((producto) => producto.id == id);
  let newStock;
  do {
    let stockInput = prompt("Ingrese el nuevo stock");
    newStock = parseInt(stockInput);
    if (isNaN(newStock)) {
      alert("Ingrese un valor numérico válido");
    }
  } while (isNaN(newStock));
  productos[productoId].stock = newStock;
  const json = JSON.stringify(productos);
  localStorage.setItem("productos", json);

  mostrarProductos();
}

function editStock2(id) {
  let productoId = productos2.findIndex((producto) => producto.id == id);
  let newStock;
  do {
    let stockInput = prompt("Ingrese el nuevo stock");
    newStock = parseInt(stockInput);
    if (isNaN(newStock)) {
      alert("Ingrese un valor numérico válido");
    }
  } while (isNaN(newStock));
  productos2[productoId].stock = newStock;
  const json = JSON.stringify(productos2);
  localStorage.setItem("productosIngreso", json);
  mostrarProductos2();
}
*/
