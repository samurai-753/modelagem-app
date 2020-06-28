var mongoose = require("mongoose");

var schemaPublicadores = new mongoose.Schema({
    fotoUrl:{
        type: String
    },
    numSeguidores:{
        type: Number
    },
    nome:{
        type: String,
        unique: true
    },
    senha:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Publicador', schemaPublicadores);
