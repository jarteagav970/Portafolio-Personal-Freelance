const datos = {
    nombre: '',
    telefono: '',
    correo: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre')
const telefono = document.querySelector('#telefono')
const correo = document.querySelector('#correo')
const mensaje = document.querySelector('#mensaje')
const formulario = document.querySelector('.formulario')

nombre.addEventListener('input', leerTexto)
telefono.addEventListener('input', leerTexto)
correo.addEventListener('input', leerTexto)
mensaje.addEventListener('input', leerTexto)

// Boton para enviar el formulario
formulario.addEventListener('submit', function(e){
    e.preventDefault()

    const {nombre, telefono, correo, mensaje} = datos

    if(!nombre || !telefono || !correo || !mensaje){
        mostrarAlerta('Todos los campos son obligatorios', true)
        return
    }
        mostrarAlerta('Los datos se han enviado correctamente')
})

//extraer texto para la validacion
function leerTexto(e){
    datos[e.target.id] = e.target.value
    console.log(datos)
}
function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P')
    alerta.textContent = mensaje

    if(error){
        alerta.classList.add('error')
    } else {
        alerta.classList.add('enviar')
    }

    formulario.appendChild(alerta)
    
    setTimeout(() => {
        alerta.remove();
    }, 5000);

}
