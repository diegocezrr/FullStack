 
 var http = require('http');
 var express = require('express');
 var app = express();
 var color = require('colors')

 app.use(express.static('./public'));
app.set('view engine', 'ejs')
app.set('views', './views');
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


