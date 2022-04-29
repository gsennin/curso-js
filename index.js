// Requisitando o express -> Dentro da const express || Em seguinda todo o Express está dentro da const app
const express = require("express");
const app = express();

// Criação de Rotas
app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html") // __dirname pega a raiz do projeto que é "C:\Users\User\Desktop\Test"
});

app.get("/sobre", function(req, res){
    res.send("Minha pagina sobre"); // res.send envio só texto || res.sendFile envio arquivo html igual da rota de cima 
});

app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu blog!");
});

/* Parametros
Crio eles atráves do /:algumacoisa depois da rota
res.send só envio 1 por vez, eles ficam listados no site. */
app.get('/blog1/:cargo/:nome', function (req, res){
    res.send("<h1>Ola " + req.params.nome + "</h1>" + "<h2> Seu cargo e: " + req.params.cargo + "</h2>");
});

// Criação do Servidor
app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost8081");
});