var express = require("express");
var fs = require("fs");
const { request } = require("http");
var app = express();

var html = fs.readFileSync("index.html");

app.get("/", function(request,response){
    response.end(html);
});

app.get("/login", function(request,response){
        let nome = request.query.nome;
        let sobrenome = request.query.sobrenome;
        if(nome == undefined){
    response.end("Seja bem-vindo(a) usuario");
 } else{
    response.end("Seja bem-vindo(a)" + nome + "!")
 }
});


app.listen(8181, function(erro){
    if(erro){
        console.log(erro);
    }else{
        console.log("Servidor esta ligado.....");
    }
});