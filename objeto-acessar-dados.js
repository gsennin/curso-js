const cliente = {
    nome: "Geraldo",
    idade: 26,
    cpf: "123456789",
    email: "geraldo@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"]
// console.log(cliente[chaves[0]])

// Ou

chaves.forEach(info => console.log(cliente[info]))
console.log(cliente["conta"])