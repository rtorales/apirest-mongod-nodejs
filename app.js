'use strict'
//importar librerias
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const api = require('./routers') //si el fichero es index.js no es necesario indicarlo

//asignar variables de entorno
const app = express()

//importar controlador
const productCtrl = require('./controllers/product');

//configurar entorno
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', api)

//exportar las funciones
module.exports = app