var http = require('http');
var express = require('express');
var app = express();
var color = require('colors');
var mongodb = require('mongodb');
let bodyParser = require("body-parser");

const MongoClient = mongodb.MongoClient;
const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri, { useNewUrlParser: true });


app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var servidor = http.createServer(app);
servidor.listen(80);

console.log('Servidor Ativo...'.rainbow);


app.get('/', function(req, res){
    res.redirect("aula_01/index.html");
});

app.get('/cadastrar', function(req, res){
    var nome = req.query.nome;
    var email = req.query.email;
    var telefone = req.query.telefone;
    var nascimento = req.query.nascimento;

    res.render('resposta.ejs', {metodo:"GET", nome, email, telefone, nascimento});
});

app.post('/cadastrar', function(req, res){
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


client.connect().then(() => {

    var dbo = client.db("exemplo_bd");

    var usuarios = dbo.collection("usuarios");
    var postagem = dbo.collection("blog");

    var users = dbo.collection("users");
    var cars = dbo.collection("cars");

    console.log("MongoDB conectado!".green);

   
  });

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

   

    app.post("/cadastra", function(req, resp) {
        console.log(req.body)
        var data = { db_cpf: req.body.cpf, db_nome: req.body.nome, db_email: req.body.email, db_senha: req.body.senha };

        usuarios.insertOne(data, function (err) {
        if (err) {
            resp.render('resposta_usuario', {resposta: "Erro ao Cadastrar Usuário!"})
        }
        else {
            resp.render('resposta_usuario', {resposta: "Usuário Cadastrado com Sucesso!"})        
        };
        });
    });

    app.post("/login", function(req, resp) {
        var data = {db_cpf: req.body.cpf, db_senha: req.body.senha };

        usuarios.find(data).toArray(function(err, items) {
        console.log(items);
        if (items.length == 0) {
            resp.render('resposta_usuario', {resposta: "Usuário/Senha Não Encontrado!"})
        }else if (err) {
            resp.render('resposta_usuario', {resposta: "Erro ao Logar Usuário!"})
        }else {
            resp.render('resposta_usuario', {resposta: "Usuário Logado com Sucesso!"})        
        };
        });
    });

  

    app.get("/blog", function(req, resp) {
        postagem.find({}).toArray(function(err, items) {
            console.log(items);
            resp.render('blog', {postagem: items})
        });
    });

    app.get("/cadastrar_blog", function(req, resp) {
        resp.redirect("/lab_09/cadastrar_post.html");
    });

    app.post("/criando_post", function(req, resp) {
        var post = {
            bd_titulo: req.body.titulo,
            bd_resumo: req.body.resumo,
            bd_conteudo: req.body.conteudo
        };

        postagem.insertOne(post, function (err) {
        if (err) {
            resp.render('post', {resposta: "Erro ao Cadastrar o Post!"})
        }else {
            resp.render('post', {resposta: "Post Cadastrada com Sucesso!"})        
        };
        }); 
    });

   

    app.post("/register", function(req, resp) {
        var data = { 
            db_nome: req.body.name, 
            db_email: req.body.email, 
            db_password: req.body.password
        };

        users.insertOne(data, function (err) {
            if (err) {
            resp.render('resposta_usuario', {resposta: "Erro ao Cadastrar Usuário!"})
            }
            else {
            resp.render('resposta_usuario', {resposta: "Usuário Cadastrado com Sucesso!"})        
            };
        });
    });

    app.post("/log", function(req, resp) {
        var data = {db_email: req.body.email, db_password: req.body.password};

        users.find(data).toArray(function(err, items) {
            console.log(items);
            if (items.length == 0) {
            resp.render('resposta_usuario', {resposta: "Usuário/Senha não encontrado!"})
            }else if (err) {
            resp.render('resposta_usuario', {resposta: "Erro ao Logar!"})
            }else {
            resp.render('resposta_usuario', {resposta: "Usuário Logado com Sucesso!"})        
            };
        });

    });

  

    app.get("/cars", function(req, resp) {
        cars.find().toArray(function(err, items) {
            if (err) {
                resp.render('resposta_carros', {resposta: "Erro ao Carregar Carros!"});
            } else if (items.length === 0){
                resp.render('resposta_carros', {resposta: "Nenhum Carro Disponível"});
            } 
            else {
                resp.render('cars', {cars: items});
            }
        });
    });

    app.post("/car_registration", function(req, resp) {
        var data = { 
            db_marca: req.body.marca, 
            db_modelo: req.body.modelo, 
            db_ano: req.body.ano, 
            db_preco: req.body.preco, 
            db_qtde: Number(req.body.qtde)
        };

        cars.insertOne(data, function (err) {
            if (err) {
            resp.render('resposta_carros', {resposta: "Erro ao Cadastrar Carro!"})
            }
            else {
            resp.render('resposta_carros', {resposta: "Carro Cadastrado com Sucesso!"})        
            };
        });
    });

    app.get("/car_updater", function(req, resp) {
        resp.render("car_updater");
    });

    app.post("/car_updater", function(req, resp) {
        var data = { _id: new mongodb.ObjectId(req.body.id) };
        var newData = { $set: {db_preco: req.body.preco} };

        cars.updateOne(data, newData, function (err, result) {
        console.log(result);
        if (result.modifiedCount == 0) {
            resp.render('resposta_carros', {resposta: "Carro Não Encontrado!"})
        }else if (err) {
            resp.render('resposta_carros', {resposta: "Erro ao Atualizar Carro"})
        }else {
            resp.render('resposta_carros', {resposta: "Carro Atualizado com Sucesso!"})        
        };
        });
    });

    app.get("/remove_car", function(req, resp) {
       resp.render("remove_car");
    });


    app.post("/remove_car", function(req, resp) {
        var data = { _id: new mongodb.ObjectId(req.body.id) };
        
        cars.deleteOne(data, function (err, result) {
        console.log(result);
        if (result.deletedCount == 0) {
            resp.render('resposta_carros', {resposta: "Carro não Encontrado!"})
        }else if (err) {
            resp.render('resposta_carros', {resposta: "Erro ao Remover Carro!"})
        }else {
            resp.render('resposta_carros', {resposta: "Carro Removido com Sucesso!"})        
        };
        });

    });

    

    app.get("/sell_car", function(req, resp) {
       resp.render("sell_car");
    });


    app.post("/sell_car", function(req, resp) {
        var data = { _id: new mongodb.ObjectId(req.body.id) }; 

        var newData = { $inc: { db_qtde: -1 } }; 

        cars.updateOne(data, newData, function(err, result) {
            if (err) {
                return resp.render('resposta_carros', { resposta: "Erro ao vender carro!" });
            } 
            else if (result.modifiedCount == 0) {
                return resp.render('resposta_carros', { resposta: "Carro não encontrado!" });
            } 
            else {
                cars.findOne(data, function(err, carro) {
                    if (err) {
                        resp.render('resposta_carros', { resposta: "Erro ao verificar a quantidade do carro!" });
                    } else {
                        if (carro.db_qtde == 0) {
                            resp.render('resposta_carros', { resposta: "Carro esgotado! Quantidade zerada." });
                        } else {
                            resp.render('resposta_carros', { resposta: "Venda realizada com sucesso! Quantidade restante: " + carro.db_qtde });
                        }
                    }
                });
            }
        });
    });


});

