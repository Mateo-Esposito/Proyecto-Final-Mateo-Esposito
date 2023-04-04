// Array que almacena cada usuario Registrado en el LocalStorage

const baseDeDatosUsuarios = JSON.parse(localStorage.getItem("log In")) || []

// Objeto que contiene el Email y Password

class Datos {
    constructor(email, password){
        this.email = email
        this.password = password
    }
}

// Formulario 2: Obtencion de Nombre completo / Correo Electronico / Contraseña 

registrarse()
function registrarse(){
    localStorage.setItem("checkBox", false)

    let form2 = document.getElementById("formulario2")

    let box = document.getElementById("checkbox")
    formulario2[4].addEventListener("click", botonBox2)

    let contador2 = 0

    function botonBox2(){
        contador2++

        if(contador2 % 2 === 0){
            localStorage.setItem("checkBox", false)
        }
        else{
            localStorage.setItem("checkBox", true)
        }
    }

    form2.addEventListener("submit", validarFormulario2)
    
    function validarFormulario2(e){
        e.preventDefault()
        
        if( (formulario2[0].value != "") && (formulario2[1].value != "") && ( (formulario2[2].value == formulario2[3].value) && (formulario2[2].value != "") && (formulario2[3].value != "") ) ){

            let formulario2 = e.target

            const persona2 = new Datos(formulario2[1].value,formulario2[2].value)
            
            baseDeDatosUsuarios.push(persona2)

            localStorage.setItem("log In", JSON.stringify(baseDeDatosUsuarios))

            Swal.fire({
                icon: "success",
                title: "Registro exitoso",
                text: "Gracias por registrarte!",
                showConfirmButton: false,
                timer: 1500,
              }).then(() => {
                window.location.href = "index3.html";
              })

        }else if( (formulario2[0].value == "") || (formulario2[1].value == "") || (formulario2[2].value == "") || (formulario2[3].value == "") ){

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Complete todos los casilleros. Muchas Gracias :)',
                showConfirmButton: false,
                timer: 2200
              })
                
        }else if(formulario2[2].value != formulario2[3].value){
            Swal.fire({
                icon: 'warning',
                title: 'Cuidado',
                text: 'No coloco las mismas contraseñas',
              })
        }
    }
}   

