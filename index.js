'use strict'
//importar librerias
const mongoose = require('mongoose');
const app = require('./app');

//asignar variables de entorno
const config = require('./config');

mongoose.connect(config.db, (err,res) => {
    if (err) {
        return console.log(`Error al contectar a la base de datos: ${err}`);    
    }
    console.log('conexión establecida');
    app.listen(config.port, () => {
        console.log(`API REST corriento en http://localhost:${config.port}`)
    })
})

 