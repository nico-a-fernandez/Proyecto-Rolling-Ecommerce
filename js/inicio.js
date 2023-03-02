const productos = [
	{
		id: 001,
		imagen:
			"https://fullh4rd.com.ar/img/productos/Pics_Prod/video-geforce-gtx-1660-6gb-gigabyte-oc-nv-0.jpg",
		titulo: "Placa de video GEFORCE GTX 1660",
		descripcion: "Placa de video ultima genercacion compatible con...",
	},
	{
		id: 002,
		imagen:
			"https://fullh4rd.com.ar/img/productos/Pics_Prod/video-geforce-gtx-1660-6gb-gigabyte-oc-nv-0.jpg",
		titulo: "Placa de video GEFORCE GTX 1660",
		descripcion: "Placa de video ultima genercacion compatible con...",
	},
	{
		id: 003,
		imagen:
			"https://fullh4rd.com.ar/img/productos/Pics_Prod/video-geforce-gtx-1660-6gb-gigabyte-oc-nv-0.jpg",
		titulo: "Placa de video GEFORCE GTX 1660",
		descripcion: "Placa de video ultima genercacion compatible con...",
	},
	{
		id: 004,
		imagen:
			"https://fullh4rd.com.ar/img/productos/Pics_Prod/video-geforce-gtx-1660-6gb-gigabyte-oc-nv-0.jpg",
		titulo: "Placa de video GEFORCE GTX 1660",
		descripcion: "Placa de video ultima genercacion compatible con...",
	},
];

const listadoDeProductos = document.querySelector("#card_productos");

listadoDeProductos.innerHTML = "";

productos.forEach((producto) => {
	const html = `
    <div class="card" style="width: 18rem">
    <img
        src="${producto.imagen}"
        class="card-img-top"
        alt="${producto.titulo}"
    />
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Comprar</a>
    </div>
</div>`;

	listadoDeProductos.innerHTML += html;
});
