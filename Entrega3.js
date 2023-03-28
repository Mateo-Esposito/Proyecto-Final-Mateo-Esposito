let cartasPeliculas = document.getElementById("peliculas");

fetch("peliculas.json")
  .then(response => response.json())
  .then(peliculas => {
    for (let creacionCartas of peliculas) {
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
                    <button data-id-pelicula="${creacionCartas.id}" class="btn btn-primary" type="button"> Comprar</button>
                </div>
            </div>
        </div>
        `;

      cartasPeliculas.appendChild(nuevaPeliDiv);
    }

    //Evento de los botones dentro de las cards
    let botonCompraTicket = document.getElementsByClassName("btn btn-primary");

    for (let i = 0; i < botonCompraTicket.length; i++) {
      botonCompraTicket[i].addEventListener("click", function (e) {
        //window.location.href = `index4.html?id=${e.target.dataset.idPelicula}`;
      });
    }
  });
