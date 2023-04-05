//Array de mi Proyecto.

const catalogo = []
let carrito = []
let peliculasCompradas = []

// Class de mi Proyecto.

class Pelicula {
    constructor(imagenPelicula, nombre, id){
      this.imagenPelicula = imagenPelicula;
      this.nombre = nombre;
      this.id = id
    }
  }

// Boton Cerrar Sesión : Vuelve al log-in inicial (index.html) y coloca la Key en "false" .

let botonCerrarSesion = document.getElementById("cerrar-sesion")
    botonCerrarSesion.addEventListener("click", () => {
        localStorage.setItem("checkBox", JSON.stringify(false))
        window.location.href = "index.html"
    })

// Recupera lo que este almacenado en la Key "carrito" .

function cargarCarritoDesdeLocalStorage() {
    if (localStorage.getItem("carrito")) {
      carrito = JSON.parse(localStorage.getItem("carrito"))
    }
  }

// Boton F5 : Al apetar el boton F5, si existen elementos dentro del carrito, este codigo se va a encargar de que sigan apareciendo.
  
window.addEventListener("load", () => {
    cargarCarritoDesdeLocalStorage()
  
    if (carrito.length > 0) {
        let modal = document.getElementById("PeliculasEnCarrito")
        modal.innerHTML = ""
  
        for (let pelicula of carrito) {
        let peliculaDiv = document.createElement("div")
        peliculaDiv.innerHTML = pelicula.nombre
        modal.appendChild(peliculaDiv)
        }
    }
})
  
// Creacion de las cards de mi proyecto.

let cartasPeliculas = document.getElementById("peliculas")

fetch("peliculas.json")
.then(response => response.json())
.then(peliculas => {

        for (let creacionCartas of peliculas) {
            let peli = new Pelicula (creacionCartas.imagenPelicula, creacionCartas.nombre, creacionCartas.id)
            catalogo.push(peli)
            let nuevaPeliDiv = document.createElement("div")
            nuevaPeliDiv.className = "col-12 col-md-6 col-lg-4 my-3"
            nuevaPeliDiv.innerHTML =
            `
                <div class="card" style="width: 18rem;">
                    <img src="fotos/${creacionCartas.imagenPelicula}" class="card-img-top img-fluid" style ="height: 380px;" >
                    <div class="card-body">
                        <h5 class="card-title">${creacionCartas.nombre}</h5>
                        </br>
                        <div class="d-grid gap-2">
                        <button id="${creacionCartas.id}" class="btn btn-primary botonAgregar" type="button" ${carrito.some(p => p.id === creacionCartas.id) ? "disabled" : ""}> Agregar al Carrito </button>
                        </div>
                    </div>
                </div>
            `
            cartasPeliculas.appendChild(nuevaPeliDiv)
        }

    // Function que deshabilita los botones de las cards que se precionaron.

    let botonCompraTicket = document.getElementsByClassName("botonAgregar")

    function agregarCarrito (id){
        let peliculaSeleccionada = catalogo.find( e => e.id == id)
    
        if(peliculaSeleccionada){
            let botonAgregar = document.getElementById(id)
            botonAgregar.disabled = true
    
            // verificar si la pelÍcula ya esta en el carrito.

            let peliculaEnCarrito = carrito.find( e => e.id == id)
            if (!peliculaEnCarrito) {
                carrito.push(peliculaSeleccionada)
                localStorage.setItem("carrito", JSON.stringify(carrito))
            }

        }
    
        let modal = document.getElementById("PeliculasEnCarrito")
        modal.innerHTML = "" 
    
        for (let pelicula of carrito) {
            let peliculaDiv = document.createElement("div")
            peliculaDiv.innerHTML = pelicula.nombre
            modal.appendChild(peliculaDiv)
        }
    }
    
    // Evento que realiza cada boton al apretar "Agregar al carrito" .

    for (let i = 0; i < botonCompraTicket.length; i++) {
        botonCompraTicket[i].addEventListener("click", () => {
            agregarCarrito(botonCompraTicket[i].id)
            Swal.fire({
                icon: "success",
                title: "Agregaste la pelicula al carrito",
                text: "la pelicula aparecera dentro del carrito",
                showConfirmButton: false,
                timer: 2500
            })
            localStorage.setItem("carrito", JSON.stringify(carrito))
        })
    }
})

// Recupera lo que este almancenado en la Key "peliculasCompradas" .

if (localStorage.getItem("peliculasCompradas")) {
    peliculasCompradas = JSON.parse(localStorage.getItem("peliculasCompradas"))
}

// Evento el cual salta un error si esta el carrito vacío, y quiero "finalizar la compra".

let botonFinalizar = document.getElementById("modal2")
    botonFinalizar.addEventListener("click", ()=>{

        if (carrito.length === 0) {
            Swal.fire({
                icon: "error",
                title: "El carrito está vacío",
                text: "Agrega al menos una película al carrito para poder realizar la compra",
            })
            return
        }
        
    Swal.fire({
      icon: "success",
      title: "Su compra fue exitosa",
      text: `Le llegara un link al Email con el que esta registrado, donde podra disfrutar de las películas que haya comprado. Muchas gracias!`,
      showConfirmButton: true
     })

    for (let pelicula of carrito) {
      peliculasCompradas.push(pelicula)
      console.log(peliculasCompradas)
    }
  
    carrito = []
  
    localStorage.setItem("carrito", JSON.stringify(carrito))
  
    let modal = document.getElementById("PeliculasEnCarrito")
    modal.innerHTML = ""
    $('#modalCarrito').modal('hide')
  })

