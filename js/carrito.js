const Clickbutton = document.querySelectorAll(".botoncarrito");
const tbody = document.querySelector(".tbody");
let carrito = [];

Clickbutton.forEach((btn) => {
  btn.addEventListener("click", addToCarritoItem());
});

function addToCarritoItem(e) {
  const botoncarrito = e.target;
  const item = botoncarrito.closest(
    ".modal-#producto.id",
    ".card-#productoNuevo.id"
  );
  const itemTitle = item.querySelector(".card-title").textContent;
  const itemPrice = item.queryselector(".precio").textContent;
  const itemImg = item.querySelector(".card-img-top").src;

  const newCarrito = {
    title: itemTitle,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1,
  };

  addItemCarrito(newItem);
}

function addItemCarrito(newItem) {
  const inputElemento = tbody.getElementsByClassName("input__elemento");
  for (let i = 0; i < carrito.length; i++) {
    if ((carrito[i].title, trim() === newItem.title.trim())) {
      carrito[i].cantidad++;
      const inputValue = inputElemento[i];
      inputValue.value++;
      CarritoTotal();
      return null;
    }
  }

  carrito.push(newItem);
  renderCarrito();
}

function renderCarrito() {
  tbody.innetHTML = "";
  carrito.map((item) => {
    const tr = document.createElement("tr");
    tr.classList.add("itemCarrito");
    const Content = `
        <tr>
                    <th scope="row">1</th>
                    <td class="table__productos">
                    <img src=$(item.img)
                    <h5 class="title">$(item.title)</h5>
                    </td>
                    <td class="table__price"><p>$ (item.precio)</p></td>
                    <td class="table__cantidad d-flex justify-content-center">
                        <input type="number" min="1" value=$(item.cantidad) class="input__elemento" style="width: 45px">
                        <button class="delete btn btn-danger">x</button>
                    </td>
                  </tr>
        `;

    tr.innerHTML = Content;
    tbody.append(tr);

    tr.querySelector(".delete").addEventListener("click", removeItemCarrito);
    tr.querySelector(".input__elemento").addEventListener(
      "change",
      sumaCantidad
    );
  });
}

function CarritoTotal() {
  let Total = 0;
  const itemCardTotal = document.querySelector(".itemCardToal");
  carrito.forEach((item) => {
    const precio = Number(item.precio.replace("$", ""));
    Total = Total + precio * item.cantidad;
  });

  itemCardTotal.innerHTML = `Total $$(Total)`;
  addLocalStorage();
}

function removeItemCarrito(e) {
  const buttonDelete = e.target;
  const tr = buttonDelete.closest(".ItemCarrito");
  const title = tr.querySelector(".title").textContent;
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].title.trim() === title.trim()) {
      carrito.splice(i, 1);
    }
  }
  tr.remove();
  CarritoTotal();
}

function sumaCantidad(e) {
  const sumaInput = e.target;
  const tr = sumaInput.closest(".ItemCarrito");
  const title = tr.querySelector(".title").textContent;
  carrito.forEach((item) => {
    if (item.title.trim() === title) {
      sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
      item.cantidad = sumaInput.value;
      CarritoTotal();
    }
  });
}

function addLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

window.onload = function () {
  const storage = JSON.parse(localStorage.getItem("carrito"));
  if (storage) {
    carrito = storage;
    renderCarrito();
  }
};
