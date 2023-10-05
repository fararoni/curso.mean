const personal = require ('../models/personal.models')

// CRUD y Verdos HTTP
// CRUD - Create (POST), Read (GET), Update (PUT), Delete (DELETE)

//POST /api/
//-- Se usa el método semántico POST para la acción de CREAR
//-->  router.post('/directorio', mainController.create)
module.exports.create = (req, res) => {
    console.log('module.exports.create')
    console.log(req.body)
    
    let id = Date.now()
    /*
        let persona = {
            area : req.body.area,
            ....

        }
    */
    let persona = {} 
    persona.id = id
    persona.Area = req.body.area
    persona.Cargo = req.body.cargo
    persona.Extension = req.body.extension
    persona.Titulo = req.body.titulo
    persona.NombreCompleto = req.body.nombrecompleto
    persona.Correo = req.body.correo
    persona.Edificio = req.body.edificio
    persona.Piso = req.body.piso
    personal.push( persona )
    console.log ('---')
  ///  console.log ( persona)
    console.log ('======')
 ///   console.log ( personal)
    res.status(200)
    res.send({
        titulo : 'Directorio',
        pagina : 'Nuevo registro',
        id     : id,
        persona: persona
    })
}
//-- GET
//--> router.get('/directorio', mainController.readAll)
module.exports.readAll = (req, res) => {
    res.status(200)
    res.send({
        titulo: 'Directorio',
        pagina: 'Listado del personal',
        personal: personal
    })
}
//--- GET 
//--> router.get('/directorio/:id', mainController.readOne)
module.exports.readOne = (req, res) => {
    let id = req.params.id
    let persona = personal.find(
        persona => persona.id == id
    )
    res.status(200)
    res.send({
        titulo : 'Directorio',
        pagina : 'Ver detalles del personal',
        id     : id,
        persona: persona
    })
}
//-- PUT Actualización
//--> router.PUT('/directorio', mainController.update)
module.exports.update = (req, res) => {
    let id = req.params.id
    let persona = personal.find(    persona => persona.id == id )
    persona.Area = req.body.Area
    persona.Cargo = req.body.Cargo
    persona.Extension = req.body.Extension
    persona.Titulo = req.body.Titulo
    persona.NombreCompleto = req.body.NombreCompleto
    persona.Correo = req.body.Correo
    persona.Edificio = req.body.Edificio
    persona.Piso = req.body.Piso
    res.status(200)
    res.send({
        titulo : 'Directorio',
        pagina : 'Información actualizada',
        id     : id,
        persona: persona
    })
}
//-- DELETE Borrar un registro
//--> router.delete('/directorio/:id', mainController.delete)
module.exports.delete = (req, res) => {
    let id = req.params.id
    let persona = personal.find(    persona => persona.id == id )
    let index = personal.indexOf(persona)
    personal.splice(index,1)            
    res.status(200)
    res.send({
        titulo : 'Directorio',
        pagina : 'Registro borrado',
        persona: persona
    })
}
//-- DELETE Borrar todos los registros
//--> router.delete('/directorio', mainController.deleteAll)
module.exports.deleteAll = (req, res) => {
    personal.splice(0) 
    res.status(200)
    res.send("Borrado")
}