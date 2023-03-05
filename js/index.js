const tarjetaProducto = document.getElementById("cardProducto");
let localData = JSON.parse(localStorage.getItem("productos"));
const productos = localData || [];

localData = productos.map((producto) => {
  // Aquí debes realizar alguna lógica para determinar si hay stock o no
  if (producto.stock > 0) {
    producto.disponible = true;
  } else {
    producto.disponible = false;
  }
  return producto;
});

localStorage.setItem("productos", JSON.stringify(productos));

function mostrarProductos() {
  const productosMap = productos.map(
    (producto) =>
      `
          <div id="cardProducto" class="card mx-4 my-3" style="width: 18rem;">
            <img src="${producto.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.titulo}</h5>
                <p id="price" class="card-text">$  ${producto.precio}</p>
                <div class="card-footer text-center text-decoration-none">Stock: ${producto.stock}</div>
                <a href="../html/carrito.html" class="btn btn-primary">Agregar al carrito</a>
                <a href="../html/deseados.html" class="btn btn-danger">Agregar favoritos</a>
                <p id="textoStock">-</p>
            </div>
          </div>
          `
  );
  tarjetaProducto.innerHTML = productosMap;
}

mostrarProductos();
