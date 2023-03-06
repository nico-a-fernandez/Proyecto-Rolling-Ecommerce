const localData = JSON.parse(localStorage.getItem("productos"));
const userInvitado = JSON.parse(localStorage.getItem("user"));
const buttonLog = document.getElementById("login-register");

if (userInvitado) {
  buttonLog.innerHTML =
    '<a class="nav-link" href="../html/login.html"><button>Cerrar Sesión</button></a>';
}

const productos = localData || [
  {
    id: generarID(),
    imagen:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/TzOZXJOIMvac7dZfkXrg/imagen",
    titulo: "Mother MSI MAG Z790 TOMAHAWK WIFI DDR4 (12/13va Gen) LGA1700",
    descripcion:
      " °Chipset: Z790 Socket de procesador: LGA1700 </br> °Procesadores compatibles: Intel de 12va/13va Generación </br> °Zócalos de memoria: 4 </br> °Tipos de memoria compatibles: DDR4 hasta 5333Mhz (O.C.) </br> °Slots de expansión: 2x PCI-E x16 slot 1x PCI-E x1 slot </br> °Conexiones de almacenamiento: 4x M.2 slot 7x SATA °Conexiones traseras: DisplayPort 1.4 USB 3.2 Gen 1 5Gbps Type-AUSB 3.2 Gen 2 10Gbps Type-A 2.5G LAN Port HD Audio Connectors HDMI™ 2.1 Port Clear CMOS Button Flash BIOS Button	USB 3.2 Gen 2 10Gbps Type-C	USB 3.2 Gen 2x2 20Gbps Type-C	Wi-Fi / Bluetooth Antenna Optical S/PDIF OUT Conector RGB: Si LAN: Intel® 2.5Gbps LA Audio: Realtek® ALC4080 Codec Tamaño: ATX Garantía: Oficial MSI 36 Meses / latam.msi.com/page/service-location-new ",
    precio: "149999.00",
    stock: 10,
  },
  {
    id: generarID(),
    imagen:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/XbiXvEfNO0b5mYnm5xyp/imagen",
    titulo: "Mother Gigabyte Z690 AORUS ELITE AX WIFI DDR4 (12va Gen) LGA1700",
    descripcion: "",
    precio: "121999.00",
    stock: 90,
  },
  {
    id: generarID(),
    imagen:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/RfFTwGNJGXChQSdmvOdP/imagen",
    titulo: "Mother ASUS PRIME Z690-P WIFI D5 DDR5 (12va Gen) LGA1700",
    descripcion: "",
    precio: "116999.00",
    stock: 0,
  },
  {
    id: generarID(),
    imagen:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/wjk9CZN86qiiDE7sUMCw/imagen",
    titulo:
      "Micro Intel Core I9 12900 16 Núcleos / 24 Threads 5.1Ghz (12va Gen) LGA1700",
    descripcion: "",
    precio: "229999.00",
    stock: 150,
  },
  {
    id: generarID(),
    imagen:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/3sQipwKzWo4XIw9Xc0pv/imagen",
    titulo:
      "Micro Intel Core I7 12700K 12 Núcleos / 20 Threads 5.0Ghz (12va Gen) LGA1700",
    descripcion: "",
    precio: "174999.00",
    stock: 0,
  },
  {
    id: generarID(),
    imagen:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/U5cJ7GVQyO8rJv0mNGI6/imagen",
    titulo: "Cooler CPU Cooler Master MasterAir MA610P ARGB Edition Intel/AMD",
    descripcion: "",
    precio: "49999.00",
    stock: 95,
  },
  {
    id: generarID(),
    imagen:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/mjN7A4uYOOwJJZMkSND9/imagen",
    titulo:
      "Cooler CPU Cooler Master Hyper 212 LED Turbo ARGB Intel/AMD (2x12cm)",
    descripcion: "",
    precio: "31999.00",
    stock: 80,
  },
  {
    id: generarID(),
    imagen:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/vWi45VrvnIC9pBmZEjot/imagen",
    titulo: "Memoria RAM Kingston 16GB DDR4 3200Mhz Fury Beast RGB",
    descripcion: "",
    precio: "38999.00",
    stock: 250,
  },
  {
    id: generarID(),
    imagen:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/U5cJ7GVQyO8rJv0mNGI6/imagen",
    titulo: "Cooler CPU Cooler Master MasterAir MA610P ARGB Edition Intel/AMD",
    descripcion: "",
    precio: "49999.00",
    stock: 95,
  },
  {
    id: generarID(),
    imagen:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/hFVR44xIYvORqA7OJ4we/imagen",
    titulo: "Memoria RAM Patriot 8GB DDR4 3600Mhz Viper Steel RGB PVSR48G360C0",
    descripcion: "",
    precio: "24999.00",
    stock: 75,
  },
  {
    id: generarID(),
    imagen:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/Fe87ZZwp5qIP8ntxtFNG/imagen",
    titulo:
      "Placa de Video Gigabyte NVIDIA GeForce RTX 3080 GAMING OC 12Gb GDDR6 LHR",
    descripcion: "",
    precio: "329999.00",
    stock: 400,
  },
  {
    id: generarID(),
    imagen:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/i6kMZM3nx36nZoovzTaO/imagen",
    titulo: "Placa de Video ASUS NVIDIA GeForce RTX 3070 DUAL OC 8Gb GDDR6 LHR",
    descripcion: "",
    precio: "249999.00",
    stock: 95,
  },
  {
    id: generarID(),
    imagen:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/ZVnrW58ijS9GjBf7JGdw/imagen",
    titulo: "Cooler CPU Cooler Master MasterAir MA610P ARGB Edition Intel/AMD",
    descripcion: "",
    precio: "62999.00",
    stock: 130,
  },
  {
    id: generarID(),
    imagen:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/Q8kCAoORQ9f29nwXFWDy/imagen",
    titulo: "Fuente Gigabyte P850GM 850W 80 Plus Gold Modular S/Cable",
    descripcion: "",
    precio: "35999.00",
    stock: 110,
  },
  {
    id: generarID(),
    imagen:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/qxZCDOPvODAY80idBfAr/imagen",
    titulo: "Disco SSD M2 WD Black 1Tb SN770 5000MB/S NVME",
    descripcion: "",
    precio: "44999.00",
    stock: 130,
  },
  {
    id: generarID(),
    imagen:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/vSjGzHuGDHIcxWziCUWH/imagen",
    titulo: "Disco SSD M2 WD Blue 500Gb SN570 NVME",
    descripcion: "",
    precio: "19999.00",
    stock: 135,
  },
  {
    id: generarID(),
    imagen:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/Z3FhHdaj9Z6UiiyTh3c7/imagen",
    titulo: "Gabinete Corsair 7000D Airflow Black Full Tower 3x12cm",
    descripcion: "",
    precio: "99999.00",
    stock: 0,
  },
  {
    id: generarID(),
    imagen:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/F3nmu7DUHze63hCRvCZM/imagen",
    titulo: "Gabinete Corsair 5000D Airflow White Templado 2x12cm",
    descripcion: "",
    precio: "70999.00",
    stock: 2,
  },
];

