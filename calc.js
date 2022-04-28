/* 
Módulos JS 
 Crio minhas funcões separadamente
 module.exports para enviar o modulo para o arquivo principal
 Recebo no arquivo principal usando require("./") dentro de uma varíavel.
*/

var FuncaoSoma = require("./soma");
var FuncaoSub = require("./sub");
var FuncaoMult = require("./mult");
var FuncaoDiv = require("./div");

// Print de uma string contatenando com a Função e dentro de parenteses as operaçoes
console.log("Resultado de sua soma é = ", FuncaoSoma(20,20));
console.log("Resultado de sua subtração é = ", FuncaoSub(20,10));
console.log("Resultado de sua multiplicação é = ", FuncaoMult(10,10));
console.log("Resultado de sua divisão é = ", FuncaoDiv(20,2));
