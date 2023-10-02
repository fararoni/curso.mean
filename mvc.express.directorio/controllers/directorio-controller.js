const personal = require ('../models/personal')

module.exports.list = (req, res) => {
    res.render('directorio/listado-view', {
        titulo: 'Directorio',
        pagina: 'Listado del personal',
        personal: personal
    })
}

module.exports.view = (req, res) => {
    let id = req.params.id
    console.log ('Ver detalles de ' + id)
    let persona = personal.find(
        persona => persona.id == id
    )
    console.log(persona)
    res.render('directorio/detalles-view', {
        titulo : 'Directorio',
        pagina : 'Ver detalles del personal',
        id     : id,
        persona: persona
    })
}

module.exports.edit = (req, res) => {
    let id = req.params.id
    let persona = personal.find(    persona => persona.id == id )
    res.render('directorio/persona-edit', {
        titulo : 'Directorio',
        pagina : 'Editar información',
        id     : id,
        persona: persona
    })
}

module.exports.save = (req, res) => {
    let id = req.params.id
    let persona = personal.find(    persona => persona.id == id )
    //-- Actualizar todos los valores
    persona.Area = req.body.area
    persona.Cargo = req.body.cargo
    persona.Extension = req.body.extension
    persona.Titulo = req.body.titulo
    persona.NombreCompleto = req.body.nombrecompleto
    persona.Correo = req.body.correo
    persona.Edificio = req.body.edificio
    persona.Piso = req.body.piso
    res.render('directorio/listado-view', {
        titulo : 'Directorio',
        pagina : 'Información actualizada',
        id     : id,
        personal: personal
    })
}

