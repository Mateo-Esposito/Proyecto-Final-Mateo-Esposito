paginaeliculas()

    function paginaeliculas(){
        let cerrarSesion = document.getElementById("cerrar-sesion")

        cerrarSesion.addEventListener("click", () => {
            localStorage.setItem("checkBox", JSON.stringify(false))
            window.location.href = "index.html"
        })
    }

const catalogo = []
let carrito = []

class Pelicula {
    constructor(imagenPelicula, nombre, id){
        this.imagenPelicula = imagenPelicula;
        this.nombre = nombre;
        this.id = id
    }
}

let cartasPeliculas = document.getElementById("peliculas");
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
                    <button id="${creacionCartas.id}" class="btn btn-primary botonAgregar" type="button" > Agregar al Carrito </button>
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

        if(peliculaSeleccionada){
          let botonAgregar = document.getElementById(id)
          botonAgregar.disabled = true
        }
        carrito.push(peliculaSeleccionada)

        let modal = document.getElementById("modal1")
        carrito.innerHTML=`
        <div class="card" style="width: 18rem;">
            <img src="fotos/${carrito}" class="card-img-top img-fluid" style ="height: 380px;" >
            <div class="card-body">
                <h5 class="card-title">${carrito}</h5>
                </br>
                <div class="d-grid gap-2">
                    <button id="${carrito}" class="btn btn-primary botonAgregar" type="button" > Agregar al Carrito </button>
                </div>
            </div>
        </div>
        `
        modal.append(carrito)
    }

    for (let i = 0; i < botonCompraTicket.length; i++) {
      botonCompraTicket[i].addEventListener("click", () => {
        agregarCarrito(botonCompraTicket[i].id)
        Swal.fire({
          icon: "success",
          title: "Agregaste la pelicula al carrito",
          text: "Espero que la disfrutes :)",
          showConfirmButton: false,
          timer: 1500, })
          localStorage.setItem("carrito", JSON.stringify(carrito))
      })
    }
  })



