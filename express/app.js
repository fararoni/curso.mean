const express = require('express')
const app = express()
const port = 3000
const mensaje = "Iniciamos con ExpresJS!"
app.get('/', (req, res) => {
  res.send(mensaje)
})

app.listen(port, () => {
  console.log(`Server in ${port}`)
})