// Formulario 1: Obtencion de Correo Electronico / Contraseña 

box1()
function box1(){   
    if (JSON.parse(localStorage.getItem("checkBox")) == true){
        window.location.href = "index3.html"
    }else{
        inicioSesion()
    }
}

function inicioSesion(){
    let form1 = document.getElementById("formulario1")

    let box = document.getElementById("checkbox")
    formulario1[2].addEventListener("click", botonBox)

    let contador = 0

    function botonBox(){
        contador++

        if(contador % 2 === 0){
            localStorage.setItem("checkBox", false)
        }
        else{
            localStorage.setItem("checkBox", true)
        }
    }

    form1.addEventListener("submit", validarFormulario1)

    function validarFormulario1(e){
        e.preventDefault()

        if( (formulario1[0].value != "") && (formulario1[1].value != "") ){
            let formulario1 = e.target

            let usuarios = JSON.parse(localStorage.getItem("log In"))
            if(usuarios){
                for (let i = 0 ;i < usuarios.length ; i++){

                    if((usuarios[i].email === formulario1[0].value) && (usuarios[i].password === formulario1[1].value)){
                        window.location.href = "index3.html"
                    }
                    else{
                        Swal.fire({
                            icon: 'warning',
                            title: 'Coloque sus datos correctamente',
                            text: 'Si no posee una cuenta, aquí abajo apriete en el boton de "Regístrate"',
                          })
                    }
                }
            }
            else{
                Swal.fire({
                    icon: 'warning',
                    title: 'Coloque sus datos correctamente',
                    text: 'Si no posee una cuenta, aquí abajo apriete en el boton de "Regístrate"',
                  })
            }
        }
        else{
            if( (formulario1[0].value == "") || (formulario1[1].value == "") ){

                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Complete todos los casilleros. Muchas Gracias :)',
                    showConfirmButton: false,
                    timer: 2200
                  })
            }
        }
    }
}