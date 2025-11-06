 
 var http = require('http');
 var express = require('express');
 var app = express();
 var color = require('colors')
 var mongodb = require('mongodb')
 let bodyParser = require("body-parser")

 const MongoClient = mongodb.MongoClient;
 const uri = `mongodb://localhost:27017`;
 const client = new MongoClient(uri, { useNewUrlParser: true });



 app.use(express.static('./public'));
 app.set('view engine', 'ejs')
 app.set('views', './views');
 app.use(bodyParser.urlencoded({extended: false }))
 app.use(bodyParser.json())


 var servidor = http.createServer(app);
 servidor.listen(80)

 console.log('Servidor Ativo...'.rainbow);

//////////////////////////////////////////

app.get('/', function(req, res){
    res.redirect("aula_01/index.html");
});

app.get('/cadastrar', function(req, res){
    //res.redirect("resposta.html");

    var nome = req.query.nome;
    var email = req.query.email;
    var telefone = req.query.telefone;
    var nascimento = req.query.nascimento;

    res.render('resposta.ejs', {metodo:"GET",nome, email, telefone, nascimento});
});

app.post('/cadastrar', function(req, res){
    //res.redirect("resposta.html");

    var nome = req.body.nome;
    var email = req.body.email;
    var telefone = req.body.telefone;
    var nascimento = req.body.nascimento;

    res.render('resposta.ejs', {metodo:"POST", nome, email, telefone, nascimento});
});

app.post('/for', function(req, res){
    let qtde = req.query.qtde;
    console.log(qtde);
    res.render('for.ejs', {qtde})
});


////////////////////////////////////////////

var dbo = client.db("exemplo_bd");
var usuarios = dbo.collection("usuarios");

app.post("/cadastrar_usuario", function(req, resp) {
    console.log(req.body)
    var data = { db_nome: req.body.nome, db_login: req.body.login, db_senha: req.body.senha };

    usuarios.insertOne(data, function (err) {
      if (err) {
        resp.render('resposta_usuario', {resposta: "Erro ao Cadastrar Usuário!"})
      }
      else {
        resp.render('resposta_usuario', {resposta: "Usuário Cadastrado com Sucesso!"})        
      };
    });
  });

app.post("/logar_usuario", function(req, resp) {
    var data = {db_login: req.body.login, db_senha: req.body.senha };

    usuarios.find(data).toArray(function(err, items) {
      console.log(items);
      if (items.length == 0) {
        resp.render('resposta_usuario', {resposta: "Usuário/senha não encontrado!"})
      }else if (err) {
        resp.render('resposta_usuario', {resposta: "Erro ao logar usuário!"})
      }else {
        resp.render('resposta_usuario', {resposta: "Usuário logado com sucesso!"})        
      };
    });

  });

////////////////////////////////////

