paginaeliculas()

    function paginaeliculas(){
        let cerrarSesion = document.getElementById("cerrar-sesion")

        cerrarSesion.addEventListener("click", () => {
            localStorage.setItem("checkBox", JSON.stringify(false))
            window.location.href = "index.html"
        })
    }

    class Peliculas {
        constructor(imagenPelicula,nombre, id) {
            this.imagenPelicula = imagenPelicula,
            this.nombre = nombre,
            this.id = id
        }
    }

    const pelicula1 = new Peliculas ("aftersun.jpg", "Aftersun", 1)
    const pelicula2 = new Peliculas ("alerta-extrema-210x300.jpg", "Alerta Extrema", 2)
    const pelicula3 = new Peliculas ("argentina-1985-210x300.jpg", "Argentina 1985", 3)
    const pelicula4 = new Peliculas ("Avatar-el-Camino-del-Agua.jpg", "Avatar: el Camino del Agua",4)
    const pelicula5 = new Peliculas ("gato-con-botas-el-ultimo-deseo.jpg", "Gato con botas: El último deseo", 5)
    const pelicula6 = new Peliculas ("vecinogrunon.jpg", "Un vecino gruñón", 6)

    const listaPeliculas = []
    listaPeliculas.push(pelicula1,pelicula2,pelicula3,pelicula4,pelicula5,pelicula6)

    let cartasPeliculas = document.getElementById("peliculas")

    for(let creacionCartas of listaPeliculas){

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
                    <button data-id-pelicula="${creacionCartas.id}" class="btn btn-primary" type="button"> Ver Película </button>
                </div>
            </div>
        </div>
        `

        cartasPeliculas.appendChild(nuevaPeliDiv)
    }

//Evento de los botones dentro de las cards

let botonCompraTicket = document.getElementsByClassName("btn btn-primary")  

for (let i = 0; i < botonCompraTicket.length; i++) {
    botonCompraTicket[i].addEventListener("click", function(e) {
        window.location.href = `index4.html?id=${e.target.dataset.idPelicula}`;
    });
  }

//Evento del input de busqueda de peliculas

// let botonBuscar = document.getElementById("btnBuscar")

// botonBuscar.addEventListener("click", function() {
//     let input = document.getElementById("input").value.toLowerCase();
//     let nombrePeliculaEncontrada = null;

//     for (let pelicula of listaPeliculas) {
//         if (pelicula.nombre.toLowerCase().includes(input)) {
//             nombrePeliculaEncontrada = pelicula.nombre;
//             break;
//         }
//     }
    
//     console.log(`${nombrePeliculaEncontrada}`)
//     if (nombrePeliculaEncontrada !== null) {
//         window.location.href = `${nombrePeliculaEncontrada}.html`;
//     } else {
//         Swal.fire({
//             icon: 'error',
//             title: 'Error',
//             text: 'No se encuentra la pelicúla que esta buscando. Pruebe de vuelta ',
//             showConfirmButton: false,
//             timer: 2200
//           })
//     }
// });
