const cliente = {
    nome: "Geraldo",
    idade: 26,
    cpf: "123456789",
    email: "geraldo@email.com",
    fones: ["5599123456", "551329451634"],
    //Uma array de Objetos [{ }]
    dependentes: [{
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
}
// Adicionando nova depentente
cliente.dependentes.push({
    nome: "Alice",
    parentesco: "filha",
    dataNasc: "04/01/2014",
})

console.log(cliente)