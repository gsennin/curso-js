const cliente = {
    nome: "Geraldo",
    idade: 26,
    cpf: "123456789",
    email: "geraldo@email.com",
}
// Conotação de pontos > Eu consigo acessar cada dado do meu objeto.
console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`)

// Imprimir somento os 3 primeiros dados do cpf #segurança
console.log(cliente.cpf.substring(0,3))