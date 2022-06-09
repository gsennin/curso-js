const cliente = {
    nome: "Geraldo",
    idade: 26,
    cpf: "123456789",
    email: "geraldo@email.com",
    fones: ["5599123456", "551329451634"]
} // Cliente com 2 telefones em uma array
                      // Coloco o nome que eu quiser no parametro
cliente.fones.forEach( todosOsFones => console.log(todosOsFones))

