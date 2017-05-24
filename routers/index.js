'use strict'

const express = require('express');
const productCtrl = require('../controllers/product');
const api = express.Router();


//rutas
//get
//pedir todos los productos
api.get('/product', productCtrl.getProducts)
//pedir solo uno
api.get('/product/:productId', productCtrl.getProduct)
//post
api.post('/product', productCtrl.saveProduct)
//put
//actualizaciones
api.put('/product/:productId', productCtrl.updateProduct)
//delete
api.delete('/product/:productId', productCtrl.deleteProduct)


module.exports = api