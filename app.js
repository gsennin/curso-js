var http = require('http');

http.createServer(function(req, res){
    res.end("Hello World! Welcome to my website");    
}).listen(8081);

console.log("Servidor rodando!");

/* ctrl + d = fecho o servidor no cmd
e no navegador digito localhost:8081 */