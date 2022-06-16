function Cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}
// __proto__
const Geraldo = new Cliente("Geraldo", "123456789", "geraldo@email.com", 100)

console.log(Geraldo)