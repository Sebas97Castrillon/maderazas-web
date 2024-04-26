const form = document.getElementById('form')
const sendEmail = document.getElementById('emailA')

function handleSendEmail(event) {
    event.preventDefault();
    const fd = new FormData(this)

    sendEmail.setAttribute('href', `mailTo:sebas.2561@hotmail.com?subject=${fd.get('subject')}&body=${fd.get('message')}`)

    sendEmail.click()
}
form.addEventListener('submit', handleSendEmail)



// const form = document.getElementById('form')
// const sendEmail = document.getElementById('emailA')

// async function handleSendEmail(event) {
//     event.preventDefault();
//     const fd = new FormData(this)

//     const response = await fetch('https://formspree.io/f/mgegrgde', { method: 'POST', body: fd, headers: { Accept: 'application/json' } })

//     if (response.ok) {
//         this.reset()
//         alert('Mensaje enviado')
    

//     }else {
//         alert('Error al enviar el mensaje')
//     }


//     sendEmail.click()
// }
// form.addEventListener('submit', handleSendEmail)