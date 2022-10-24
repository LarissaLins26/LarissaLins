var calculadora = require("./calculadora");
var promptSync =require("prompt-sync");
var prompt = promptSync();
var http = require("http");

var prova1 = parseInt(prompt("Digite a nota da prova 1"));
var prova2 = parseInt(prompt("Digite a nota da prova 2"));

var somaAV1 = calculadora.soma(prova1, prova2);
var AV1 =  calculadora.divisao(somaAV1, 2);


http.createServer(function(request,response){
    response.end("<h1> Ola mundo!<h1>");

}).listen(8181);
console.log("servidor no ar...");