// Generar id aleatorio
function generarID() {
  return "_" + Math.random().toString(36).substring(2, 9);
}

// PARA LOS PRODUCTOS PRINCIPALES

const cards = document.querySelector("#cards_productos");

cards.innerHTML = "";

productos.forEach((producto) => {
  const html = `
	
  <div id="card" class="card d-flex align-self-stretch">
  <img
    src="${producto.imagen}"
    class="card-img-top"
    alt="${producto.titulo}"
  />
  <div class="card-body">
    <h5 class="card-title">${producto.titulo}</h5>

    <div class="cards__precio-agregar">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Descripción
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                ${producto.titulo}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">${producto.descripcion}</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" class="btn btn-primary">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
      <span class="precio" id="precio">$${producto.precio}</span>
    </div>
    <div class="stock" id="stock">
      <p id="stockMessage">Hay stock</p>
    </div>
  </div>
</div>
`;

  cards.innerHTML += html;

  function guardarStockPrincipal() {
    localStorage.setItem("productos", JSON.stringify(productos));
  }
  guardarStockPrincipal();
});

// PARA PRODUCTOS DE "ULTIMO INGRESO"

const productosNuevos = [
  {
    id: generarID(),
    imagen:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/RfFTwGNJGXChQSdmvOdP/imagen",
    titulo: "Mother ASUS PRIME Z690-P WIFI D5 DDR5 (12va Gen) LGA1700",
    descripcion: "",
    precio: "116999.00",
    stock: 0,
  },
  {
    id: generarID(),
    imagen:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/hU9PMcx3b0RF6BdrxCSj/imagen",
    titulo:
      "Micro Intel Core I5 12600K 10 Núcleos / 16 Threads 4.9Ghz (12va Gen) LGA1700",
    descripcion: "",
    precio: "119999.00",
    stock: 25,
  },
  {
    id: generarID(),
    imagen:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/aEpcJ4ArsKsNI0yr7VIj/imagen",
    titulo: "Cooler CPU Cooler Master Hyper H411R White LED AMD/Intel",
    descripcion: "",
    precio: "15999.00",
    stock: 300,
  },
  {
    id: generarID(),
    imagen:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/oSUqVhoCIOHuDzvTBIxb/imagen",
    titulo: "Memoria RAM Kingston 4GB DDR4 2666Mhz Value",
    descripcion: "",
    precio: "999.00",
    stock: 200,
  },
  {
    id: generarID(),
    imagen:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/xJ43SJhGzbXsBkjPC5Bv/imagen",
    titulo:
      "Placa de Video Gigabyte NVIDIA GeForce RTX 3060 TI GAMING OC 8Gb GDDR6 LHR",
    descripcion: "",
    precio: "238999.00",
    stock: 100,
  },
  {
    id: generarID(),
    imagen:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/vRUy9kiRVKJPxDHsWpTT/imagen",
    titulo:
      "Fuente Cooler Master MWE V2 750W 80 Plus Gold Full Modular S/Cable",
    descripcion: "",
    precio: "32999.00",
    stock: 102,
  },
  {
    id: generarID(),
    imagen:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/EpWoKuTW8mPgbyxjr2ZA/imagen",
    titulo: "Disco SSD M2 Kingston 250Gb SNVS NV1 NVME",
    descripcion: "",
    precio: "10999.00",
    stock: 115,
  },
  {
    id: generarID(),
    imagen:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/eBcr5BG5tKqZzVtTAOha/imagen",
    titulo: "Gabinete AZZA Iris 330 Vidrio Templado 2x12cm ARGB",
    descripcion: "",
    precio: "20999.00",
    stock: 130,
  },
];

const nuevosIngresos = document.querySelector("#cards_ingresos");

nuevosIngresos.innerHTML = "";

productosNuevos.forEach((productoNuevo) => {
  const nuevos = `
	
	<a href="./pagina-detalle" target="blank">
        <div class="d-flex align-self-stretch">
          <div class="card">
            <img
              src="${productoNuevo.imagen} "
              class="card-img-top"
              alt="${productoNuevo.titulo} "
            />
            <div class="card-body">
              <h5 class="card-title">${productoNuevo.titulo}</h5>
              <p class="card-text">${productoNuevo.descripcion}</p>
              <div class="cards__precio-agregar">
                <a href="#" class="btn btn-primary">Agregar</a>
                <span class="precio" id="precio">$${productoNuevo.precio}</span>
              </div>
              <div class="stock" id="stock">
                <p>Hay Stock</p>
              </div>
            </div>
          </div>
        </div>
      </a>
				`;
  nuevosIngresos.innerHTML += nuevos;

  function guardarStockNuevos() {
    localStorage.setItem("productosIngreso", JSON.stringify(productosNuevos));
  }
  guardarStockNuevos();
});
