const http = require('http')

//-- Datos a enviar al servidor
const libros = JSON.stringify({
    titulo: 'NodeJS',
    cantidad: 15
})

const options = {
    hostname : 'localhost',
    port : 3000,
    path : '/',
    method : 'POST',
    headers : {
        'Content-type' : 'application/json',
        'Content-length' : libros.length
    }
}

const request = http.request( options, response => {
    let datos_from_server = ''
    response.on ('data', (chunk) =>{
        datos_from_server += chunk
        console.log ('chunk ' + chunk)
    })
    response.on('end', () => {
        console.log('Respuesta del servidor:', datos_from_server)
    })
})

request.on('error' , error =>{
    console.log ('Error en la solicitud ' + error.message)
})

request.write(libros)
request.end()