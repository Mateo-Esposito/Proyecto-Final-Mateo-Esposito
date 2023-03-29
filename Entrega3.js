let cartasPeliculas = document.getElementById("peliculas");
const carrito = []
const catalogo = []

class Pelicula {
    constructor(imagenPelicula, nombre, id){
        this.imagenPelicula = imagenPelicula;
        this.nombre = nombre;
        this.id = id
    }
}

fetch("peliculas.json")
  .then(response => response.json())
  .then(peliculas => {
    for (let creacionCartas of peliculas) {
      let peli = new Pelicula (creacionCartas.imagenPelicula, creacionCartas.nombre, creacionCartas.id)
      catalogo.push(peli)
      let nuevaPeliDiv = document.createElement("div");
      nuevaPeliDiv.className = "col-12 col-md-6 col-lg-4 my-3";
      nuevaPeliDiv.innerHTML =
        `
        <div class="card" style="width: 18rem;">
            <img src="fotos/${creacionCartas.imagenPelicula}" class="card-img-top img-fluid" style ="height: 380px;" >
            <div class="card-body">
                <h5 class="card-title">${creacionCartas.nombre}</h5>
                </br>
                <div class="d-grid gap-2">
                    <button id="${creacionCartas.id}" class="btn btn-primary botonAgregar" type="button"> Comprar</button>
                </div>
            </div>
        </div>
        `;

      cartasPeliculas.appendChild(nuevaPeliDiv);
    }

    //Evento de los botones dentro de las cards
    let botonCompraTicket = document.getElementsByClassName("botonAgregar")

    function agregarCarrito (id){
        let peliculaSeleccionada = catalogo.find( e => e.id == id)
        carrito.push(peliculaSeleccionada)
        console.log(carrito)
    }

    for (let i = 0; i < botonCompraTicket.length; i++) {
      botonCompraTicket[i].addEventListener("click", () => agregarCarrito(botonCompraTicket[i].id))
      
    }
  })