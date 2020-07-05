var routes = require('express').Router();
var Publicador = require('../models/Publicador');
var ObjectId = require('mongoose').Types.ObjectId; 


//POST adicionar novo Comentario
routes.post('/', function(req, res){
    console.log("POST in Publicador - /");
    if(!req.body.nome && !req.body.senha){
        return res.status(422).send({error: "argumentos invalidos"});
    }
    var novoPublicador = new Publicador({
        fotoUrl: req.body.fotoUrl,
        numSeguidores: req.body.numSeguidores,
        nome: req.body.nome,
        senha: req.body.senha
    });
    novoPublicador.save(function(err){
        if(err) return res.status(403).send({error: err});
        return res.send(novoPublicador); // omitir status => 200 (sucesso)
    });
});

// Controla as rotas de get na raiz
routes.get('/', function(req, res){
    console.log("\nGet em Publicadores")
    if(!Object.keys(req.query).length)
    {
        console.log("Todos publicadores");
        // Retorna todos os pubicadores  existentes
        Publicador.find().select('-senha').exec(function(err, publicadores){
            return res.send(publicadores); 
        });
    }
    else if(req.query.id && Object.keys(req.query).length == 1)
    {
        console.log("Rota RouteGetPublicadores");
        return RouteGetPublicadores(req, res);
    }
    else if(req.query.id && req.query.admin && Object.keys(req.query).length == 2)
    {
        console.log("Rota RouteGetPublicadorAdmin");
        return RouteGetPublicadorAdmin(req, res);
    }
    else
    {
        console.log("Error");
        return res.status(403).send({error: "Parametros invalidos. Parametros permitidos: \'id\' ou sem parametros (separadamente)"});
    }

});
// Retorna os dados de um publicador
function RouteGetPublicadorAdmin(req, res){
    if(req.query.admin != "1" && req.query.admin != "true"){
        RouteGetPublicadores(req, res);
        return
    }
    
    let id = "";
    if(typeof(req.query.id) === 'string' && ObjectId.isValid(req.query.id))
    {
        id = ObjectId(req.query.id);
    }
    else
    {
        return res.status(403).send({error: "Parametros invalidos"});
    }
    console.log("Publicador: " + id);

    Publicador.aggregate([
        { $match: { _id: id } }
    ]).exec(function(err, publicador){
        res.setHeader('Access-Control-Allow-Origin', '*');
        return res.send(publicador); 
    });
}

// Retorna todos publicadores passados por parametro
function RouteGetPublicadores(req, res){
    var ids = [];
    if(typeof(req.query.id) === 'string')
    {
        if(ObjectId.isValid(req.query.id))
        {
            ids.push(new ObjectId(req.query.id));
        }
    }
    else
    {
        for(var i in req.query.id) 
        {
            if(ObjectId.isValid(req.query.id[i]))
            {
                ids.push(new ObjectId(req.query.id[i]));
            }
        }
    }
    console.log("PublicadorId\'s: " + ids);
    
    Publicador.aggregate([
        { $project: { "senha": 0}},
        { $match: { _id: {$in: ids} } }
    ]).exec(function(err, publicadors){
        return res.send(publicadors); 
    });
}

module.exports = routes;