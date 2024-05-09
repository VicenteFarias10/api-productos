const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    codigoProducto: String,
    marca: String,
    codigo: String,
    nombre: String,
    precio: [{
        fecha: Date,
        valor: Number
    }]
});

module.exports = mongoose.model('Product', productSchema);
