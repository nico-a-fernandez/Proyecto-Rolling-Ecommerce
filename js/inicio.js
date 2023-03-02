const productos = [
	{
		id: 001,
		imagen:
			"https://http2.mlstatic.com/D_NQ_NP_681760-MLA51359759925_082022-W.jpg",
		titulo: "Monitor curvo 55 pulgadas",
		descripcion: "Con definición 4K..",
		precio: 55000,
	},
	{
		id: 002,
		imagen: "https://www.bsastecno.com.ar/wp-content/uploads/2022/01/24002.jpg",
		titulo: "Cooler PC",
		descripcion: "blah blah blah",
		precio: 10000,
	},
	{
		id: 003,
		imagen: "https://mauricomputacion.com.ar/images/productos/23847.webp",
		titulo: "Placa Madre",
		descripcion: "Esta es tremenda",
		precio: 30000,
	},
	{
		id: 004,
		imagen:
			"https://fullh4rd.com.ar/img/productos/Pics_Prod/video-geforce-gtx-1660-6gb-gigabyte-oc-nv-0.jpg",
		titulo: "Placa de video GEFORCE GTX 1660",
		descripcion: "Placa de video última generación compatible con...",
		precio: 12500,
	},
];

// PARA LOS PRODUCTOS PRINCIPALES

const cards = document.querySelector("#cards_productos");

cards.innerHTML = "";

productos.forEach((producto) => {
	const html = `
    <div class="card" style="width: 18rem">
    <img
        src="${producto.imagen}"
        class="card-img-top"
        alt="${producto.titulo}"
    />
    <div class="card-body">
        <h5 class="card-title">${producto.titulo}</h5>
        <p class="card-text">
            ${producto.descripcion}
        </p>
				<div class="cards__precio-agregar">
				<a href="#" class="btn btn-primary">Agregar</a>
				<span class="precio" id="precio">$${producto.precio}</span>
			</div>
			<div class="stock" id="stock">
				<p>Hay Stock</p>
			</div>
    </div>
</div>`;

	cards.innerHTML += html;
});

//
///

// PARA PRODUCTOS DE "ULTIMO INGRESO"
//
///

const productosNuevos = [
	{
		id: 020,
		imagen:
			"https://http2.mlstatic.com/D_NQ_NP_681760-MLA51359759925_082022-W.jpg",
		titulo: "Monitor curvo 55 pulgadas",
		descripcion: "Con definición 4K..",
		precio: 55000,
	},
	{
		id: 021,
		imagen: "https://www.bsastecno.com.ar/wp-content/uploads/2022/01/24002.jpg",
		titulo: "Cooler PC",
		descripcion: "blah blah blah",
		precio: 10000,
	},
	{
		id: 022,
		imagen: "https://mauricomputacion.com.ar/images/productos/23847.webp",
		titulo: "Placa Madre",
		descripcion: "Esta es tremenda",
		precio: 30000,
	},
	{
		id: 023,
		imagen:
			"https://fullh4rd.com.ar/img/productos/Pics_Prod/video-geforce-gtx-1660-6gb-gigabyte-oc-nv-0.jpg",
		titulo: "Placa de video GEFORCE GTX 1660",
		descripcion: "Placa de video última generación compatible con...",
		precio: 12500,
	},
];

const nuevosIngresos = document.querySelector("#cards_ingresos");

nuevosIngresos.innerHTML = "";

productosNuevos.forEach((productoNuevo) => {
	const nuevos = `
<div class="card" style="width: 18rem">
					<img
						src="${productoNuevo.imagen}"
						alt="${productoNuevo.titulo}"
					/>
					<div class="card-body">
						<h5 class="card-title">${productoNuevo.titulo}</h5>
						<p class="card-text">
							${productoNuevo.descripcion}
						</p>
						<div class="cards__precio-agregar">
							<a href="#" class="btn btn-primary">Agregar</a>
							<span class="precio" id="precio">$${productoNuevo.precio}</span>
						</div>
						<div class="stock" id="stock">
							<p>Hay Stock</p>
						</div>
					</div>
				</div>
				`;
	nuevosIngresos.innerHTML += nuevos;
});
