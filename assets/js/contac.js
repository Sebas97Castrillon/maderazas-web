// Seleccionando el elemento del formulario en el DOM
const form = document.getElementById('form')

// Seleccionando el elemento usado para enviar el correo electrónico
const sendEmail = document.getElementById('emailA')

// Función para manejar el envío de correo electrónico cuando se envía el formulario
function handleSendEmail(event) {
    // Evitando el comportamiento predeterminado de envío del formulario
    event.preventDefault();
    
    // Creando un nuevo objeto FormData con los datos del formulario
    const fd = new FormData(this)

    // Estableciendo el atributo href del elemento sendEmail para componer el correo electrónico con asunto y cuerpo
    sendEmail.setAttribute('href', `mailto:sebas.2561@hotmail.com?subject=${fd.get('subject')}&body=${fd.get('message')}`)

    // Simulando un clic en el elemento sendEmail para activar el envío del correo electrónico
    sendEmail.click()
}
// Agregando un event listener al formulario, escuchando el evento submit y llamando a la función handleSendEmail
form.addEventListener('submit', handleSendEmail)