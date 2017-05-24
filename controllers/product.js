'use strict'

//importar modelo
const Product = require('../models/Product');

//leer un solo producto
function getProduct (req, res ) {
    let productId = req.params.productId;
    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({message: `error al realizar la petición ${err}`});
        if (!product) return res.status(404).send({message: `El producto no existe`});
        //devolver producto
        //res.status(200).send({ product: product });
        res.status(200).send({ product });
    });
}

//leer todos los productos
function getProducts (req, res) {
    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({message: `error al realizar la petición ${err}`});
        if (!products) return res.status(404).send({message: `No existen productos`});
        res.status(200).send({ products })
    })
}

//insertar producto
function saveProduct(req, res){
    console.log('POST /api/product');
    console.log(req.body);
    //asignar variables
    let product = new Product();
    product.name = req.body.name;
    product.picture = req.body.picture;
    product.price = req.body.price;
    product.category = req.body.category;
    product.description = req.body.description;
    //salvar productos
    product.save((err, productStored) => {
        //en caso de error
        if (err) return res.status(500).send({message: `error al salvar en la base de datos: ${err}`});
        //si está todo ok
        res.status(200).send({product: productStored});
     });
}

//actualizar un producto
function updateProduct (req, res) {
    let productId = req.params.productId;
    let update = req.body
    //enviar el id a actualizar con el array de lo actualizado (recibido en el body)
    Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
        //en caso de error
        if (err) return res.status(500).send({message: `error al actualizar el producto: ${err}`});
        res.status(200).send({Product : productUpdated})
    })
}

//borrar un producto
function deleteProduct (req, res) {
    let productId = req.params.productId;
    Product.findById(productId, (err, product) => {
        //si no encuentra o da error
        if (err) return res.status(500).send({message : `Error al ubicar el producto: ${err}`});
        //eliminar el producto
        product.remove((err) => {
            if (err) return res.status(500).send({message : `Error al eliminar el producto: ${err}`});
        res.status(200).send({message: `El producto fue eliminado`})
        })
    })
}

//exportar las funciones
module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
}