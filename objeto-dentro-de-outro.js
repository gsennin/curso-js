const cliente = {
    nome: "Geraldo",
    idade: 26,
    cpf: "123456789",
    email: "geraldo@email.com",
    fones: ["5599123456", "551329451634"]
}
//Criando outro objeto dentro do objeto clientes
cliente.dependentes = {
    nome: "Sara",
    parentesco:"filha",
    dataNasc:"20/21/2020"
}

console.log(cliente)
// Alterando o nome 
cliente.dependentes.nome = "Sara Silva"
console.log(cliente)