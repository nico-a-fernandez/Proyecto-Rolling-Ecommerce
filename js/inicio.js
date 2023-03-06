const localData = JSON.parse(localStorage.getItem("productos"));
const localData2 = JSON.parse(localStorage.getItem("productosIngreso"));
const userInvitado = JSON.parse(localStorage.getItem("user"));
const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));
const buttonLog = document.getElementById("login-register");
const buttonAdmin = document.getElementById("pag-admin");

if (userInvitado || userAdmin) {
	buttonLog.innerHTML =
		'<a class="nav-link" href="../html/login.html"><button>Cerrar Sesión</button></a>';
}

if (userAdmin) {
	buttonAdmin.innerHTML =
		'<a class="nav-link" href="../html/admin.html"><button>Pagina de Admin</button></a>';
}

buttonLog.addEventListener("click", function () {
	localStorage.removeItem("user");
});

const productos = localData || [
	{
		id: generarID(),
		imagen:
			"https://s3-sa-east-1.amazonaws.com/saasargentina/TzOZXJOIMvac7dZfkXrg/imagen",
		titulo: "Mother MSI MAG Z790 TOMAHAWK WIFI DDR4 (12/13va Gen) LGA1700",
		descripcion:
			"Chipset: Z790 Socket de procesador: LGA1700 </br>Procesadores compatibles: Intel de 12va/13va Generación </br>Zócalos de memoria: 4 </br>Tipos de memoria compatibles: DDR4 hasta 5333Mhz (O.C.) </br>Slots de expansión: 2x PCI-E x16 slot 1x PCI-E x1 slot </br>Conexiones de almacenamiento: 4x M.2 slot 7x SATA ",
		precio: "149999.00",
		stock: 10,
	},
	{
		id: generarID(),
		imagen:
			"https://s3-sa-east-1.amazonaws.com/saasargentina/XbiXvEfNO0b5mYnm5xyp/imagen",
		titulo: "Mother Gigabyte Z690 AORUS ELITE AX WIFI DDR4 (12va Gen) LGA1700",
		descripcion:
			"Chipset: Z690 </br> Socket de procesador: LGA1700 </br> Procesadores compatibles: 12va Generación de Intel </br> Zócalos de memoria: 4 </br> Tipos de memoria compatibles: DDR4 hasta 5333Mhz </br> Slots de expansión: 2x M.2, 6x SATA </br> Conexiones de almacenamiento: 3x PCI Express x16 </br> Conexiones traseras: 1 x USB Type-C®, 9x USB, 1x HDMI, 1x DisplayPort, 1x RJ-45, 1x Optical S/PDIF, 2x, Audio Jacks </br> Conector RGB: Si </br>	LAN: Realtek® 2.5GbE LAN chip </br> Audio: Realtek® ALC1220-VB </br>Tamaño: ATX </br>Garantía: Oficial Gigabyte 36 Meses / www.garantiagigabyte.com.ar",
		precio: "121999.00",
		stock: 90,
	},

	{
		id: generarID(),
		imagen:
			"https://s3-sa-east-1.amazonaws.com/saasargentina/wjk9CZN86qiiDE7sUMCw/imagen",
		titulo:
			"Micro Intel Core I9 12900 16 Núcleos / 24 Threads 5.1Ghz (12va Gen) LGA1700",
		descripcion:
			"Modelo: I9 12900</br>Frecuencia de reloj: 5.1Ghz</br>GPU Integrado: Si</br>Frecuencia de gráficos: 300 Mhz</br>Caché: 30 MB Intel® Smart Cache</br>Núcleos: 16</br>Hilos: 24</br>Socket: LGA1700</br>TDP: 125w</br>Cooler incluido: Si</br>Garantía: 36 Meses",
		precio: "229999.00",
		stock: 150,
	},
	{
		id: generarID(),
		imagen:
			"https://s3-sa-east-1.amazonaws.com/saasargentina/3sQipwKzWo4XIw9Xc0pv/imagen",
		titulo:
			"Micro Intel Core I7 12700K 12 Núcleos / 20 Threads 5.0Ghz (12va Gen) LGA1700",
		descripcion:
			"Modelo: 12700K</br>Frecuencia de reloj: 5.00 GHz</br>GPU Integrado: No </br>Frecuencia de gráficos: -</br>Núcleos gráficos: -</br>Caché: 12 MB</br>Núcleos: 12</br>Hilos: 20</br>Socket: LGA1700</br>TDP: 125 W</br>Cooler incluido: No</br>Garantía: 36 Meses",
		precio: "174999.00",
		stock: 0,
	},
	{
		id: generarID(),
		imagen:
			"https://s3-sa-east-1.amazonaws.com/saasargentina/U5cJ7GVQyO8rJv0mNGI6/imagen",
		titulo: "Cooler CPU Cooler Master MasterAir MA610P ARGB Edition Intel/AMD",
		descripcion:
			"Tipo de iluminación: ARGB</br>Socket: LGA2066, LGA2011-v3, LGA2011, LGA1200, LGA1151, LGA1150, LGA1155, LGA1156, LGA1366, LGA775, AM4, AM3+, AM2+, AM2, FM2+, FM2, FM1</br>Heat Pipe: 6</br>Dimensiones: 130.9 x 112.8 x 166.5 mm</br>Velocidad: 600-1800 RPM</br>Conector: 4-Pin (PWM)</br>Dimensiones del ventilador: 120 x 120 x 25 mm </br>Voltaje: 12VDC</br>Consumo: 4.44W</br>Presión de aire: 1.65 mmH2O</br>Máximo flujo de aire: 53.38 CFM</br>Ruido: 35 dBA </br>Garantía: 12 Meses",
		precio: "49999.00",
		stock: 95,
	},
	{
		id: generarID(),
		imagen:
			"https://s3-sa-east-1.amazonaws.com/saasargentina/mjN7A4uYOOwJJZMkSND9/imagen",
		titulo:
			"Cooler CPU Cooler Master Hyper 212 LED Turbo ARGB Intel/AMD (2x12cm)",
		descripcion:
			"Socket: LGA2066, LGA2011-V3, LGA2011, LGA1200, LGA1151, LGA1150, LGA1155, LGA1156, LGA1366, AM4, AM3+, AM3, AM2+, AM2, FM2+, FM2, FM1</br>Heat Pipe: 4</br>Dimensiones: 120x110x159mm</br>Velocidad: 650-1800 RPM (PWM) ± 5%</br>Conector: 4-Pin (PWM)</br>Dimensiones del ventilador: 120x120x25mm</br>Voltaje: 12VDC</br>Consumo: 3,36 W</br>Máximo flujo de aire: 62 CFM (MÁX.)</br>Ruido: 8 - 27 DBA</br>Garantía: 12 Meses</br>(NO COMPATIBLE CON 12VA GENERACIÓN DE INTEL)",
		precio: "31999.00",
		stock: 80,
	},
	{
		id: generarID(),
		imagen:
			"https://s3-sa-east-1.amazonaws.com/saasargentina/vWi45VrvnIC9pBmZEjot/imagen",
		titulo: "Memoria RAM Kingston 16GB DDR4 3200Mhz Fury Beast RGB",
		descripcion:
			"Tipo de Memoria: DDR4</br>Tamaño: 16GB</br>Latencia: 16-18-18</br>Voltaje: 1,35</br>Velocidad: 3200Mhz</br>RGB: Si</br>Performance: XMP 2.0</br>Compatibilidad: XMP de Intel® - AMD Ryzen™",
		precio: "38999.00",
		stock: 250,
	},

	{
		id: generarID(),
		imagen:
			"https://s3-sa-east-1.amazonaws.com/saasargentina/hFVR44xIYvORqA7OJ4we/imagen",
		titulo: "Memoria RAM Patriot 8GB DDR4 3600Mhz Viper Steel RGB PVSR48G360C0",
		descripcion:
			"Capacidad: 8GB</br>Velocidad: 3600Mhz</br>Tipo: UDIMM</br>Latencias 19-19-19-43</br>Voltajes:  1.35V",
		precio: "24999.00",
		stock: 75,
	},
	{
		id: generarID(),
		imagen:
			"https://s3-sa-east-1.amazonaws.com/saasargentina/Fe87ZZwp5qIP8ntxtFNG/imagen",
		titulo:
			"Placa de Video Gigabyte NVIDIA GeForce RTX 3080 GAMING OC 12Gb GDDR6 LHR",
		descripcion:
			"Chipset: GeForce GeForce® RTX 3080</br>Core Clock: 1800 MHz</br>CUDA Cores: 8704</br>Tamaño y tipo de memoria: 12Gb GDDR6</br>Interfaz de memoria: 320 bit</br>Velocidad de memoria: 760 GB/s</br>Microsoft DirectX: 12</br>OpenGL: 4</br>Interfaz: 3x Display Port, 2x HDMI</br>Tamaño de la placa: 320 W=129 H=55 mm</br>Conectores de fuente: 8-pin x2</br>Fuente recomendada: 750w</br>Garantía: 36 Meses (Primeros 6 en Gezatek y luego Service Oficial Gigabyte -> www.garantiagigabyte.com.ar)</br>Modelo: GV-N3080GAMING-OC-10GD",
		precio: "329999.00",
		stock: 400,
	},
	{
		id: generarID(),
		imagen:
			"https://s3-sa-east-1.amazonaws.com/saasargentina/i6kMZM3nx36nZoovzTaO/imagen",
		titulo: "Placa de Video ASUS NVIDIA GeForce RTX 3070 DUAL OC 8Gb GDDR6 LHR",
		descripcion:
			"Chipset: NVIDIA® GeForce RTX™ 3070</br>Core Clock: 1770 MHz</br>CUDA Cores: 5888</br>Tamaño y tipo de memoria: 8GB GDDR6</br>Interfaz de memoria: 256-bit</br>Velocidad de memoria: 14 Gbps</br>Microsoft DirectX: 12</br>OpenGL: 4.6</br>Interfaz: 2x HDMI, 3x DisplayPort</br>Tamaño de la placa: 26.7 x 13.5 x5.2</br>Conectores de fuente: 2 x 8-pin</br>Fuente recomendada: 750W</br>Garantía: 12 Meses</br>Modelo: DUAL-RTX3070-O8G-V2",
		precio: "249999.00",
		stock: 95,
	},
	{
		id: generarID(),
		imagen:
			"https://s3-sa-east-1.amazonaws.com/saasargentina/ZVnrW58ijS9GjBf7JGdw/imagen",
		titulo: "Fuente Cooler Master MWE 1250W 80 Plus Gold Full Modular S/Cable",
		descripcion:
			"Versión ATX: ATX 12V V2.52</br>PFC: PFC activo</br>Voltaje de entrada: 100-240V</br>Corriente de entrada: 15-7A</br>Frecuencia de entrada: 47-63 Hz</br></br>Ventilador</br>Tamaño del ventilador: 140 mm</br>Cojinete del ventilador: FDB</br>Velocidad del ventilador: 2200 RPM</br></br>Eficacia: ≥90% @ Carga típica</br>Certificación: 80 Plus Gold</br></br>Conectores:</br>Conectores ATX de 24 pines: 1</br>Conectores EPS de 4+4 pines: 1</br>Conector EPS de 8 pines: 1</br>Conectores SATA: 12</br>Conectores periféricos de 4 pines: 4</br>Conectores PCI-e de 6+2 pines: 8</br></br>Garantía: 12 Meses",
		precio: "65999.00",
		stock: 110,
	},
	{
		id: generarID(),
		imagen:
			"https://s3-sa-east-1.amazonaws.com/saasargentina/Q8kCAoORQ9f29nwXFWDy/imagen",
		titulo: "Fuente Gigabyte P850GM 850W 80 Plus Gold Modular S/Cable",
		descripcion:
			"Potencia:850W</br>Certificación: 80 Gold Plus </br>Factor de forma PSU: ATX 12V v2.31 </br>Tamaño del ventilador: 120mm</br>Voltaje de entrada de CA: 100V - 240V</br>Modular: Si </br>Dimensiones: 150 x 140 x 86mm </br></br>Cables y conectores incluidos:</br>1x ATX/MB 20+4 Pin </br>2x CPU/EPS 4+4 Pin</br>4x PCI-e 6+2 Pin</br>8x SATA x 8</br>1x 4 Pin Peripheral x 3 + 4-Pin floppy</br>(NO INCLUYE CABLE POWER 220v)</br></br>Garantía: Oficial 36 Meses www.garantiagigabyte.com.ar",
		precio: "35999.00",
		stock: 110,
	},
	{
		id: generarID(),
		imagen:
			"https://s3-sa-east-1.amazonaws.com/saasargentina/qxZCDOPvODAY80idBfAr/imagen",
		titulo: "Disco SSD M2 WD Black 1Tb SN770 5000MB/S NVME",
		descripcion: "Garantía Oficial WD / 0800-444-0839 o support.wdc.com",
		precio: "46999.00",
		stock: 130,
	},
	{
		id: generarID(),
		imagen:
			"https://s3-sa-east-1.amazonaws.com/saasargentina/vSjGzHuGDHIcxWziCUWH/imagen",
		titulo: "Disco SSD M2 WD Blue 500Gb SN570 NVME",
		descripcion:
			"Capacidad: 500 GB</br>Factor de forma: M.2 2280</br>Interfaz: PCIe Gen3 x4 NVMe v1.4</br>Rendimiento de lectura secuencial: 3500MB/s</br>Rendimiento de escritura secuencial: 2200MB/s</br>	Garantía: Oficial WD / 0800-444-0839 o support.wdc.com",
		precio: "20999.00",
		stock: 135,
	},
	{
		id: generarID(),
		imagen:
			"https://s3-sa-east-1.amazonaws.com/saasargentina/Z3FhHdaj9Z6UiiyTh3c7/imagen",
		titulo: "Gabinete Corsair 7000D Airflow Black Full Tower 3x12cm",
		descripcion:
			"Tipo: Full Tower</br>Materiales: Acero, Vidrio templado, Plástico</br>Compatibilidad con radiadores: 120 mm, 140 mm, 240 mm, 280 mm, 360 mm, 420 mm, 480 mm</br>E/S frontal: (4x) USB 3.0, (1x) USB 3.1 Tipo C, (1x) Entrada/salida de audio</br>Longitud máxima de la GPU: 400mm</br>Longitud máxima de la fuente de alimentación: 250</br>Altura máxima del enfriador de la CPU: 170mm</br>Ranuras de expansión: 8 horizontales + 3 verticales</br>Bahías: (x6) 3,5 pulgadas (x4) 2,5 pulgadas</br>Dimensiones: 600mm x 248mm x 550mm</br>Fuente de alimentación: ATX</br>Garantía: 12 Meses",
		precio: "99999.00",
		stock: 0,
	},
	{
		id: generarID(),
		imagen:
			"https://s3-sa-east-1.amazonaws.com/saasargentina/F3nmu7DUHze63hCRvCZM/imagen",
		titulo: "Gabinete Corsair 5000D Airflow White Templado 2x12cm",
		descripcion:
			"Materiales: Acero, Vidrio templado, Plástico</br>Soporta Motherboards: MINI ITX, MICRO ATX, ATX</br>Puertos de Expansión: 7</br>Bahias: 2 unidades de disco duro de 3,5″ + 2 unidades SSD 2,5″</br>Puerto I/O Frontal:  (1x) USB 3.1 Tipo C, (2x) USB 3.0, (1x) </br>Entrada/salida de audio</br>Coolers Pre instalados: 2x12cm</br>Soporte Watercooling: Si </br>Compatibilidad con radiadores: 120 mm, 140 mm, 240 mm, 280 mm, 360 mm</br>Altura máxima CPU Cooler: 170mm</br>Largo máximo GPU: 400mm</br>Dimensiones: 520x245x520mm</br>Garantía: 12 Meses",
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
    <div id="card-${producto.id}" class="card d-flex align-self-stretch">
      <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}" />
      <div class="card-body">
        <h5 class="card-title">${producto.titulo}</h5>
        <div class="cards__precio-agregar">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-${producto.id}">
            Descripción
          </button>
          <div id="modal-${producto.id}" class="modal fade" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">${producto.titulo}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>${producto.descripcion}<br /><br />ID del producto: ${producto.id}.<br />${producto.stock} productos disponibles</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-warning" data-bs-dismiss="modal" id="btn-fav">Favorito</button>
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Agregar al carrito</button>
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

const productosNuevos = localData2 || [
	{
		id: generarID(),
		imagen:
			"https://s3-sa-east-1.amazonaws.com/saasargentina/RfFTwGNJGXChQSdmvOdP/imagen",
		titulo: "Mother ASUS PRIME Z690-P WIFI D5 DDR5 (12va Gen) LGA1700",
		descripcion:
			"Chipset: Z690 </br> Memoria:4 x DIMM, máx. 128 GB, DDR5 6000 (OC) / 5800 (OC) / 5600 (OC) / 5400 (OC) / 5200 (OC) / 5000 (OC)</br></br>Conexiones de video: </br> 1 x DisplayPort</br>1 x HDMI</br></br>Ranuras de expansión:</br>1 x ranura PCIe 5.0/4.0/3.0 x16</br>1 x ranura PCIe 4.0/3.0 x16 (soporta modo x4)</br>2 x ranuras PCIe 3.0 x16 (soporte modo x4)</br>1 x ranura PCIe 3.0 x1</br></br>Almacenamiento:</br>ranura M.2_1 (clave M), tipo 2242/2260/2280/22110</br>ranura M.2_2 (clave M), tipo 2242/2260/2280 (compatible con el modo PCIe 4.0 x4)</br>ranura M.2_3 (clave M), tipo 2242/2260/2280/22110 (compatible con los modos PCIe 4.0 x4 y SATA)</br>4 x puertos SATA 6Gb/s</br></br>Ethernet:</br>1 x Realtek 2.5Gb Ethernet </br>",
		precio: "116999.00",
		stock: 155,
	},
	{
		id: generarID(),
		imagen:
			"https://s3-sa-east-1.amazonaws.com/saasargentina/hU9PMcx3b0RF6BdrxCSj/imagen",
		titulo:
			"Micro Intel Core I5 12600K 10 Núcleos / 16 Threads 4.9Ghz (12va Gen) LGA1700",
		descripcion:
			"Modelo: i5-12600K</br>Frecuencia de reloj: 4.90 GHz</br>GPU Integrado: Intel® UHD Graphics 770</br>Frecuencia de gráficos: 300 MHz</br>Caché: 20 MB Intel® Smart Cache</br>Núcleos: 10</br>Hilos: 16</br>Socket: LGA1700</br>TDP: 125 W</br>Cooler incluido: No</br>Garantía: 36 Meses ",
		precio: "119999.00",
		stock: 25,
	},
	{
		id: generarID(),
		imagen:
			"https://s3-sa-east-1.amazonaws.com/saasargentina/aEpcJ4ArsKsNI0yr7VIj/imagen",
		titulo: "Cooler CPU Cooler Master Hyper H411R White LED AMD/Intel",
		descripcion:
			"Socket: LGA1200, LGA2066, LGA2011-v3, LGA2011, LGA1151, LGA1150, LGA1155, LGA1156, LGA1366, LGA775, AM4, AM3+, AM3, AM2+, AM2, FM2+, FM2, FM1</br>Heat Pipe: 4</br>Dimensiones: 102 x 83.4 x 136 mm </br>Velocidad: 600-2000 RPM (PWM) ± 10%</br>Conector: 4-Pin (PWM)</br>Dimensiones del ventilador: 92 x 92 x 25 mm</br>Voltaje: 2.4W</br>Consumo: 12VDC</br>Máximo flujo de aire: </br>Ruido: 8 - 27 DBA</br>Garantía: 12 Meses",
		precio: "15999.00",
		stock: 300,
	},
	{
		id: generarID(),
		imagen:
			"https://s3-sa-east-1.amazonaws.com/saasargentina/oSUqVhoCIOHuDzvTBIxb/imagen",
		titulo: "Memoria RAM Kingston 4GB DDR4 2666Mhz Value",
		descripcion: "Garantía 12 Meses",
		precio: "999.00",
		stock: 200,
	},
	{
		id: generarID(),
		imagen:
			"https://s3-sa-east-1.amazonaws.com/saasargentina/xJ43SJhGzbXsBkjPC5Bv/imagen",
		titulo:
			"Placa de Video Gigabyte NVIDIA GeForce RTX 3060 TI GAMING OC 8Gb GDDR6 LHR",
		descripcion:
			"Chipset: NVIDIA® GeForce RTX™ 3060 Ti</br>Core Clock: 1740 MHz</br>CUDA Cores: 4864</br>Tamaño y tipo de memoria: 8GB GDDR6</br>Interfaz de memoria: 256 bit</br>Velocidad de memoria: 448 GB/s</br>Microsoft DirectX: 12</br>OpenGL: 4.6 </br>Interfaz: 2x HDMI 2.1, 2x DP1</br>Tamaño de la placa: L=282 W=117 H=41 mm</br>Conectores de fuente: 1x 8-pin</br>Fuente recomendada: 600W</br>Modelo: GV-N306TGAMING-OC-8GD-rev-10",
		precio: "238999.00",
		stock: 100,
	},
	{
		id: generarID(),
		imagen:
			"https://s3-sa-east-1.amazonaws.com/saasargentina/vRUy9kiRVKJPxDHsWpTT/imagen",
		titulo:
			"Fuente Cooler Master MWE V2 750W 80 Plus Gold Full Modular S/Cable",
		descripcion:
			"Garantía 36 Meses</br>No cubre daños producidos por overclock, minería de criptomonedas o cualquier otro uso indebido.",
		precio: "32999.00",
		stock: 102,
	},
	{
		id: generarID(),
		imagen:
			"https://s3-sa-east-1.amazonaws.com/saasargentina/EpWoKuTW8mPgbyxjr2ZA/imagen",
		titulo: "Disco SSD M2 Kingston 250Gb SNVS NV1 NVME",
		descripcion: "Garantía 12 Meses",
		precio: "11499.00",
		stock: 115,
	},
	{
		id: generarID(),
		imagen:
			"https://s3-sa-east-1.amazonaws.com/saasargentina/eBcr5BG5tKqZzVtTAOha/imagen",
		titulo: "Gabinete AZZA Iris 330 Vidrio Templado 2x12cm ARGB",
		descripcion: "Garantía 12 Meses",
		precio: "20999.00",
		stock: 130,
	},
];

const nuevosIngresos = document.querySelector("#cards_ingresos");

nuevosIngresos.innerHTML = "";

productosNuevos.forEach((productoNuevo) => {
	const nuevos = `
    <div id="card-${productoNuevo.id}" class="card d-flex align-self-stretch">
      <img src="${productoNuevo.imagen}" class="card-img-top" alt="${productoNuevo.titulo}" />
      <div class="card-body">
        <h5 class="card-title">${productoNuevo.titulo}</h5>
        <div class="cards__precio-agregar">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-${productoNuevo.id}">
            Descripción
          </button>
          <div id="modal-${productoNuevo.id}" class="modal fade" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">${productoNuevo.titulo}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>${productoNuevo.descripcion}<br /><br />ID del producto: ${productoNuevo.id}.<br />${productoNuevo.stock} productos disponibles</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-warning" data-bs-dismiss="modal" id="btn-fav">Favorito</button>
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Agregar al carrito</button>
                </div>
              </div>
            </div>
          </div>
          <span class="precio" id="precio">$${productoNuevo.precio}</span>
        </div>
        <div class="stock" id="stock">
          <p id="stockMessage">Hay stock</p>
        </div>
      </div>
    </div>
	
					
				`;
	nuevosIngresos.innerHTML += nuevos;

	function guardarStockNuevos() {
		localStorage.setItem("productosIngreso", JSON.stringify(productosNuevos));
	}
	guardarStockNuevos();
});
